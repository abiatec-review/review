<template>
  <BaseInput type="text" placeholder="Enter a character's name" v-model.trim="modelValue" />
  <BaseButton @fetchNamedSearch="submit" :disabled="!modelValue">Submit</BaseButton>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../../store';
import BaseButton from '../atoms/BaseButton.vue';
import BaseInput from '../atoms/BaseInput.vue';

export default defineComponent({
  components: { BaseButton, BaseInput },
  setup() {
    const store = useStore();
    const modelValue = ref('');

    function submit() {
      if (modelValue.value === '') {
        return;
      }
      store.commit('setSearchedCharactersName', modelValue.value);
      store.dispatch('fetchFirstData');
      modelValue.value = '';
    }

    return { modelValue, submit };
  },
});
</script>
