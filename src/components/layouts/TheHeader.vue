<template>
  <header>
    <BaseImage :imagePath="imagePath" logo alt="logo" />
    <InputSearch />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseImage from '../atoms/BaseImage.vue';
import InputSearch from '../molecules/InputSearch.vue';

export default defineComponent({
  components: { InputSearch, BaseImage },
  setup() {
    return { imagePath: 'spinner.png' };
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
  z-index: 10;
  background-color: rgb(215, 215, 215);
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
}
</style>
