<template>
  <craftily-footer-link :href="href">
    <slot></slot>
  </craftily-footer-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterLink',
  props: {
    href: String,
  },
  inheritAttrs: false,
});
</script>
