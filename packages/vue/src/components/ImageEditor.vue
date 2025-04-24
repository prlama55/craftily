<template>
    <div class="p-4 space-y-4">
      <input type="file" accept="image/*" @change="handleFileChange" />
      
      <canvas ref="canvasRef" :width="400" :height="300" class="border rounded" />
  
      <div v-if="image">
        <label v-for="(value, key) in filters" :key="key" class="block mb-2">
          {{ key }}: {{ value }}
          <input type="range" :min="rangeMap[key]!.min" :max="rangeMap[key]!.max" :step="0.01" v-model.number="filters[key]" @input="applyFilters" />
        </label>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { applyImageFilters, loadImageFromFile, type FilterOptions } from '@craftily/image'
  
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const image = ref<HTMLImageElement | null>(null)
  
  const filters = reactive<FilterOptions>({
    brightness: 1,
    contrast: 1,
    grayscale: 0,
    saturate: 1,
    sepia: 0,
    hueRotate: 0,
    blur: 0,
  })
  
  const rangeMap: Partial<Record<keyof FilterOptions, { min: number; max: number }>> = {
    brightness: { min: 0, max: 2 },
    contrast: { min: 0, max: 2 },
    grayscale: { min: 0, max: 1 },
    saturate: { min: 0, max: 3 },
    sepia: { min: 0, max: 1 },
    hueRotate: { min: 0, max: 360 },
    blur: { min: 0, max: 10 },
  }
  
  async function handleFileChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return
  
    image.value = await loadImageFromFile(file)
    applyFilters()
  }
  
  function applyFilters() {
    if (!canvasRef.value || !image.value) return
    const ctx = canvasRef.value.getContext('2d')
    if (!ctx) return
    applyImageFilters(ctx, image.value, canvasRef.value, filters)
  }
  </script>
  
  <style scoped>
  input[type="range"] {
    width: 100%;
  }
  </style>