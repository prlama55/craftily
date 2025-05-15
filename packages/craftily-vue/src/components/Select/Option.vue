<template>
  <craftily-option :value="value" :disabled="disabled" v-bind="attrs">
    <slot></slot>
  </craftily-option>
</template>

<script setup lang="ts">
import { useAttrs, defineOptions, withDefaults } from 'vue';
import '@craftily/ui/select'; // This imports both craftily-select and craftily-option
import { DisabledProps } from '../../types/common';

// This component uses 'value' directly instead of 'modelValue' to match the web component's API
export interface OptionProps extends DisabledProps {
  value: string;
}

defineOptions({
  name: 'Option',
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    value: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const attrs = useAttrs();
</script>
