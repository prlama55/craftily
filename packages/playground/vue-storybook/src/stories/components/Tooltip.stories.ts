import type { Meta, StoryObj } from '@storybook/vue3';
import { Tooltip, Button } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'top',
    },
    content: {
      control: 'text',
      description: 'The content of the tooltip',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      const tooltipArgs = { ...args, content: 'This is a tooltip', className: 'basic-tooltip' };
      return { args, tooltipArgs };
    },
    template: `
      <Tooltip v-bind="tooltipArgs">
        <Button v-bind="args" className="tooltip-trigger" label="Hover me" />
      </Tooltip>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This is the basic usage of the `Tooltip` component. It shows a simple tooltip when hovering over a button. The `className` prop allows adding custom CSS classes to the tooltip.',
      },
    },
  },
};

export const Positions: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      const topArgs = {
        ...args,
        content: 'Tooltip on top',
        position: 'top',
        className: 'top-tooltip',
      };
      const rightArgs = {
        ...args,
        content: 'Tooltip on right',
        position: 'right',
        className: 'right-tooltip',
      };
      const bottomArgs = {
        ...args,
        content: 'Tooltip on bottom',
        position: 'bottom',
        className: 'bottom-tooltip',
      };
      const leftArgs = {
        ...args,
        content: 'Tooltip on left',
        position: 'left',
        className: 'left-tooltip',
      };

      return { topArgs, rightArgs, bottomArgs, leftArgs };
    },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Tooltip v-bind="topArgs">
          <Button v-bind="args" className="top-button" label="Top" />
        </Tooltip>
        
        <Tooltip v-bind="rightArgs">
          <Button v-bind="args" className="right-button" label="Right" />
        </Tooltip>
        
        <Tooltip v-bind="bottomArgs">
          <Button v-bind="args" className="bottom-button" label="Bottom" />
        </Tooltip>
        
        <Tooltip v-bind="leftArgs">
          <Button v-bind="args" className="left-button" label="Left" />
        </Tooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the different positions available for the tooltip: `top`, `right`, `bottom`, and `left`. Each tooltip has a custom class name for additional styling.',
      },
    },
  },
};

export const WithHTML: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      const buttonArgs = { ...args, className: 'rich-content-button' };
      const tooltipArgs = { ...args, className: 'rich-content-tooltip' };
      return { buttonArgs, tooltipArgs };
    },
    template: `
      <Tooltip v-bind="tooltipArgs">
        <Button v-bind="buttonArgs" label="Hover for rich content" />
        <template #content>
          <strong>Rich HTML Content</strong>
          <p>This tooltip contains formatted text and even a list:</p>
          <ul style="margin: 0; padding-left: 1rem;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </template>
      </Tooltip>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows how to use the `#content` slot to render rich HTML inside a `Tooltip` instead of simple text. This allows for more complex layouts, formatting, and interactive elements within the tooltip, though care should be taken not to overload it. Custom class names are applied to both the tooltip and the button.',
      },
    },
  },
};
