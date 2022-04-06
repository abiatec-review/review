<template>
  <img :class="logo ? 'logo' : 'icon'" :src="getImgUrl" :alt="alt" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseImage',
  props: {
    imagePath: String,
    logo: Boolean,
    alt: String,
  },
  setup(props) {
    const getImgUrl = computed(() => {
      if (props.logo) {
        // eslint-disable-next-line
        return require(`@/assets/${props.imagePath}`);
      }
      return props.imagePath;
    });

    return { getImgUrl };
  },
});
</script>

<style scoped lang="scss">
.icon {
  width: 200px;
  border-radius: 40%;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 5rem;
  height: 5rem;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: logo-spin infinite 20s linear;
  }
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
