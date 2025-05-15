<template>
  <craftily-tooltip
    :position="position"
    :content="hasContentSlot ? undefined : content"
    :trigger="trigger"
    :class="className"
    v-bind="attrs"
  >
    <slot></slot>
    <div v-if="hasContentSlot" slot="content">
      <slot name="content"></slot>
    </div>
  </craftily-tooltip>
</template>

<script setup lang="ts">
import { useAttrs, useSlots, computed } from 'vue';
import '@craftily/ui/tooltip';

defineOptions({
  name: 'Tooltip',
  inheritAttrs: false,
});

export interface TooltipProps {
  position?: 'top' | 'right' | 'left' | 'bottom';
  content?: string;
  trigger?: 'hover' | 'focus';
  className?: string;
}

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
  content: '',
  trigger: 'hover',
  className: undefined,
});

// Destructure props for template usage
const { position, content, trigger, className } = props;

// Access attributes not defined as props
const attrs = useAttrs();
const slots = useSlots();

// Check if the content slot is being used
const hasContentSlot = computed(() => !!slots.content);
</script>
