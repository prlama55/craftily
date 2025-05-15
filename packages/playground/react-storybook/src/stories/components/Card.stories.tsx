import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button, Avatar, Badge } from '@craftily/ui-react';

type CardProps = {
  variant?: 'default' | 'ghost' | 'bordered' | 'elevated';
  hoverable?: boolean;
  className?: string;
};

type Story = StoryObj<CardProps>;

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated', 'ghost'],
      description: 'The visual style variant of the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card should have hover effects',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;

// Story referenced in MDX as 'Basic'
export const Basic: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <Card.Title>
          <h3 className="text-lg font-semibold">Basic Card</h3>
        </Card.Title>
        <Card.Body>
          <p className="text-gray-600">
            This is a basic card with a title and content. Cards are used to group related content and actions.
          </p>
        </Card.Body>
      </div>
    );
  },
  args: {
    variant: 'default',
  },
};

export const Default: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <Card.Title>
          <div className="flex items-center space-x-4">
            <Avatar src="https://i.pravatar.cc/300" alt="User avatar" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
        </Card.Title>
        <Card.Body>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Card.Body>
        <Card.Actions>
          <div className="flex justify-end space-x-2">
            <Button variant="ghost" label="Cancel" />
            <Button variant="primary" label="Save" />
          </div>
        </Card.Actions>
      </div>
    );
  },
  args: {
    variant: 'default',
  },
};

export const WithBadge: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <Card.Title>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar src="https://i.pravatar.cc/300" alt="User avatar" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
            <Badge variant="primary">Active</Badge>
          </div>
        </Card.Title>
        <Card.Body>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Card.Body>
        <Card.Actions>
          <div className="flex justify-end space-x-2">
            <Button variant="ghost" label="Cancel" />
            <Button variant="primary" label="Save" />
          </div>
        </Card.Actions>
      </div>
    );
  },
  args: {
    variant: 'elevated',
  },
};

// Story referenced in MDX as 'WithImage'
export const WithImage: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <div className="w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80" 
            alt="Card header image"
            className="w-full h-full object-cover"
          />
        </div>
        <Card.Title>
          <h3 className="text-lg font-semibold">Card with Image</h3>
        </Card.Title>
        <Card.Body>
          <p className="text-gray-600">
            This card includes an image at the top. Images can help make your cards more engaging and informative.
          </p>
        </Card.Body>
      </div>
    );
  },
  args: {
    variant: 'default',
  },
};

// Story referenced in MDX as 'WithFooter'
export const WithFooter: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <Card.Title>
          <h3 className="text-lg font-semibold">Card with Footer</h3>
        </Card.Title>
        <Card.Body>
          <p className="text-gray-600">
            This card includes a footer with action buttons. Footers are useful for providing actions related to the card content.
          </p>
        </Card.Body>
        <Card.Actions>
          <div className="flex justify-end space-x-2">
            <Button variant="ghost" label="Cancel" />
            <Button variant="primary" label="Save" />
          </div>
        </Card.Actions>
      </div>
    );
  },
  args: {
    variant: 'default',
  },
};

export const Complex: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <Card.Title>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar src="https://i.pravatar.cc/300" alt="User avatar" className="w-12 h-12" />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <Badge variant="primary">PRO</Badge>
                </div>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
            <Badge variant="secondary">Pending</Badge>
          </div>
        </Card.Title>
        <Card.Body>
          <div className="space-y-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
            </div>
          </div>
        </Card.Body>
        <Card.Actions>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Badge variant="accent">4.5/5</Badge>
              <Badge variant="accent">10+ years</Badge>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" label="View Profile" />
              <Button variant="primary" label="Contact" />
            </div>
          </div>
        </Card.Actions>
      </div>
    );
  },
  args: {
    variant: 'bordered',
  },
};

export const Simple: Story = {
  render(args) {
    return (
      <div {...args} className="w-96">
        <Card.Body>
          <p className="text-gray-600">
            A simple card with just body content. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </Card.Body>
      </div>
    );
  },
  args: {
    variant: 'default',
  },
};
