import type { Meta, StoryObj } from '@storybook/vue3';
import {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavItem,
  HeaderActions,
  Button,
} from '@craftily/ui-vue';
import Logo from '../assets/logo.svg';
const meta = {
  title: 'Components/Header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The `Header` component is designed for the top section of a webpage. It typically contains a brand logo/name (`#brand` slot), primary navigation links (`#navigation` slot), and call-to-action buttons or user authentication links (`#actions` slot). It also supports a `#mobile-menu` slot for responsive designs to display a condensed menu on smaller screens.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Header, HeaderBrand, HeaderNav, HeaderNavItem, Button },
    setup() {
      return { args, Logo };
    },
    template: `
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
      </Header>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story displays a basic `Header` with a brand logo in the `#brand` slot and primary navigation links in the `#navigation` slot. It showcases the fundamental structure of the header.',
      },
    },
  },
};

export const WithActions: Story = {
  render: (args) => ({
    components: { Header, HeaderBrand, HeaderNav, HeaderNavItem, HeaderActions, Button },
    setup() {
      return { args, Logo };
    },
    template: `
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost" size="sm" label="Sign in"/>
          <Button variant="primary" size="sm" label="Get started"/>
        </HeaderActions>
      </Header>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story extends the basic `Header` by including call-to-action buttons (e.g., Sign In, Get Started) in the `#actions` slot. This is a common pattern for headers that need to guide users towards key interactions.',
      },
    },
  },
};

export const WithMobileMenu: Story = {
  render: (args) => ({
    components: { Header, HeaderBrand, HeaderNav, HeaderNavItem, HeaderActions, Button },
    setup() {
      return { args, Logo };
    },
    template: `
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost" size="sm" label="Sign in"/>
          <Button variant="primary" size="sm" label="Get started"/>
        </HeaderActions>
        <div slot="mobile-menu">
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
          <Button variant="ghost" size="sm" label="Sign in" style="margin-top: 1rem;"/>
          <Button variant="primary" size="sm" label="Get started" style="margin-top: 0.5rem;"/>
        </div>
      </Header>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the `#mobile-menu` slot, which is intended for responsive designs. The content within this slot (typically navigation and action items) would be shown on smaller screens when a mobile menu is toggled. This example includes all items from the desktop navigation and actions for completeness.',
      },
    },
  },
};
