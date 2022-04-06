<template>
  <input v-bind="$attrs" v-model="theModel" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const theModel = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    return { theModel };
  },
});
</script>

<style scoped lang="scss">
input {
  height: 2.325rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  outline: 0;
  border: 0.1rem solid #767676;
  margin-right: 1rem;
}
</style>
