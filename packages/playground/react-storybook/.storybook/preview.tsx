import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/index.css'; // your Tailwind base

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
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
        type: 'tablet',
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1440px',
          height: '900px',
        },
        type: 'desktop',
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '2560px',
          height: '1440px',
        },
        type: 'desktop',
      },
    },
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

      return <Story />;
    },
  ],
};

export default preview;
