<template>
  <craftily-footer-social>
    <slot></slot>
  </craftily-footer-social>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterSocial',
});
</script>
