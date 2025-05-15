import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Badge } from '@craftily/ui-react';

type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
};

export default meta;

export const Basic: Story = {
  render: (args) => (
    <Tooltip {...args} content="This is a tooltip">
      <Badge variant="outline">Hover me</Badge>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Tooltip {...args} content="Top tooltip" placement="top">
        <Badge variant="outline">Top</Badge>
      </Tooltip>
      <Tooltip {...args} content="Right tooltip" placement="right">
        <Badge variant="outline">Right</Badge>
      </Tooltip>
      <Tooltip {...args} content="Bottom tooltip" placement="bottom">
        <Badge variant="outline">Bottom</Badge>
      </Tooltip>
      <Tooltip {...args} content="Left tooltip" placement="left">
        <Badge variant="outline">Left</Badge>
      </Tooltip>
    </div>
  ),
};

export const WithHTML: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Badge variant="outline">Hover for HTML content</Badge>
      <div slot="content">
        <p style={{ margin: '0 0 8px 0' }}>
          <strong>Rich HTML Content</strong>
        </p>
        <p style={{ margin: '0' }}>
          This tooltip contains <em>formatted</em> content.
        </p>
      </div>
    </Tooltip>
  ),
};
