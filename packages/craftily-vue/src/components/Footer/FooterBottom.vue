<template>
  <craftily-footer-bottom v-bind="$attrs">
    <slot></slot>
  </craftily-footer-bottom>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterBottom',
  inheritAttrs: false,
});
</script>
