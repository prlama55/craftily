import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@craftily/ui-react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
};

export default meta;

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center justify-center">
      <Button {...args} label={(args.variant + ' sm').toUpperCase()} size="sm" />
      <Button {...args} label={(args.variant + ' md').toUpperCase()} size="md" />
      <Button {...args} label={(args.variant + ' lg').toUpperCase()} size="lg" />
    </div>
  ),
  args: {
    variant: 'primary',
  },
};
