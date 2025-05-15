<template>
  <craftily-avatar
    :variant="variant"
    :shape="shape"
    :src="src"
    :alt="alt"
    :size="computedSize"
    :class="className"
    v-bind="attrs"
  >
    <slot></slot>
  </craftily-avatar>
</template>

<script setup lang="ts">
import { useAttrs, computed } from 'vue';
import '@craftily/ui/avatar'; // Ensures craftily-avatar web component is registered

// Define component name and attribute inheritance behavior
defineOptions({
  name: 'Avatar',
  inheritAttrs: false, // Non-prop attributes will be available in `attrs`
});

// Define props with types and default values
interface Props {
  variant?: 'primary' | 'secondary' | 'danger';
  shape?: 'square' | 'circle';
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string; // Predefined sizes or custom CSS value
  className?: string; // CSS class name
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  shape: 'circle',
  // src will default to undefined
  alt: '',
  size: 'md', // Default to medium size
  className: undefined,
});

// Map size tokens to actual CSS values
const computedSize = computed(() => {
  if (!props.size) return '2.5rem'; // Default size

  // Map size tokens to CSS values
  const sizeMap: Record<string, string> = {
    sm: '1.5rem', // Small
    md: '2.5rem', // Medium (default)
    lg: '3.5rem', // Large
    xl: '5rem', // Extra large
  };

  // If it's a predefined size, use the mapped value, otherwise use the value directly
  return sizeMap[props.size] || props.size;
});

// Access attributes not defined as props, to be passed to the underlying web component
const attrs = useAttrs();

// Props (variant, shape, src, alt) and computed values (computedSize) are available in the template.
// Other attributes captured by `attrs` are passed via `v-bind="attrs".
</script>
