<template>
  <craftily-modal :open="modelValue" :title="title" v-bind="$attrs" @close="handleClose">
    <slot></slot>
    <div slot="footer">
      <slot name="footer"></slot>
    </div>
  </craftily-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/modal';

export interface ModalProps {
  modelValue?: boolean;
  title?: string;
  closeOnBackdrop?: boolean;
  hideCloseButton?: boolean;
  closeButtonLabel?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true
    },
    hideCloseButton: {
      type: Boolean,
      default: false
    },
    closeButtonLabel: {
      type: String,
      default: '×'
    },
    size: {
      type: String,
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  emits: ['update:modelValue', 'close'],
  mounted() {
    if (!customElements.get('craftily-modal')) {
      console.warn('craftily-modal web component is not defined');
    }
  },
  methods: {
    handleClose(event: Event) {
      this.$emit('update:modelValue', false);
      this.$emit('close', event);
    }
  }
});
</script>
