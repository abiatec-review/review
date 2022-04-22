<template>
  <section>
    <BaseImage class="img" :imagePath="characterProfile.image" :alt="characterProfile.name" />
    <p>
      {{ characterProfile.name }}
    </p>
    <p>
      Gender: <strong>{{ characterProfile.gender }}</strong>
    </p>
    <p>
      Species: <strong>{{ characterProfile.species }}</strong>
    </p>
    <p>
      Status: <strong>{{ characterProfile.status }}</strong>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    characterProfile: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.img {
  margin: 20px 0 20px 0;
}

p {
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 5px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
