<template>
  <BaseInput type="text" placeholder="Enter a character's name" v-model.trim="modelValue" />
  <BaseButton @fetchNamedSearch="submit" :disabled="!modelValue">Submit</BaseButton>
  <transition name="btn-reset">
    <BaseButton @fetchNamedSearch="reset" v-if="items.length" style="color: black">Reset</BaseButton>
  </transition>
</template>

<script lang="ts">
import { Item } from '@/modules/types';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '../../store';
import BaseButton from '../atoms/BaseButton.vue';
import BaseInput from '../atoms/BaseInput.vue';

export default defineComponent({
  components: { BaseButton, BaseInput },
  setup() {
    const store = useStore();
    const modelValue = ref('');
    const items = computed<Item[]>(() => store.getters.getCharactersList);

    function reset() {
      store.commit('resetCharactersList');
    }

    function submit() {
      if (modelValue.value === '') {
        return;
      }
      store.commit('setSearchedCharactersName', modelValue.value);
      store.dispatch('fetchFirstData');
      modelValue.value = '';
    }

    return {
      modelValue,
      submit,
      items,
      reset,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn-reset-enter-active {
  animation: bounce-in 0.5s;
}
.btn-reset-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
