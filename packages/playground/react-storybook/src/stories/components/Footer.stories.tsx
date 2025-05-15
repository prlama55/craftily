import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@craftily/ui-react';
import Logo from '../assets/logo.svg';
type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['docsPage'],
};

export default meta;

export const Basic: Story = {
  render: (args) => (
    <Footer {...args}>
      <Footer.Copyright>© 2025 Craftily UI. All rights reserved.</Footer.Copyright>
    </Footer>
  ),
};

export const WithNavigation: Story = {
  render: (args) => (
    <Footer {...args}>
      <Footer.Navigation>
        <Footer.NavGroup title="Product">
          <Footer.Link href="#">Features</Footer.Link>
          <Footer.Link href="#">Pricing</Footer.Link>
          <Footer.Link href="#">Documentation</Footer.Link>
        </Footer.NavGroup>
        <Footer.NavGroup title="Company">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Careers</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.NavGroup>
      </Footer.Navigation>
      <Footer.Copyright>© 2025 Craftily UI. All rights reserved.</Footer.Copyright>
    </Footer>
  ),
};

export const WithSocial: Story = {
  render: (args) => (
    <Footer {...args}>
      <Footer.Social>
        <Footer.SocialLink href="#" icon="twitter" label="Twitter" />
        <Footer.SocialLink href="#" icon="github" label="GitHub" />
        <Footer.SocialLink href="#" icon="linkedin" label="LinkedIn" />
      </Footer.Social>
      <Footer.Copyright>© 2025 Craftily UI. All rights reserved.</Footer.Copyright>
    </Footer>
  ),
};

export const FullFeatured: Story = {
  render: (args) => (
    <Footer {...args}>
      <Footer.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
        <p className="mt-2 text-sm text-gray-500">Building beautiful interfaces with ease</p>
      </Footer.Brand>
      <Footer.Navigation>
        <Footer.NavGroup title="Product">
          <Footer.Link href="#">Features</Footer.Link>
          <Footer.Link href="#">Pricing</Footer.Link>
          <Footer.Link href="#">Documentation</Footer.Link>
        </Footer.NavGroup>
        <Footer.NavGroup title="Company">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Careers</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.NavGroup>
        <Footer.NavGroup title="Resources">
          <Footer.Link href="#">Blog</Footer.Link>
          <Footer.Link href="#">Newsletter</Footer.Link>
          <Footer.Link href="#">Support</Footer.Link>
        </Footer.NavGroup>
      </Footer.Navigation>
      <Footer.Social>
        <Footer.SocialLink href="#" icon="twitter" label="Twitter" />
        <Footer.SocialLink href="#" icon="github" label="GitHub" />
        <Footer.SocialLink href="#" icon="linkedin" label="LinkedIn" />
      </Footer.Social>
      <Footer.Copyright>© 2025 Craftily UI. All rights reserved.</Footer.Copyright>
    </Footer>
  ),
};
