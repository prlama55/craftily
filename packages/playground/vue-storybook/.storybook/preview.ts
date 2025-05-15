import type { Preview } from '@storybook/vue3';
import '@craftily/ui-vue';
import '../src/style.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Introduction',
        'Getting Started',
        'Components',
        'Utilities',
        'Hooks',
        'Design Tokens',
        'Guides',
        'Changelog',
      ],
    },
  },
  docs: {
    autodocs: true,
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'dark', icon: 'moon', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      const body = document.documentElement;

      body.classList.remove('light', 'dark');
      body.classList.add(theme);

      return Story();
    },
  ],
};

export default preview;
