<template>
  <craftily-badge :variant="variant" :dot="dot" :class="className" v-bind="attrs" :style="sizeStyles">
    <slot></slot>
  </craftily-badge>
</template>

<script setup lang="ts">
import { useAttrs, computed } from 'vue';
import '@craftily/ui/badge'; // Ensures craftily-badge web component is registered

// Define component name and attribute inheritance behavior
defineOptions({
  name: 'CraftilyBadge',
  inheritAttrs: false, // Non-prop attributes will be available in `attrs`
});

// Define props with types and default values
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  dot?: boolean;
  size?: 'sm' | 'md' | 'lg' | string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  dot: false,
  size: 'md',
  className: '',
});

// Map size tokens to CSS styles
const sizeStyles = computed(() => {
  if (!props.size) return {};

  // Map size tokens to CSS values
  const sizeMap: Record<string, { fontSize: string; padding: string }> = {
    sm: { fontSize: '0.65rem', padding: '0.15em 0.4em' },
    md: { fontSize: '0.75rem', padding: '0.25em 0.5em' },
    lg: { fontSize: '0.85rem', padding: '0.35em 0.6em' },
  };

  // If it's a predefined size, use the mapped values
  if (sizeMap[props.size]) {
    return {
      '--badge-font-size': sizeMap[props.size].fontSize,
      '--badge-padding': sizeMap[props.size].padding,
    };
  }

  // If it's a custom size, assume it's a font-size value
  return {
    '--badge-font-size': props.size,
  };
});

// Access attributes not defined as props, to be passed to the underlying web component
const attrs = useAttrs();

// Props (variant, dot) and computed values (sizeStyles) are available in the template.
// Other attributes captured by `attrs` are passed via `v-bind="attrs".
</script>
