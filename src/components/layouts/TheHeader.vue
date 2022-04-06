<template>
  <header>
    <base-image :imagePath="imagePath" logo alt="logo" />
    <input-search></input-search>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputSearch from '../molecules/InputSearch.vue';

export default defineComponent({
  components: { InputSearch },
  name: 'TheHeader',
  setup() {
    return { imagePath: 'logo192.png' };
  },
});
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 3rem;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
}
</style>
