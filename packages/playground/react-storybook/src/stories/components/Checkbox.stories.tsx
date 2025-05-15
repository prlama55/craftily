import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@craftily/ui-react';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic: Story = {
  render: (args) => <Checkbox {...args}>Accept terms and conditions</Checkbox>,
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...args}>Small checkbox</Checkbox>
      <Checkbox {...args}>Medium checkbox</Checkbox>
      <Checkbox {...args}>Large checkbox</Checkbox>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...args}>Default checkbox</Checkbox>
      <Checkbox {...args} checked>
        Checked checkbox
      </Checkbox>
      <Checkbox {...args} disabled>
        Disabled checkbox
      </Checkbox>
      <Checkbox {...args} checked disabled>
        Checked and disabled
      </Checkbox>
    </div>
  ),
};
