import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@craftily/ui-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CraftilyUI/React/ButtonGroup/Vertical',
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
        <Button {...args} className={`${className}`}>
          One
        </Button>
        <Button {...args} className={`${className}`}>
          Two
        </Button>
        <Button {...args} className={`${className}`}>
          Three
        </Button>
      </div>
    );
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    className: 'btn btn-primary btn-lg',
  },
};
