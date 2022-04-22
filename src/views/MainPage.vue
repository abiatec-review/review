<template>
  <div>
    <TheHeader />
    <ContentList />
  </div>
</template>

<script lang="ts">
import ContentList from '@/components/ContentList.vue';
import TheHeader from '@/components/layouts/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheHeader,
    ContentList,
  },
});
</script>
