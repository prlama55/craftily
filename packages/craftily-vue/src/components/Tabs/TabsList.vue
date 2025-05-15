<template>
  <craftily-tabs-list :class="className" v-bind="attrs">
    <slot></slot>
  </craftily-tabs-list>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/tabs';

defineOptions({
  name: 'TabsList',
  inheritAttrs: false,
});

export interface TabsListProps {
  className?: string;
}

const props = withDefaults(defineProps<TabsListProps>(), {
  className: undefined,
});

// Access attributes not defined as props
const attrs = useAttrs();
</script>
