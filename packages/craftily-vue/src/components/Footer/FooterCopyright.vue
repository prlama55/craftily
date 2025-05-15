<template>
  <craftily-footer-copyright>
    <slot></slot>
  </craftily-footer-copyright>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterCopyright',
});
</script>
