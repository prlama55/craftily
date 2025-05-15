import type { Meta, StoryObj } from '@storybook/react';
import { Header, Button, Input } from '@craftily/ui-react';
import Logo from '../assets/logo.svg';
const meta = {
  component: Header,
  title: 'Components/Header',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    className: 'header-default',
  },
  render: (args: Story['args']) => (
    <Header {...args}>
      <Header.Brand className="header-brand">
        <img src={Logo} alt="Logo" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
      </Header.Nav>
      <div className="search-container">
        <Input type="text" placeholder="Search..." className="search-input" />
      </div>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
  ),
};

export const Basic: Story = {
  args: {
    className: 'header-basic',
  },
  render: (args: Story['args']) => (
    <Header {...args}>
      <Header.Brand className="header-brand">
        <img src={Logo} alt="Logo" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
        <Header.NavItem>Services</Header.NavItem>
        <Header.NavItem>Contact</Header.NavItem>
      </Header.Nav>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
  ),
};

export const WithNavigation: Story = {
  args: {
    className: 'header-with-navigation',
  },
  render: (args: Story['args']) => (
    <Header {...args}>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
        <Header.NavItem>Services</Header.NavItem>
        <Header.NavItem>Products</Header.NavItem>
        <Header.NavItem>Contact</Header.NavItem>
        <Header.NavItem>Support</Header.NavItem>
      </Header.Nav>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
  ),
};

export const WithActions: Story = {
  args: {
    className: 'header-with-actions',
  },
  render: (args: Story['args']) => (
    <Header {...args}>
      <Header.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
        <Header.NavItem href="#">Contact</Header.NavItem>
      </Header.Nav>
      <Header.Actions>
        <Button variant="ghost" size="sm" label="Sign In" />
        <Button size="sm" label="Sign Up" />
      </Header.Actions>
    </Header>
  ),
};

export const WithSearch: Story = {
  args: {
    className: 'header-with-search',
  },
  render: (args: Story['args']) => (
    <Header {...args}>
      <Header.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
      </Header.Nav>
      <Header.Search>
        <Input type="search" placeholder="Search..." className="w-64" />
      </Header.Search>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
  ),
};

export const Responsive: Story = {
  args: {
    className: 'header-responsive',
  },
  render: (args: Story['args']) => (
    <Header {...args}>
      <Header.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
      </Header.Brand>
      <Header.Actions>
        <Header.MobileMenu />
      </Header.Actions>
      <Header.Nav className="hidden md:flex">
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
        <Header.NavItem href="#">Contact</Header.NavItem>
      </Header.Nav>
      <Header.Actions className="hidden md:flex">
        <Button variant="ghost" size="sm" label="Sign In" />
        <Button size="sm" label="Sign Up" />
      </Header.Actions>
      <Header.MobileMenu>
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
        <Header.NavItem href="#">Contact</Header.NavItem>
        <div className="mt-4">
          <Button variant="ghost" size="sm" label="Sign In" className="w-full mb-2" />
          <Button size="sm" label="Sign Up" className="w-full" />
        </div>
      </Header.MobileMenu>
    </Header>
  ),
};
