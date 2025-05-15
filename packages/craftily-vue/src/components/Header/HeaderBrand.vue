<template>
  <craftily-header-brand v-bind="attrs">
    <slot></slot>
  </craftily-header-brand>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import '@craftily/ui/header';

defineOptions({
  name: 'HeaderBrand',
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>
