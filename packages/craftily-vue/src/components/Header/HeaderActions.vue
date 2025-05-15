<template>
  <craftily-header-actions v-bind="attrs">
    <slot></slot>
  </craftily-header-actions>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import '@craftily/ui/header';

defineOptions({
  name: 'HeaderActions',
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>
