<template>
  <craftily-footer-brand>
    <slot></slot>
  </craftily-footer-brand>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer'; // Ensures web component is registered

export default defineComponent({
  name: 'FooterBrand',
});
</script>
