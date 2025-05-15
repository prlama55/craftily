<template>
  <craftily-footer-social-link :href="href" :icon="icon" :label="label">
    <slot></slot>
  </craftily-footer-social-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/footer';

export default defineComponent({
  name: 'FooterSocialLink',
  props: {
    href: String,
    icon: String,
    label: String,
  },
  inheritAttrs: false,
});
</script>
