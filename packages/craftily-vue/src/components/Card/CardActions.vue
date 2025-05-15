<template>
  <craftily-card-actions :class="className" v-bind="attrs">
    <slot></slot>
  </craftily-card-actions>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/card';

defineOptions({
  name: 'CardActions',
  inheritAttrs: false,
});

export interface CardActionsProps {
  className?: string;
}

const props = withDefaults(defineProps<CardActionsProps>(), {
  className: undefined,
});

const attrs = useAttrs();
</script>
