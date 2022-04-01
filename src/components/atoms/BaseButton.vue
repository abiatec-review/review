<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  height: 2.325rem;
  background: #767676;
  border-radius: 0.25rem;
  padding: 0 1rem;
  outline: 0;
  border: 0;
  color: #FFF;
  transition: background-color 100ms ease-in-out;
  cursor: pointer;
}

button:hover {
  background: #767676C0;
}
</style>
