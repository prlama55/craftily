<!-- packages/craftily-vue/src/components/ImageEditor.vue -->
<template>
  <div>
    <craftily-image-editor
      :controls="controls"
      :showDownload="showDownload"
      :showUpload="showUpload"
      :src="src"
      @onControlChange="handleControlChange"
    ></craftily-image-editor>
  </div>
</template>

<script setup lang="ts">
import { ControlProps, ImageEditorEventDetail } from '@craftily/image';
import '@craftily/image/editor';

const emit = defineEmits<{
  (e: 'onControlChange', details: ImageEditorEventDetail): void;
}>();

defineProps<{
  controls?: ControlProps;
  showUpload?: boolean;
  showDownload?: boolean;
  src?: string;
}>();

const handleControlChange = (event: CustomEvent<ImageEditorEventDetail>) => {
  emit('onControlChange', event.detail);
};
</script>
