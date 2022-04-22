<template>
  <section>
    <div class="display-episode">
      <ul>
        <li v-for="episode in currentEpisodeData" :key="episode.id">
          <p>
            {{ episode.episode }} - <strong>{{ episode.name }}</strong>
          </p>
        </li>
      </ul>
      <ul v-if="!profile" class="display-images">
        <li class="display-image" v-for="charImg in charsImagesFromCurrentEpisode" :key="charImg">
          <base-image class="image" :imagePath="charImg" :alt="'image'" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Episode } from '@/modules/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    currentEpisodeData: {
      type: Array as PropType<Episode[]>,
      required: true,
    },
    charsImagesFromCurrentEpisode: {
      type: Array,
      required: true,
    },
    profile: Boolean,
  },
  name: 'CharactersCard',
});
</script>

<style lang="scss" scoped>
.display-episode {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.display-images {
  padding-left: 0;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.image {
  height: 80px;
  width: 80px;
}

ul {
  padding-inline-start: 0;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 100px;
  }
}
</style>
