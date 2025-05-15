import type { Meta, StoryObj } from '@storybook/vue3';
import { Button, ButtonGroup } from '@craftily/ui-vue';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `ButtonGroup` component is used to group related buttons together horizontally. It helps in organizing UI elements and visually linking actions that belong to the same context. Individual buttons within the group can have their own variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      control: 'boolean',
      description: 'Whether the buttons should be stacked vertically',
      defaultValue: false,
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The variant of the buttons',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the buttons',
      defaultValue: 'md',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">
        <Button v-bind="args" label="Left"></Button>
        <Button v-bind="args" label="Center"></Button>
        <Button v-bind="args" label="Right"></Button>
      </ButtonGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This is the basic usage of the `ButtonGroup` component. It demonstrates how to group multiple `Button` components together. By default, buttons inside a group will have styles applied to make them appear connected.',
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="primary" label="Left"></Button>
          <Button v-bind="args" variant="primary" label="Center"></Button>
          <Button v-bind="args" variant="primary" label="Right"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="secondary" label="Left"></Button>
          <Button v-bind="args" variant="secondary" label="Center"></Button>
          <Button v-bind="args" variant="secondary" label="Right"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="outline" label="Left"></Button>
          <Button v-bind="args" variant="outline" label="Center"></Button>
          <Button v-bind="args" variant="outline" label="Right"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="ghost" label="Left"></Button>
          <Button v-bind="args" variant="ghost" label="Center"></Button>
          <Button v-bind="args" variant="ghost" label="Right"></Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how different button `variant`s (primary, secondary, outline, ghost) appear within a `ButtonGroup`. The `ButtonGroup` itself does not have a variant prop; the styling comes from the individual `Button` components.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ButtonGroup v-bind="args">
          <Button v-bind="args" size="sm" label="Left"></Button>
          <Button v-bind="args" size="sm" label="Center"></Button>
          <Button v-bind="args" size="sm" label="Right"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args">
          <Button v-bind="args" size="md" label="Left"></Button>
          <Button v-bind="args" size="md" label="Center"></Button>
          <Button v-bind="args" size="md" label="Right"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args">
          <Button v-bind="args" size="lg" label="Left"></Button>
          <Button v-bind="args" size="lg" label="Center"></Button>
          <Button v-bind="args" size="lg" label="Right"></Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows how different button `size`s (sm, md, lg) look within a `ButtonGroup`. Similar to variants, the `ButtonGroup` does not have its own size prop; the size is determined by the individual `Button` components.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="primary" label="Upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
            Upload
          </Button>
          <Button v-bind="args" variant="primary" label="Download">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </Button>
          <Button v-bind="args" variant="primary" label="Share">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="outline" label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Previous
          </Button>
          <Button  v-bind="args" variant="outline" label="Next">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to include icons within buttons in a `ButtonGroup`. Icons are added using SVG elements with the `slot="icon"` attribute, and the button text is placed in the default slot. This approach works for all button variants and sizes.',
      },
    },
  },
};

export const IconPositioning: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h3>Left Icons (Default)</h3>
          <ButtonGroup v-bind="args">
            <Button v-bind="args" variant="secondary" icon-position="left" label="Add">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Add
            </Button>
            <Button v-bind="args" variant="secondary" icon-position="left" label="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Remove
            </Button>
          </ButtonGroup>
        </div>
        
        <div>
          <h3>Right Icons</h3>
          <ButtonGroup v-bind="args">
            <Button v-bind="args" variant="secondary" icon-position="right" label="Add">
              Add
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </Button>
            <Button v-bind="args" variant="secondary" icon-position="right" label="Remove">
              Remove
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to control icon positioning within buttons in a `ButtonGroup`. The `icon-position` prop can be set to either "left" (default) or "right" to control where the icon appears relative to the button text.',
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="primary" label="Top"></Button>
          <Button v-bind="args" variant="primary" label="Middle"></Button>
          <Button v-bind="args" variant="primary" label="Bottom"></Button>
        </ButtonGroup>

        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="outline" label="First Option"></Button>
          <Button v-bind="args" variant="outline" label="Second Option"></Button>
          <Button v-bind="args" variant="outline" label="Third Option"></Button>
        </ButtonGroup>

        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="secondary" size="sm" label="Small"></Button>
          <Button v-bind="args" variant="secondary" size="md" label="Medium"></Button>
          <Button v-bind="args" variant="secondary" size="lg" label="Large"></Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the vertical orientation of the `ButtonGroup` component. By setting the `vertical` prop to `true`, buttons will be stacked vertically instead of horizontally. This is useful for creating menu-like interfaces or when vertical space is more available than horizontal space.',
      },
    },
  },
};

export const VerticalWithIcons: Story = {
  args: {
    vertical: true,
  },
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ButtonGroup v-bind="args">
          <Button v-bind="args" variant="primary" label="Upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </Button>
          <Button v-bind="args" variant="primary" label="Download">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </Button>
          <Button v-bind="args" variant="primary" label="Share">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to use icons within buttons in a vertical `ButtonGroup`. The same principles for adding icons apply as in the horizontal layout, but the visual presentation is different with buttons stacked vertically.',
      },
    },
  },
};
