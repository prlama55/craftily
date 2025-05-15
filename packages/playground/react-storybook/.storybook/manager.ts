// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Craftily',
    brandUrl: 'https://docs.craftily.com',
    brandImage: './src/stories/assets/logo.svg', // path to your logo
  },
});
