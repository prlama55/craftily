<template>
  <craftily-footer-nav-group :title="title">
    <slot></slot>
  </craftily-footer-nav-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer'; // Ensures web component is registered

export default defineComponent({
  name: 'FooterNavGroup',
  props: {
    title: String,
  },
  inheritAttrs: false, // Good practice for wrappers if attributes are explicitly handled or passed
});
</script>
