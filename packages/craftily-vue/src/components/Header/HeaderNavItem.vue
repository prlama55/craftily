<template>
  <craftily-header-nav-item :active="props.active" v-bind="attrs">
    <slot></slot>
  </craftily-header-nav-item>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import type { HeaderNavItemProps } from './types';
import '@craftily/ui/header';

// Define component options
defineOptions({
  name: 'HeaderNavItem',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<HeaderNavItemProps>(), {
  active: false,
});

// Access non-prop attributes
const attrs = useAttrs();
</script>
