<template>
  <div class="craftily-button-group" :class="{ 'is-vertical': vertical }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// Define component name (useful for Vue Devtools)
defineOptions({
  name: 'ButtonGroup', // Changed from 'ButtonGroup' for consistency
});

// Define props with types and default values
interface Props {
  vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
});

// The `vertical` prop is directly available in the template.
</script>

<style scoped>
.craftily-button-group {
  display: inline-flex;
  align-items: center;
}

/* Basic styling to make buttons in a group touch each other */
/* Using :slotted for ::v-deep as it's the standard for scoped slots in <script setup> style */
/* However, if craftily-button is a web component, direct child selector might be more appropriate */
/* or if it's a Vue component, consider passing classes/props for styling */

.craftily-button-group :slotted(craftily-button:not(:first-child):not(:last-child)),
.craftily-button-group :slotted(CraftilyButton:not(:first-child):not(:last-child)) {
  border-radius: 0;
}

.craftily-button-group :slotted(craftily-button:first-child:not(:last-child)),
.craftily-button-group :slotted(CraftilyButton:first-child:not(:last-child)) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.craftily-button-group :slotted(craftily-button:last-child:not(:first-child)),
.craftily-button-group :slotted(CraftilyButton:last-child:not(:first-child)) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Adjust margin for subsequent buttons to make borders overlap or touch */
.craftily-button-group :slotted(craftily-button + craftily-button),
.craftily-button-group :slotted(CraftilyButton + CraftilyButton) {
  margin-left: -1px; /* Overlap borders by 1px. Adjust if your buttons have different border widths or use outline. */
}

/* Ensure focused/active buttons are visually on top */
.craftily-button-group :slotted(craftily-button:focus),
.craftily-button-group :slotted(craftily-button:active),
.craftily-button-group :slotted(CraftilyButton:focus),
.craftily-button-group :slotted(CraftilyButton:active) {
  z-index: 1;
  position: relative; /* Required for z-index to take effect on non-positioned elements */
}

/* Vertical styles */
.craftily-button-group.is-vertical {
  flex-direction: column;
  align-items: stretch; /* Or 'flex-start' if you don't want buttons to take full width */
}

.craftily-button-group.is-vertical :slotted(craftily-button:not(:first-child):not(:last-child)),
.craftily-button-group.is-vertical :slotted(CraftilyButton:not(:first-child):not(:last-child)) {
  border-radius: 0;
}

.craftily-button-group.is-vertical :slotted(craftily-button:first-child:not(:last-child)),
.craftily-button-group.is-vertical :slotted(CraftilyButton:first-child:not(:last-child)) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: inherit; /* Reset horizontal specific radius */
  border-top-left-radius: inherit; /* Reset horizontal specific radius */
}

.craftily-button-group.is-vertical :slotted(craftily-button:last-child:not(:first-child)),
.craftily-button-group.is-vertical :slotted(CraftilyButton:last-child:not(:first-child)) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: inherit; /* Reset horizontal specific radius */
  border-bottom-right-radius: inherit; /* Reset horizontal specific radius */
}

.craftily-button-group.is-vertical :slotted(craftily-button + craftily-button),
.craftily-button-group.is-vertical :slotted(CraftilyButton + CraftilyButton) {
  margin-left: 0; /* Reset horizontal margin */
  margin-top: -1px; /* Overlap borders vertically */
}
</style>
