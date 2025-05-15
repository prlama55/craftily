import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@craftily/ui-react';

type Story = StoryObj<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'outline'],
    },
  },
};

export default meta;

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} variant="primary">
        Primary
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="accent">
        Accent
      </Badge>
      <Badge {...args} variant="ghost">
        Ghost
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
    </div>
  ),
};

// Add the missing Sizes story
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} className="text-xs">
        Extra Small
      </Badge>
      <Badge {...args} className="text-sm">
        Small
      </Badge>
      <Badge {...args}>Default</Badge>
      <Badge {...args} className="text-lg">
        Large
      </Badge>
      <Badge {...args} className="text-xl">
        Extra Large
      </Badge>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args}>
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.45l8.4 14.55H3.6L12 5.45z" />
        </svg>
        With Icon
      </Badge>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};
