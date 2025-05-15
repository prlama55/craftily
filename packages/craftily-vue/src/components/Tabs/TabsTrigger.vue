<template>
  <craftily-tabs-trigger :value="value" :disabled="disabled" :class="className" v-bind="attrs">
    <slot></slot>
  </craftily-tabs-trigger>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/tabs';

defineOptions({
  name: 'TabsTrigger',
  inheritAttrs: false,
});

export interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
}

const props = withDefaults(defineProps<TabsTriggerProps>(), {
  disabled: false,
  className: undefined,
});

// Access attributes not defined as props
const attrs = useAttrs();
</script>
