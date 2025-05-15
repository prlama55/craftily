import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@craftily/ui-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story referenced in MDX as 'Basic'
export const Basic: Story = {
  args: {
    placeholder: 'Enter text here',
    className: 'w-64',
  },
};

// Story referenced in MDX as 'Variants'
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Default input" />
      <Input placeholder="With border" className="border border-gray-300 rounded-md" />
      <Input placeholder="Filled style" className="bg-gray-100 rounded-md" />
      <Input placeholder="Custom style" className="border-b-2 border-blue-500 focus:border-blue-700 rounded-none" />
    </div>
  ),
};

// Story referenced in MDX as 'WithIcon'
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Input 
        placeholder="Search..."
        prefix={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      />
      <Input 
        placeholder="Enter email"
        suffix={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      />
      <Input 
        placeholder="Password"
        type="password"
        suffix={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        }
      />
    </div>
  ),
};

// Story referenced in MDX as 'States'
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Default state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Error state" error="This field is required" />
      <Input placeholder="Success state" success />
      <Input placeholder="With value" value="Input with value" />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    className: 'w-64',
    placeholder: 'Enter text here',
  },
};
