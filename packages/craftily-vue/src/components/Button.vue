<template>
  <button
    :class="buttonClassNames"
    :aria-busy="isLoading ? 'true' : undefined"
    :disabled="isLoading"
  >
    <span v-if="isLoading">Loading...</span>
    <span v-else><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed, DefineComponent } from 'vue';
import { JSX } from 'vue/jsx-runtime';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'info';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonProps<C extends keyof JSX.IntrinsicElements = 'button'> = {
  as?: C;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children?: string | HTMLElement;
};

export type ButtonComponent = DefineComponent<ButtonProps>;
const props = defineProps<ButtonProps>();

const sizeClasses = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
};

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'btn-danger',
  info: 'btn-info',
};

const buttonClassNames = computed(() =>
  [
    'btn',
    props.size && sizeClasses[props.size],
    props.variant && variantClasses[props.variant],
  ].join(' ')
);
</script>
