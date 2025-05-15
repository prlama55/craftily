<template>
  <craftily-alert
    :type="type"
    :title="title"
    :part="part"
    :dismissible="dismissible"
    :class="className"
    v-bind="attrs"
  >
    <slot></slot>
  </craftily-alert>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/alert'; // Ensures craftily-alert web component is registered

// Define component name and attribute inheritance behavior
defineOptions({
  name: 'Alert',
  inheritAttrs: false, // Non-prop attributes will be available in `attrs`
});

// Define props with types and default values
interface Props {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  part?: string; // Web component might handle undefined as "no specific part styling"
  dismissible?: boolean;
  className?: string; // CSS class name
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  title: '',
  // `part` will default to undefined if not provided, which is fine.
  dismissible: false,
  className: undefined,
});

// Access attributes not defined as props, to be passed to the underlying web component
const attrs = useAttrs();

// The props (type, title, part, dismissible) are directly available in the template.
// Other attributes captured by `attrs` are passed via `v-bind="attrs".
</script>
