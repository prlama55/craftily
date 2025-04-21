<template>
    <button class="px-4 py-2 bg-blue-500 text-white">{{ label }}</button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      label: String,
    },
  });
  </script>
  