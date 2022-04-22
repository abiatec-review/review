<template>
  <transition name="backdrop">
    <div v-if="open" class="backdrop" @click="closeDialog" @keydown="closeDialog"></div>
  </transition>
  <transition name="modal">
    <dialog open v-if="open">
      <header>
        <a @click="profile = true" @keyup="profile = true">Profile</a>
        <a @click="profile = false" @keyup="profile = false">Episods</a>
      </header>
      <div>
        <CharactersCard v-if="profile" :characterProfile="characterProfile" />
        <EpisodesCard
          v-else
          :profile="profile"
          :currentEpisodeData="currentEpisodeData"
          :charsImagesFromCurrentEpisode="charsImagesFromCurrentEpisode"
        />
      </div>
      <menu>
        <button @click="closeDialog">Close</button>
      </menu>
    </dialog>
  </transition>
</template>

<script>
// eslint-disable-next-line
import { computed, defineComponent, ref, watch } from 'vue';
import axios from 'axios';
import CharactersCard from './CharactersCard.vue';
import EpisodesCard from './EpisodesCard.vue';

export default defineComponent({
  name: 'UserDialog',
  components: { CharactersCard, EpisodesCard },
  props: { title: String, open: Boolean, characterProfile: Object },
  emits: ['close'],
  setup(props, { emit }) {
    const profile = ref(true);

    const allCharProfileEpisodes = computed(() => props.characterProfile.episode);
    const threeCharEpisodes = computed(() => allCharProfileEpisodes.value?.slice(0, 3));
    const currentEpisodeData = ref([]);
    const charsImagesFromCurrentEpisode = ref([]);

    watch(threeCharEpisodes, () => {
      currentEpisodeData.value = [];
      threeCharEpisodes.value.forEach(async (episode) => {
        const { data } = await axios.get(episode);
        currentEpisodeData.value.push(data);
        charsImagesFromCurrentEpisode.value = [];
        const episodeProfileChars = data.characters?.slice(0, 3);
        episodeProfileChars.forEach(async (char) => {
          const res = await axios.get(char);
          const charImage = res.data.image;
          charsImagesFromCurrentEpisode.value.push(charImage);
        });
      });
      console.log(currentEpisodeData.value);
    });

    function closeDialog() {
      emit('close');
    }

    return {
      closeDialog,
      profile,
      currentEpisodeData,
      charsImagesFromCurrentEpisode,
    };
  },
});
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

a {
  font: inherit;
  font-size: large;
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

a:hover,
a:active,
a:focus {
  color: black;
}

dialog {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 30vh;
  left: calc(50% - 15rem);
  width: 45rem;
  background-color: white;
  z-index: 100;
  overflow: hidden;
}

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #767676;
  color: white;
  box-shadow: rgba(149, 157, 165) 0 8px 24px;
}

dialog div {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

button {
  font: inherit;
  background-color: #767676;
  border: 1px solid #767676;
  border-radius: 8px;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #767676c0;
  border-color: #767676c0;
}

.modal {
  &-enter-active {
    animation: modal 0.3s ease-out;
  }

  &-leave-active {
    animation: modal 0.3s ease-in reverse;
  }
}

.backdrop {
  &-enter-active {
    animation: backdrop 0.3s ease-out;
  }

  &-leave-active {
    animation: backdrop 0.3s ease-in reverse;
  }
}

@keyframes backdrop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
