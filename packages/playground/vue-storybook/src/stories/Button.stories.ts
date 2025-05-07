import type { Meta, StoryFn } from '@storybook/vue3';

import { Button } from '@craftily/ui-vue';
import type { ButtonProps } from '@craftily/ui-vue';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'CraftilyUI/Vue/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'A button component',
      },
    },
    actions: { handles: ['click'] },
  },
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args">Click Me!</Button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  isLoading: false,
  children: 'Click Me!',
};
