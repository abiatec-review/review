<template>
  <header class='header'>
    <img src="../../assets/logo192.png" alt="">
    <input type="text">
    <base-button>Submit</base-button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 5rem;
  background-color: rgb(189, 189, 189);
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 80px;
  width: 80px;
}

</style>
