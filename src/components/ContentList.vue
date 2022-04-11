<template>
  <user-alert :open="alertIsVisible" @close="hideAlert" :characterProfile="selectedItem"> </user-alert>
  <section class="container">
    <transition-group mode="out-in" tag="ul" name="user-list">
      <li v-for="item in items" :key="item.id">
        <div class="card">
          <p>{{ item.name }}</p>
          <base-image :imagePath="item.image" iconOpacity :alt="item.name" @click="showAlert(item)" />
        </div>
      </li>
    </transition-group>
    <div v-if="items.length < 1">There are no characters yet. Try to input any name above!</div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import UserAlert from '@/components/UserAlert.vue';
import { Item } from '@/modules/types';
import { useStore } from '@/store';

export default defineComponent({
  name: 'ContentList',
  components: {
    UserAlert,
  },
  setup() {
    const store = useStore();

    const alertIsVisible = ref(false);
    const selectedItem = ref({});

    function showAlert(item: Item) {
      alertIsVisible.value = true;
      selectedItem.value = item;
      console.log(item);
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
      selectedItem,
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
  grid-template-columns: repeat(3, 1fr);

  li {
    list-style: none;
    padding: 10px 20px;
  }
}

p {
  text-transform: uppercase;
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
