<template>
  <base-input type="text" placeholder="Enter a character's name" v-model="modelValue" />
  <base-button @fetchNamedSearch="submit">Submit</base-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseInput from '../atoms/BaseInput.vue';
import { useStore } from '../../store';

export default defineComponent({
  components: { BaseInput, BaseButton },
  name: 'InputSearch',
  setup() {
    const store = useStore();
    const modelValue = ref('');

    function submit() {
      store.commit('setSearchedCharactersName', modelValue.value);
      store.dispatch('fetchFirstData');
      modelValue.value = '';
    }

    return { modelValue, submit };
  },
});
</script>

<style scoped lang="scss"></style>
