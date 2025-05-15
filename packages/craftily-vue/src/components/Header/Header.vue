<template>
  <craftily-header v-bind="attrs">
    <slot></slot>
  </craftily-header>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import '@craftily/ui/header';

defineOptions({
  name: 'Header',
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>
