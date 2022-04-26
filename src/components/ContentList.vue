<template>
  <UserAlert :open="alertIsVisible" @close="hideAlert" :characterProfile="selectedItem"> </UserAlert>
  <ErrorModal v-if="errorMessage" :errorMessage="errorMessage" @close="closeErrorModal" :open="!!errorMessage" />
  <section class="container">
    <transition-group
      mode="out-in"
      tag="ul"
      name="user-list"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <li v-for="item in items" :key="item.id">
        <div v-if="item" class="card">
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
import BaseImage from './atoms/BaseImage.vue';
import ErrorModal from './ErrorModal.vue';

const BaseLoader = defineAsyncComponent(() => import('@/components/atoms/BaseLoader.vue'));

export default defineComponent({
  components: {
    UserAlert,
    BaseLoader,
    BaseImage,
    ErrorModal,
  },
  setup() {
    const store = useStore();

    const alertIsVisible = ref(false);
    const selectedItem = ref({});
    const infiniteScroll = ref(null);
    const isFetching = computed(() => store.state.isFetchingData);
    const errorMessage = computed(() => store.state.errorMessage);

    function closeErrorModal() {
      store.commit('resetErrorMessage');
    }

    function showAlert(item: Item) {
      alertIsVisible.value = true;
      selectedItem.value = item;
      console.log(item);
    }

    function hideAlert() {
      alertIsVisible.value = false;
    }

    const items = computed<Item[]>(() => store.getters.getCharactersList);
    // const orderedByCharNamesItems = computed(() => [...items.value].sort((a, b) => (a.name > b.name ? 1 : -1)));
    const orderedByCharNamesItems = computed(() => [...items.value].sort((a, b) => (a.name > b.name ? 1 : -1)));

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && items.value.length && !errorMessage.value) {
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
      errorMessage,
      closeErrorModal,
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

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.user-list {
  &-move {
    transition: trasform 1s;
  }
}
</style>
