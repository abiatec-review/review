<template>
  <div>
    <the-header />
    <content-list />
  </div>
</template>

<script lang="ts">
import ContentList from '@/components/ContentList.vue';
import TheHeader from '@/components/layouts/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TheHeader,
    ContentList,
  },
});
</script>
