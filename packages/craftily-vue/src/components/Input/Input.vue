<template>
  <craftily-input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    :name="name"
    :error="error"
    :success="success"
    v-bind="attrs"
    @input="handleInput"
    @change="handleChange"
    @click="handleClick"
  >
    <template v-if="$slots.prefix">
      <div slot="prefix">
        <slot name="prefix"></slot>
      </div>
    </template>
    <template v-if="$slots.suffix">
      <div slot="suffix">
        <slot name="suffix"></slot>
      </div>
    </template>
  </craftily-input>
</template>

<script setup lang="ts">
import { useAttrs, onMounted } from 'vue';
import '@craftily/ui/input';

export interface InputProps {
  modelValue?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  name?: string;
  error?: string;
  success?: boolean;
}

defineOptions({
  name: 'CraftilyInput', // Added for Devtools
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: '',
  type: 'text',
  disabled: false,
  name: '',
  error: '',
  success: false,
});

const emit = defineEmits(['update:modelValue', 'input', 'change']);

// Access attributes not defined as props
const attrs = useAttrs();

const handleInput = (event: CustomEvent<{ value: string }>) => {
  emit('update:modelValue', event.detail.value);
  emit('input', event);
};

const handleChange = (event: CustomEvent<{ value: string }>) => {
  emit('update:modelValue', event.detail.value);
  emit('change', event);
};

const handleClick = (event: MouseEvent) => {
  // Focus the input element when the component is clicked
  const target = event.currentTarget as HTMLElement;
  const input = target.shadowRoot?.querySelector('input');
  if (input) {
    input.focus();
  }
};

onMounted(() => {
  if (!customElements.get('craftily-input')) {
    console.warn('craftily-input web component is not defined');
  }
});
</script>
