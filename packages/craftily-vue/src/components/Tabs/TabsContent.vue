<template>
  <craftily-tabs-content :value="value" :class="className" v-bind="attrs">
    <slot></slot>
  </craftily-tabs-content>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/tabs';

defineOptions({
  name: 'TabsContent',
  inheritAttrs: false,
});

export interface TabsContentProps {
  value: string;
  className?: string;
}

const props = withDefaults(defineProps<TabsContentProps>(), {
  className: undefined,
});

// Access attributes not defined as props
const attrs = useAttrs();
</script>
