import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@craftily/ui-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CraftilyUI/React/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ className, children, ...args }) => {
    return (
      <div className="flex flex-row gap-4 justify-center items-center">
        <Button {...args} className={`${className} btn-xs`}>
          {children}{' '}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Button>
        <Button {...args} className={`${className} btn-sm`}>
          {children}{' '}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Button>
        <Button {...args} className={`${className} btn-md`}>
          {children}{' '}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Button>
        <Button {...args} className={`${className} btn-lg`}>
          {children}{' '}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Button>
        <Button {...args} className={`${className} btn-xl`}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          {children}{' '}
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
    className: 'bg-red-500 border-none',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    className: 'btn-secondary',
  },
};
export const Ghost: Story = {
  args: {
    children: 'Ghost',
    className: 'btn-ghost',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    className: 'btn-outline',
  },
};

export const Custom: Story = {
  args: {
    children: 'Custom',
    className: 'bg-blue-500 text-white hover:bg-blue-600 border-none',
  },
};
