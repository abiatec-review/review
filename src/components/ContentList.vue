<template>
  <user-alert :open="alertIsVisible" :title="name" @close="hideAlert">
    <p>Some characters imformation...</p>
  </user-alert>
  <section class="container">
    <transition-group mode="out-in" tag="ul" name="user-list">
      <li v-for="item in items" :key="item.id">
        <p>{{ item.name }}</p>
        <base-image :imagePath="item.image" :alt="item.name" @click="showAlert(item.name, item.image)" />
      </li>
    </transition-group>
    <div v-if="items.length < 1">There are no characters yet. Try to input any name above!</div>
  </section>
</template>

<script lang="ts">
import UserAlert from '@/components/UserAlert.vue';
import { useStore } from '@/store';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    UserAlert,
  },
  setup() {
    const store = useStore();

    const alertIsVisible = ref(false);
    const name = ref('');

    function showAlert(charactersName: string) {
      alertIsVisible.value = true;
      name.value = charactersName;
    }

    function hideAlert() {
      alertIsVisible.value = false;
    }

    const items = computed(() => store.getters.getCharactersList);

    window.onscroll = () => {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        store.dispatch('fetchExtraData');
      }
    };

    return {
      items,
      showAlert,
      hideAlert,
      alertIsVisible,
      name,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding-top: 150px;
  padding-bottom: 50px;
}

ul {
  // display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    list-style: none;
    padding: 10px 20px;
  }
}

.user-list-enter-active,
.user-list-leave-active {
  transition: opacity 0.5s;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
}
.user-list-leave-from,
.user-list-enter-to {
  opacity: 1;
}

.user-list-move {
  transition: trasform 0.8s ease;
}
</style>
