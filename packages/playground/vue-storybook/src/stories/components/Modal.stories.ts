import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Modal, Button, Input, Checkbox } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Modal` component is used to display content in a layer above the main page. It is controlled by a `v-model` binding (`modelValue` prop) and typically includes a title, main content area, and a footer for actions. Modals can be configured to close on backdrop click and can have their default close button hidden. Different sizes can be applied using the `size` prop.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Controls the visibility of the modal (v-model)',
    },
    title: { control: 'text', description: 'Title for the modal header' },
    closeOnBackdrop: { control: 'boolean', description: 'Close modal on backdrop click' },
    hideCloseButton: { control: 'boolean', description: 'Hide the default close button' },
    // size is a prop of craftily-modal, Modal.vue might pass it via $attrs or need specific handling.
    // For now, we assume it's passed via $attrs or set via class if Modal.vue doesn't handle it directly.
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Basic Modal Title',
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <Button @click="isOpen = true" variant="primary" label="Open Modal"/>
        <Modal v-model="isOpen" :title="args.title" v-bind="args">
          <div>
            This is the content of the modal. You can put any content here.
          </div>
          <template #footer>
            <Button variant="ghost" @click="isOpen = false" label="Cancel"/>
            <Button variant="primary" @click="isOpen = false" label="Confirm"/>
          </template>
        </Modal>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic usage of the `Modal` component. A button triggers the modal's visibility, which is controlled by the `v-model` directive bound to an `isOpen` ref. The modal includes a title, body content, and a footer with Cancel and Confirm buttons. The `#footer` slot is used for custom footer content.",
      },
      source: {
        code: `
<template>
  <Button @click="isOpen = true" variant="primary" label="Open Modal"/>
  <Modal v-model="isOpen" title="Basic Modal Title">
    <div>
      This is the content of the modal. You can put any content here.
    </div>
    <template #footer>
      <Button variant="ghost" @click="isOpen = false" label="Cancel"/>
      <Button variant="primary" @click="isOpen = false" label="Confirm"/>
    </template>
  </Modal>
</template>

<script setup>
import { ref } from 'vue';
import { Modal, Button } from '@craftily/ui-vue';

const isOpen = ref(false);
</script>
        `,
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isSmallOpen = ref(false);
      const isMediumOpen = ref(false);
      const isLargeOpen = ref(false);
      return { args, isSmallOpen, isMediumOpen, isLargeOpen };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div>
          <Button @click="isSmallOpen = true" variant="primary" label="Small Modal"/>
          <Modal v-model="isSmallOpen" title="Small Modal" size="sm" v-bind="args">
            <div>This is a small modal dialog.</div>
            <template #footer>
              <Button variant="ghost" @click="isSmallOpen = false" label="Cancel"/>
              <Button variant="primary" @click="isSmallOpen = false" label="Confirm"/>
            </template>
          </Modal>
        </div>

        <div>
          <Button @click="isMediumOpen = true" variant="primary" label="Medium Modal"/>
          <Modal v-model="isMediumOpen" title="Medium Modal" size="md" v-bind="args">
            <div>This is a medium modal dialog.</div>
            <template #footer>
              <Button variant="ghost" @click="isMediumOpen = false" label="Cancel"/>
              <Button variant="primary" @click="isMediumOpen = false" label="Confirm"/>
            </template>
          </Modal>
        </div>

        <div>
          <Button @click="isLargeOpen = true" variant="primary" label="Large Modal"/>
          <Modal v-model="isLargeOpen" title="Large Modal" size="lg" v-bind="args">
            <div>This is a large modal dialog.</div>
            <template #footer>
              <Button variant="ghost" @click="isLargeOpen = false" label="Cancel"/>
              <Button variant="primary" @click="isLargeOpen = false" label="Confirm"/>
            </template>
          </Modal>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the `size` prop of the `Modal` component. It shows three modals triggered by separate buttons, each with a different size: `sm` (small), `md` (medium), and `lg` (large). The `size` prop allows for adapting the modal dimensions to the content and context.',
      },
      source: {
        code: `
// Template for one size, repeat for others
<template>
  <Button @click="isSmallOpen = true" variant="primary" label="Small Modal"/>
  <Modal v-model="isSmallOpen" title="Small Modal" size="sm">
    <div>This is a small modal dialog.</div>
    <template #footer>
      <Button variant="ghost" @click="isSmallOpen = false" label="Cancel"/>
      <Button variant="primary" @click="isSmallOpen = false" label="Confirm"/>
    </template>
  </Modal>
</template>

<script setup>
import { ref } from 'vue';
import { Modal, Button } from '@craftily/ui-vue';

const isSmallOpen = ref(false);
// const isMediumOpen = ref(false); ...
</script>
        `,
      },
    },
  },
};

export const WithForm: Story = {
  args: {
    title: 'Create Account',
  },
  render: (args) => ({
    components: { Modal, Button, Input, Checkbox },
    setup() {
      const isOpen = ref(false);
      const email = ref('');
      const password = ref('');
      const termsAgreed = ref(false);
      return { args, isOpen, email, password, termsAgreed };
    },
    template: `
      <div>
        <Button @click="isOpen = true" variant="primary" label="Open Form Modal">Open Form Modal</Button>
        <Modal v-model="isOpen" :title="args.title" v-bind="args">
          <form style="display: flex; flex-direction: column; gap: 1rem;" @submit.prevent="isOpen = false">
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <label for="modal-email-input">Email</label>
              <Input id="modal-email-input" type="email" placeholder="Enter your email" v-model="email" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <label for="modal-password-input">Password</label>
              <Input id="modal-password-input" type="password" placeholder="Enter your password" v-model="password" />
            </div>
            <Checkbox v-model="termsAgreed">
              I agree to the terms and conditions
            </Checkbox>
          </form>
          <template #footer>
            <Button variant="ghost" @click="isOpen = false" label="Cancel"/>
            <Button variant="primary" type="submit" @click="isOpen = false" label="Create Account"/>
          </template>
        </Modal>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how to embed a form within a `Modal`. The form includes `Input` fields for email and password, and a `Checkbox` for terms agreement. The modal's footer contains Cancel and Create Account (submit) buttons. This pattern is common for user registration, login, or data entry tasks that require focused user interaction.",
      },
      source: {
        code: `
<template>
  <Button @click="isOpen = true" variant="primary" label="Open Form Modal"/>
  <Modal v-model="isOpen" title="Create Account">
    <form style="display: flex; flex-direction: column; gap: 1rem;" @submit.prevent="isOpen = false">
      <Input type="email" placeholder="Enter your email" v-model="email" label="Email" />
      <Input type="password" placeholder="Enter your password" v-model="password" label="Password" />
      <Checkbox v-model="termsAgreed">
        I agree to the terms and conditions
      </Checkbox>
    </form>
    <template #footer>
      <Button variant="ghost" @click="isOpen = false" label="Cancel"/>
      <Button variant="primary" type="submit" @click="isOpen = false" label="Create Account"/>
    </template>
  </Modal>
</template>

<script setup>
import { ref } from 'vue';
import { Modal, Button, Input, Checkbox } from '@craftily/ui-vue';

const isOpen = ref(false);
const email = ref('');
const password = ref('');
const termsAgreed = ref(false);

// Example submit handler (optional)
// const handleSubmit = () => {
//   if (termsAgreed.value) {
//     console.log('Form submitted:', { email: email.value, password: password.value });
//     isOpen.value = false;
//   } else {
//     alert('Please agree to the terms.');
//   }
// };
</script>
        `,
      },
    },
  },
};
