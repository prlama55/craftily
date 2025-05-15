import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@craftily/ui-react';

type Story = StoryObj<typeof Avatar>;

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      defaultValue: 'circle',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="xs">XS</Avatar>
      <Avatar size="sm">SM</Avatar>
      <Avatar size="md">MD</Avatar>
      <Avatar size="lg">LG</Avatar>
      <Avatar size="xl">XL</Avatar>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="xs" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="sm" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="md" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="lg" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="xl" src="https://i.pravatar.cc/300" alt="User avatar" />
    </div>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="xs">JD</Avatar>
      <Avatar size="sm">JD</Avatar>
      <Avatar size="md">JD</Avatar>
      <Avatar size="lg">JD</Avatar>
      <Avatar size="xl">JD</Avatar>
    </div>
  ),
};
