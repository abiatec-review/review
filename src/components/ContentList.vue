<template>
  <UserAlert :open="alertIsVisible" @close="hideAlert" :characterProfile="selectedItem"> </UserAlert>
  <section class="container">
    <transition-group mode="out-in" tag="ul" name="user-list">
      <li v-for="item in orderedByCharNamesItems" :key="item.id">
        <div class="card">
          <p>{{ item.name }}</p>
          <BaseImage :imagePath="item.image" iconOpacity :alt="item.name" @click="showAlert(item)" />
        </div>
      </li>
    </transition-group>
    <BaseLoader v-if="isFetching" />
    <div v-if="items.length < 1 && !isFetching">There are no characters yet. Try to input any name above!</div>
    <div class="infinite-scroll" ref="infiniteScroll"></div>
  </section>
</template>

<script lang="ts">
// eslint-disable-next-line
import { computed, defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';
import UserAlert from '@/components/UserAlert.vue';
import { Item } from '@/modules/types';
import { useStore } from '@/store';

const BaseLoader = defineAsyncComponent(() => import('@/components/atoms/BaseLoader.vue'));

export default defineComponent({
  components: {
    UserAlert,
    BaseLoader,
  },
  setup() {
    const store = useStore();

    const alertIsVisible = ref(false);
    const selectedItem = ref({});
    const infiniteScroll = ref(null);
    const isFetching = computed(() => store.state.isFetchingData);

    function showAlert(item: Item) {
      alertIsVisible.value = true;
      selectedItem.value = item;
      console.log(item);
    }

    function hideAlert() {
      alertIsVisible.value = false;
    }

    const items = computed<Item[]>(() => store.getters.getCharactersList);
    const orderedByCharNamesItems = computed(() => [...items.value].sort((a, b) => (a.name > b.name ? 1 : -1)));

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && items.value.length) {
            console.log('Have watched');
            store.dispatch('fetchExtraData');
          } else {
            console.log('I am out');
          }
        });
      });

      observer.observe(infiniteScroll.value!);
    });

    return {
      items,
      showAlert,
      hideAlert,
      alertIsVisible,
      selectedItem,
      infiniteScroll,
      isFetching,
      orderedByCharNamesItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding-top: 150px;
}

ul {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  li {
    list-style: none;
    padding: 10px 20px;
  }
}

p {
  text-transform: uppercase;
}

.infinite-scroll {
  height: 50px;
}

.user-list {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-leave-from,
  &-enter-to {
    opacity: 1;
  }

  &-move {
    transition: trasform 0.8s ease;
  }
}
</style>
