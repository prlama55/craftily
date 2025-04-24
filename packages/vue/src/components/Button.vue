<template>
  <craftily-button v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </craftily-button>
</template>
<script lang="ts" setup>
defineEmits(['click']);
</script>