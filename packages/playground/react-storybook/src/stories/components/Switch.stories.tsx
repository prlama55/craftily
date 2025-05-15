import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@craftily/ui-react';

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
  },
};

export default meta;

export const Basic: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => <Switch {...args} />,
};

// Story referenced in MDX as 'Sizes'
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch {...args} className="scale-75" />
        <span>Small</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} />
        <span>Default</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} className="scale-125" />
        <span>Large</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} className="scale-150" />
        <span>Extra Large</span>
      </div>
    </div>
  ),
  args: {
    checked: true,
  },
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch {...args} checked={false} disabled={false} />
        <span>Default switch</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} checked={true} disabled={false} />
        <span>Checked switch</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} checked={false} disabled={true} />
        <span>Disabled switch</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} checked={true} disabled={true} />
        <span>Checked and disabled</span>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: (args) => (
    <Switch {...args}>
      <div className="flex flex-col">
        <span>Email notifications</span>
        <span className="text-sm text-gray-500">
          Receive email updates about your account activity
        </span>
      </div>
    </Switch>
  ),
};
