<template>
  <the-header/>
</template>

<script lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TheHeader,
  },
});
</script>
