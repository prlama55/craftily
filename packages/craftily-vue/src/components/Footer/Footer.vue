<template>
  <craftily-footer v-bind="attrs">
    <FooterBrand v-if="$slots.brand">
      <slot name="brand"></slot>
    </FooterBrand>

    <FooterNavigation v-if="$slots.navigation">
      <slot name="navigation"></slot>
    </FooterNavigation>

    <FooterSocial v-if="$slots.social">
      <slot name="social"></slot>
    </FooterSocial>

    <FooterCopyright v-if="$slots.copyright">
      <slot name="copyright"></slot>
    </FooterCopyright>

    <!-- Default slot for any other custom content -->
    <slot></slot>
  </craftily-footer>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

// Ensures craftily-footer web component is registered
import '@craftily/ui/footer';

// Vue Wrappers for footer sections
// These components (FooterBrand, etc.) might also benefit from a similar refactoring
// if they are intended to be configured via props.
import FooterBrand from './FooterBrand.vue';
import FooterNavigation from './FooterNavigation.vue';
import FooterSocial from './FooterSocial.vue';
import FooterCopyright from './FooterCopyright.vue';

// Define a name for the component (useful for Vue Devtools) and control attribute inheritance.
// inheritAttrs: false means attributes not defined as props won't automatically apply to this component's root.
// We manually bind them to <craftily-footer> using v-bind="attrs".
defineOptions({
  name: 'Footer',
  inheritAttrs: false,
});

// Access attributes passed to this component that are not declared as props.
const attrs = useAttrs();

// If the CraftilyFooter Vue component itself needed to accept specific, typed props,
// you would define them here. For example:
//
// interface Props {
//   theme?: 'light' | 'dark';
//   fullWidth?: boolean;
// }
// const props = withDefaults(defineProps<Props>(), {
//   theme: 'light',
//   fullWidth: false,
// });
//
// These `props` could then be used in this component's logic or template,
// e.g., :class="`footer--${props.theme}`" or passed to child elements.
// Attributes defined as props would not be part of `attrs`.
</script>
