<template>
  <craftily-spinner :size="size" :color="color" :label="label" v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/spinner';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  label?: string;
}

export default defineComponent({
  name: 'Spinner',
  props: {
    size: {
      type: String as () => 'sm' | 'md' | 'lg' | 'xl',
      default: 'md',
    },
    color: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  inheritAttrs: false,
});
</script>
