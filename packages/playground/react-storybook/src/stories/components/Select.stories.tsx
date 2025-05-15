import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@craftily/ui-react';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
  },
};

export default meta;

export const Basic: Story = {
  args: {
    className: 'w-64',
    placeholder: 'Select an option',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Select
        {...args}
        className="w-64"
        placeholder="Small select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <Select
        {...args}
        className="w-64"
        placeholder="Medium select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <Select
        {...args}
        className="w-64"
        placeholder="Large select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
    </div>
  ),
  args: {
    className: 'w-64',
  },
};

export const WithGroups: Story = {
  render: (args) => (
    <Select {...args}>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
      </optgroup>
    </Select>
  ),
  args: {
    className: 'w-64',
    placeholder: 'Select food',
  },
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Select
        {...args}
        placeholder="Default select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <Select
        {...args}
        disabled
        placeholder="Disabled select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <Select
        {...args}
        error="Please select an option"
        placeholder="Error state"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
    </div>
  ),
  args: {
    className: 'w-64',
  },
};
