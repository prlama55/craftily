<!-- packages/craftily-vue/src/components/ImageEditor.vue -->
<template>
  <div>
    <craftily-image-editor
      :controls="controls"
      :showDownload="false"
      showUpload="true"
      @image-edited="handleImageEdited"
      ref="editorRef"
    ></craftily-image-editor>
  </div>
</template>

<script setup lang="ts">
import { ControlProps, ImageEditedEventDetail } from '@craftily/image';
import '@craftily/image/editor';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'imageEdited', details: string): void;
}>();

defineProps<{
  controls?: ControlProps;
}>();

const editorRef = ref<HTMLElement>();

const handleImageEdited = (event: CustomEvent<ImageEditedEventDetail>) => {
  // Emit the edited image
  emit('imageEdited', event.detail.toDataURL());
};
</script>
