import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Badge } from '@craftily/ui-react';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['docsPage'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'The visual style of the tabs',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tabs',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected tab value',
    },
    value: {
      control: 'text',
      description: 'The controlled tab value',
    },
    onChange: {
      action: 'changed',
      description: 'Called when the selected tab changes',
    },
  },
};

export default meta;

export const Basic: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="account" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Account Settings</h3>
          <p>Manage your account preferences and profile information.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="password">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Password Settings</h3>
          <p>Update your password and security preferences.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">General Settings</h3>
          <p>Configure general application settings and preferences.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="profile">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Profile
        </Tabs.Trigger>
        <Tabs.Trigger value="notifications">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
          Notifications
        </Tabs.Trigger>
        <Tabs.Trigger value="security">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          Security
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="profile">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Profile</h3>
          <p>View and update your profile information.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Notifications</h3>
          <p>Manage your notification preferences.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="security">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Security</h3>
          <p>Configure your security settings.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[400px]">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Variant</h3>
        <Tabs {...args} variant="default" defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <div className="p-4 rounded-lg bg-base-200">Default variant content 1</div>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div className="p-4 rounded-lg bg-base-200">Default variant content 2</div>
          </Tabs.Content>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Pills Variant</h3>
        <Tabs {...args} variant="pills" defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <div className="p-4 rounded-lg bg-base-200">Pills variant content 1</div>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div className="p-4 rounded-lg bg-base-200">Pills variant content 2</div>
          </Tabs.Content>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Underline Variant</h3>
        <Tabs {...args} variant="underline" defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <div className="p-4 rounded-lg bg-base-200">Underline variant content 1</div>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div className="p-4 rounded-lg bg-base-200">Underline variant content 2</div>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
  ),
};

export const WithBadge: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="messages" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="messages">
          Messages
          <Badge variant="primary" className="ml-2">4</Badge>
        </Tabs.Trigger>
        <Tabs.Trigger value="notifications">
          Notifications
          <Badge variant="secondary" className="ml-2">2</Badge>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="messages">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Messages</h3>
          <p>You have 4 unread messages.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <div className="p-4 rounded-lg bg-base-200">
          <h3 className="text-lg font-medium mb-2">Notifications</h3>
          <p>You have 2 new notifications.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
  },
};

export const WithBadgeAndIcons: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="inbox">
      <Tabs.List>
        <Tabs.Trigger value="inbox">
          <span className="flex items-center gap-2">
            Inbox
            <Badge variant="primary">4</Badge>
          </span>
        </Tabs.Trigger>
        <Tabs.Trigger value="sent">
          <span className="flex items-center gap-2">
            Sent
            <Badge variant="secondary">2</Badge>
          </span>
        </Tabs.Trigger>
        <Tabs.Trigger value="draft">
          <span className="flex items-center gap-2">
            Draft
            <Badge variant="accent">1</Badge>
          </span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="inbox">
        <div className="p-4">Inbox content</div>
      </Tabs.Content>
      <Tabs.Content value="sent">
        <div className="p-4">Sent content</div>
      </Tabs.Content>
      <Tabs.Content value="draft">
        <div className="p-4">Draft content</div>
      </Tabs.Content>
    </Tabs>
  ),
};
