<template>
  <button v-bind="$attrs" @click="$emit('fetchNamedSearch')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
});
</script>

<style scoped lang="scss">
button {
  height: 2.325rem;
  font-size: 1rem;
  background: #767676;
  border-radius: 0.25rem;
  padding: 0 1rem;
  outline: 0;
  border: 0;
  color: #fff;
  transition: background-color 100ms ease-in-out;
  cursor: pointer;
}

button:hover {
  background: #767676c0;
}
</style>
