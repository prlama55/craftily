import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@craftily/ui-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  render: ({ className, children, ...args }) => {
    return (
      <div className="flex flex-row gap-4 justify-center items-center">
        <Button {...args} className={`${className} btn-xs`}>
          {children} xs
        </Button>
        <Button {...args} className={`${className} btn-sm`}>
          {children} small
        </Button>
        <Button {...args} className={`${className} btn-md`}>
          {children} medium
        </Button>
        <Button {...args} className={`${className} btn-lg`}>
          {children} large
        </Button>
        <Button {...args} className={`${className} btn-xl`}>
          {children} xl
        </Button>
      </div>
    );
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    className: "btn bg-primary"
  }
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    className: "btn btn-secondary"
  }
};
export const Ghost: Story = {
  args: {
    children: "Ghost",
    className: "btn btn-ghost"
  }
};

export const Outline: Story = {
  args: {
    children: "Outline",
    className: "btn btn-outline"
  }
};

export const Custom: Story = {
  args: {
    children: "Custom",
    className: "btn bg-blue-500 text-white hover:bg-blue-600 border-none"
  }
};
