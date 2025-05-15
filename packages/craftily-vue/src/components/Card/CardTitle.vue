<template>
  <craftily-card-title :class="className" v-bind="attrs">
    <slot></slot>
  </craftily-card-title>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/card';

defineOptions({
  name: 'CardTitle',
  inheritAttrs: false,
});

export interface CardTitleProps {
  className?: string;
}

const props = withDefaults(defineProps<CardTitleProps>(), {
  className: undefined,
});

const attrs = useAttrs();
</script>
