<template>
  <craftily-header-nav v-bind="attrs">
    <slot></slot>
  </craftily-header-nav>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import '@craftily/ui/header';

defineOptions({
  name: 'HeaderNav',
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>
