import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@craftily/ui-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ButtonGroup/Vertical',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ className, children, ...args }) => {
    return (
      <div className="btn-group btn-group-direction-column">
        <Button {...args} className={`${className}`} label="One" />
        <Button {...args} className={`${className}`} label="Two" />
        <Button {...args} className={`${className}`} label="Three" />
      </div>
    );
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};
