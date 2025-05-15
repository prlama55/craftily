<template>
  <craftily-footer-navigation>
    <slot></slot>
  </craftily-footer-navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterNavigation',
});
</script>
