<template>
  <craftily-card-body :class="className" v-bind="attrs">
    <slot></slot>
  </craftily-card-body>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/card';

defineOptions({
  name: 'CardBody',
  inheritAttrs: false,
});

export interface CardBodyProps {
  className?: string;
}

const props = withDefaults(defineProps<CardBodyProps>(), {
  className: undefined,
});

const attrs = useAttrs();
</script>
