import type { Meta, StoryFn } from "@storybook/vue3";

import { Button } from "@craftily/ui-vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "CraftilyUI/Vue/Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "A button component"
      }
    },
    actions: { handles: ["click"] }
  }
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  methods: {
    onClick() {
      console.log("Button clicked");
    }
  },
  template: `<Button v-bind="args" @onClick="onClick">Click Me!</Button>`
});

export const Primary = Template.bind({});
Primary.args = {
  class: "btn btn-primary"
};
