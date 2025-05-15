import type { Meta, StoryObj } from '@storybook/vue3';
import { Card, CardTitle, CardBody, CardActions, Button } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Card` component is a versatile container for displaying content in a structured manner. It typically consists of a `CardTitle`, `CardBody`, and `CardActions` sections, but these are flexible and can be used as needed. Cards are useful for presenting information, summaries, or entry points to more detailed content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names to apply to the card',
    }
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Card, CardTitle, CardBody, CardActions, Button },
    setup() {
      return { args };
    },
    template: `
      <Card style="width: 300px;" v-bind="args" className="card-example">
        <CardTitle v-bind="args" className="card-title-example">Card Title</CardTitle>
        <CardBody v-bind="args" className="card-body-example">
          <div>
            This is the main content of the card. You can put any content here.
          </div>
        </CardBody>
        <CardActions v-bind="args" className="card-actions-example">
          <Button v-bind="args" variant="primary" label="Action" className="action-button"></Button>
        </CardActions>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This is the basic structure of a `Card`. It includes a `CardTitle` for the heading, `CardBody` for the main content, and `CardActions` for interactive elements like buttons. This example shows a simple card with a title, text, and an action button.',
      },
      source: {
        code: `
<Card style="width: 300px;">
  <CardTitle>Card Title</CardTitle>
  <CardBody>
    <div>
      This is the main content of the card. You can put any content here.
    </div>
  </CardBody>
  <CardActions>
    <Button variant="primary">Action</Button>
  </CardActions>
</Card>
        `,
      },
    },
  },
};

export const WithImage: Story = {
  render: (args) => ({
    components: { Card, CardTitle, CardBody, CardActions, Button },
    setup() {
      return { args };
    },
    template: `
      <Card style="width: 300px;" v-bind="args" className="card-with-image">
        <img
          src="https://picsum.photos/300/200"
          alt="Card image"
          style="width: 100%; height: 200px; object-fit: cover;"
        />
        <CardTitle v-bind="args" className="image-card-title">Card with Image</CardTitle>
        <CardBody v-bind="args" className="image-card-body">
          <div>
            This card includes an image at the top. The content area can contain any elements.
          </div>
        </CardBody>
        <CardActions v-bind="args" className="image-card-actions">
          <div style="display: flex; gap: 0.5rem;">
            <Button v-bind="args" variant="outline" label="Cancel" className="cancel-button"></Button>
            <Button v-bind="args" variant="primary" label="Submit" className="submit-button"></Button>
          </div>
        </CardActions>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates a `Card` that includes an image. Images can be placed anywhere within the card structure, commonly at the top before the `CardTitle`. This example shows an image, a title, body text, and two action buttons.',
      },
      source: {
        code: `
<Card style="width: 300px;">
  <img
    src="https://picsum.photos/300/200"
    alt="Card image"
    style="width: 100%; height: 200px; object-fit: cover;"
  />
  <CardTitle>Card with Image</CardTitle>
  <CardBody>
    <div>
      This card includes an image at the top. The content area can contain any elements.
    </div>
  </CardBody>
  <CardActions>
    <div style="display: flex; gap: 0.5rem;">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </div>
  </CardActions>
</Card>
        `,
      },
    },
  },
};

export const NoHeader: Story = {
  render: (args) => ({
    components: { Card, CardBody, CardActions, Button },
    setup() {
      return { args };
    },
    template: `
      <Card style="width: 300px;" v-bind="args" className="no-header-card">
        <CardBody v-bind="args" className="no-header-body">
          <div>
            This card has no header, just content and a footer.
          </div>
        </CardBody>
        <CardActions v-bind="args" className="no-header-actions">
          <Button v-bind="args" variant="primary" label="Action" className="no-header-button"></Button>
        </CardActions>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows a `Card` variant that omits the `CardTitle`. Cards are flexible and allow for different combinations of sections. This example includes only `CardBody` and `CardActions`.',
      },
      source: {
        code: `
<Card style="width: 300px;">
  <CardBody>
    <div>
      This card has no header, just content and a footer.
    </div>
  </CardBody>
  <CardActions>
    <Button v-bind="args" variant="primary" label="Action"></Button>
  </CardActions>
</Card>
        `,
      },
    },
  },
};

export const NoFooter: Story = {
  render: (args) => ({
    components: { Card, CardTitle, CardBody },
    setup() {
      return { args };
    },
    template: `
      <Card style="width: 300px;" v-bind="args" className="no-footer-card">
        <CardTitle v-bind="args" className="no-footer-title">Card Title</CardTitle>
        <CardBody v-bind="args" className="no-footer-body">
          <div>
            This card has no footer, just a header and content.
          </div>
        </CardBody>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story illustrates a `Card` without `CardActions` (footer). It demonstrates that cards can be composed with only a `CardTitle` and `CardBody`, suitable for display-only information without interactive elements.',
      },
      source: {
        code: `
  <Card style="width: 300px;" v-bind="args">
    <CardTitle v-bind="args">Card Title</CardTitle>
    <CardBody v-bind="args">
      <div>
        This card has no footer, just a header and content.
      </div>
    </CardBody>
  </Card>
        `,
      },
    },
  },
};
