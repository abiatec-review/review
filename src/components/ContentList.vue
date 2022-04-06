<template>
  <the-header />
  <user-alert v-if="alertIsVisible" :title="name" @close="hideAlert">
    <p>Some characters imformation...</p>
  </user-alert>
  <section class="container">
    <ul v-if="items.lenght > 0">
      <li v-for="item in items" :key="item.id">
        <p>{{ item.name }}</p>
        <base-image :imagePath="item.image" :alt="item.name" @click="showAlert(item.name)" />
      </li>
    </ul>
    <div v-else>There are no characters yet. Try to input any name above!</div>
  </section>
</template>

<script lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue';
import UserAlert from '@/components/UserAlert.vue';
import { useStore } from '@/store';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TheHeader,
    UserAlert,
  },
  setup() {
    const store = useStore();
    // store.dispatch('fetchData');

    const alertIsVisible = ref(false);
    const name = ref('');

    function showAlert(charactersName: string) {
      alertIsVisible.value = true;
      name.value = charactersName;
    }

    function hideAlert() {
      alertIsVisible.value = false;
    }

    window.onscroll = () => {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        // store.dispatch('fetchAnotherData');
      }
    };

    return {
      items: computed(() => store.getters.getCharactersList),
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
  grid-template-columns: repeat(5, 1fr);

  li {
    list-style: none;
    padding: 10px 20px;
  }
}
</style>
