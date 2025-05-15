<template>
  <craftily-card :class="className" v-bind="attrs">
    <CardTitle v-if="$slots.title">
      <slot name="title"></slot>
    </CardTitle>

    <CardBody v-if="$slots.body || $slots.default">
      <slot name="body"></slot>
      <!-- Prioritize named body slot -->
      <slot v-if="!$slots.body && $slots.default"></slot>
      <!-- Fallback to default slot for body -->
    </CardBody>

    <CardActions v-if="$slots.actions">
      <slot name="actions"></slot>
    </CardActions>
  </craftily-card>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/card';
import CardTitle from './CardTitle.vue';
import CardBody from './CardBody.vue';
import CardActions from './CardActions.vue';

defineOptions({
  name: 'Card',
  inheritAttrs: false,
});

export interface CardProps {
  className?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  className: undefined,
});

// Access attributes not defined as props
const attrs = useAttrs();
</script>
