import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@craftily/ui-react';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="error" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="info" />
    </div>
  ),
  args: {
    size: 'md',
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-2">
      <Spinner {...args} />
      <span className="text-sm">Loading...</span>
    </div>
  ),
  args: {
    size: 'lg',
    color: 'primary',
  },
};
