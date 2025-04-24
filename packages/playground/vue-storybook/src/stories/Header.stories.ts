import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";

import { Header } from "@craftily/ui-vue";

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CraftilyUI/Vue/Header",
  component: Header,
  render: (args: any) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header :user="args.user" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe"
    }
  }
};

export const LoggedOut: Story = {
  args: {
    user: null
  }
};
