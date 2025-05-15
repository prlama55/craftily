import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@craftily/ui-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoAlert: Story = {
  args: {
    variant: 'info',
    title: 'Info Alert',
    children: 'This is an alert with details.',
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: 'success',
    title: 'Success Alert',
    children: 'This is an alert with details.',
  },
};

export const WarningAlert: Story = {
  args: {
    variant: 'warning',
    title: 'Warning Alert',
    children: 'This is an alert with details.',
  },
};

export const DangerAlert: Story = {
  args: {
    variant: 'error',
    children: 'This is an alert with details sudfgudyd hdyufd duyfgtd fdjjdgfduf djdjf.',
  },
};

// Add the missing exports referenced in the MDX file
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info" title="Info Alert">This is an info alert</Alert>
      <Alert variant="success" title="Success Alert">This is a success alert</Alert>
      <Alert variant="warning" title="Warning Alert">This is a warning alert</Alert>
      <Alert variant="error" title="Error Alert">This is an error alert</Alert>
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info" title="Info Alert" dismissible>This is a dismissible alert</Alert>
    </div>
  ),
};
