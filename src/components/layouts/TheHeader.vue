<template>
  <header class='header'>
    <img class='header-logo' src="../../assets/logo192.png" alt="">
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 3rem;
  background-color: #fff;
  /* border-radius: 1.5rem; */
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
}

input {
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  outline: 0;
  border: 0.1rem solid #767676;
  margin-right: 1rem;
}


.header-logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 5rem;
  height: 5rem;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .header-logo {
    animation: Header-logo-spin infinite 20s linear;
  }
}

@keyframes Header-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
