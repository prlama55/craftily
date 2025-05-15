import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '@craftily/ui-react';

type Story = StoryObj<typeof Radio>;

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic: Story = {
  render: (args) => (
    <RadioGroup name="fruits" defaultValue="apple">
      <div className="flex flex-col gap-4">
        <Radio {...args} name="fruits" value="apple">
          Apple
        </Radio>
        <Radio {...args} name="fruits" value="banana">
          Banana
        </Radio>
        <Radio {...args} name="fruits" value="orange">
          Orange
        </Radio>
      </div>
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <RadioGroup name="size-sm" defaultValue="1">
        <Radio {...args} name="size-sm" value="1">
          Small radio
        </Radio>
      </RadioGroup>
      <RadioGroup name="size-md" defaultValue="1">
        <Radio {...args} name="size-md" value="1">
          Medium radio
        </Radio>
      </RadioGroup>
      <RadioGroup name="size-lg" defaultValue="1">
        <Radio {...args} name="size-lg" value="1">
          Large radio
        </Radio>
      </RadioGroup>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <RadioGroup name="states" defaultValue="default">
        <Radio {...args} name="states" value="default">
          Default radio
        </Radio>
        <Radio {...args} name="states" value="checked" checked>
          Checked radio
        </Radio>
        <Radio {...args} name="states" value="disabled" disabled>
          Disabled radio
        </Radio>
        <Radio {...args} name="states" value="checked-disabled" checked disabled>
          Checked and disabled
        </Radio>
      </RadioGroup>
    </div>
  ),
};
