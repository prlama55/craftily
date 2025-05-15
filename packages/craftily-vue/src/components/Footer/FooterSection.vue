<template>
  <craftily-footer-section v-bind="$attrs">
    <slot></slot>
  </craftily-footer-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterSection',
  inheritAttrs: false,
});
</script>
