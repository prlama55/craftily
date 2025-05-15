<template>
  <craftily-button
    :variant="variant"
    :size="size"
    :disabled="disabled"
    :icon-position="iconPosition"
    :label="label"
    :class="className"
    v-bind="attrs"
    @click="handleClick"
  >
    <!-- Pass Button.vue's 'icon' slot to craftily-button's 'icon' slot -->
    <slot name="icon" slot="icon"></slot>

    <!-- Pass Button.vue's default slot to craftily-button's 'label' slot -->
    <!-- If this slot is empty, craftily-button will use its 'label' prop as fallback -->
    <slot slot="label"></slot>
  </craftily-button>
</template>

<script setup lang="ts">
import { onMounted, useAttrs } from 'vue';
import '@craftily/ui/button';

defineOptions({
  name: 'Button', // Added for Devtools
  inheritAttrs: false,
});

export interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'outline'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl';
  disabled?: boolean;
  iconPosition?: 'left' | 'right';
  label?: string; // This prop provides fallback label text
  className?: string; // CSS class name
}

// No need for `interface Props extends ButtonProps {}`
// Directly use ButtonProps with defineProps
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  iconPosition: 'left',
  label: undefined,
  className: undefined,
});

const emit = defineEmits(['click']);

// Access attributes not defined as props
const attrs = useAttrs();

const handleClick = (event: Event) => {
  // The craftily-button emits a CustomEvent with detail: { originalEvent: Event }
  if (event instanceof CustomEvent && event.detail) {
    emit('click', event);
  }
};

onMounted(() => {
  if (!customElements.get('craftily-button')) {
    console.warn('craftily-button web component is not defined');
  }
});
</script>
