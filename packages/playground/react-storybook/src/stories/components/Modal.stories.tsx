import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, Button } from '@craftily/ui-react';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    title: {
      control: 'text',
    },
    closeOnBackdrop: {
      control: 'boolean',
    },
    hideCloseButton: {
      control: 'boolean',
    },
    closeButtonLabel: {
      control: 'text',
    },
  },
};

export default meta;

const ModalTemplate = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          console.log('Open Modal');
          setIsOpen(true);
        }}
        label="Open Modal"
        variant="primary"
        size="sm"
      />
      <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <p>This is the modal content.</p>
        </div>
      </Modal>
    </div>
  );
};

export const Basic: Story = {
  render: ModalTemplate,
  args: {
    title: 'Example Modal',
    closeOnBackdrop: true,
    hideCloseButton: false,
    closeButtonLabel: '×',
  },
};
