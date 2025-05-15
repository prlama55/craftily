import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as a,Q as c}from"./index.es-1aP_VqRC.js";const w={title:"Components/Tabs",component:a,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{variant:{control:"select",options:["default","pills","underline"],description:"The visual style of the tabs"},size:{control:"select",options:["sm","md","lg"],description:"The size of the tabs"},defaultValue:{control:"text",description:"The default selected tab value"},value:{control:"text",description:"The controlled tab value"},onChange:{action:"changed",description:"Called when the selected tab changes"}}},n={render:s=>e.jsxs(a,{...s,defaultValue:"account",className:"w-[400px]",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"account",children:"Account"}),e.jsx(a.Trigger,{value:"password",children:"Password"}),e.jsx(a.Trigger,{value:"settings",children:"Settings"})]}),e.jsx(a.Content,{value:"account",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Account Settings"}),e.jsx("p",{children:"Manage your account preferences and profile information."})]})}),e.jsx(a.Content,{value:"password",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Password Settings"}),e.jsx("p",{children:"Update your password and security preferences."})]})}),e.jsx(a.Content,{value:"settings",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"General Settings"}),e.jsx("p",{children:"Configure general application settings and preferences."})]})})]}),args:{variant:"default"}},t={render:s=>e.jsxs(a,{...s,defaultValue:"profile",className:"w-[400px]",children:[e.jsxs(a.List,{children:[e.jsxs(a.Trigger,{value:"profile",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})}),"Profile"]}),e.jsxs(a.Trigger,{value:"notifications",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"})}),"Notifications"]}),e.jsxs(a.Trigger,{value:"security",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"})}),"Security"]})]}),e.jsx(a.Content,{value:"profile",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Profile"}),e.jsx("p",{children:"View and update your profile information."})]})}),e.jsx(a.Content,{value:"notifications",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Notifications"}),e.jsx("p",{children:"Manage your notification preferences."})]})}),e.jsx(a.Content,{value:"security",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Security"}),e.jsx("p",{children:"Configure your security settings."})]})})]}),args:{variant:"default"}},r={render:s=>e.jsxs("div",{className:"flex flex-col gap-8 w-[400px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Default Variant"}),e.jsxs(a,{...s,variant:"default",defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"Tab 1"}),e.jsx(a.Trigger,{value:"tab2",children:"Tab 2"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsx("div",{className:"p-4 rounded-lg bg-base-200",children:"Default variant content 1"})}),e.jsx(a.Content,{value:"tab2",children:e.jsx("div",{className:"p-4 rounded-lg bg-base-200",children:"Default variant content 2"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Pills Variant"}),e.jsxs(a,{...s,variant:"pills",defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"Tab 1"}),e.jsx(a.Trigger,{value:"tab2",children:"Tab 2"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsx("div",{className:"p-4 rounded-lg bg-base-200",children:"Pills variant content 1"})}),e.jsx(a.Content,{value:"tab2",children:e.jsx("div",{className:"p-4 rounded-lg bg-base-200",children:"Pills variant content 2"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Underline Variant"}),e.jsxs(a,{...s,variant:"underline",defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"Tab 1"}),e.jsx(a.Trigger,{value:"tab2",children:"Tab 2"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsx("div",{className:"p-4 rounded-lg bg-base-200",children:"Underline variant content 1"})}),e.jsx(a.Content,{value:"tab2",children:e.jsx("div",{className:"p-4 rounded-lg bg-base-200",children:"Underline variant content 2"})})]})]})]})},i={render:s=>e.jsxs(a,{...s,defaultValue:"messages",className:"w-[400px]",children:[e.jsxs(a.List,{children:[e.jsxs(a.Trigger,{value:"messages",children:["Messages",e.jsx(c,{variant:"primary",className:"ml-2",children:"4"})]}),e.jsxs(a.Trigger,{value:"notifications",children:["Notifications",e.jsx(c,{variant:"secondary",className:"ml-2",children:"2"})]})]}),e.jsx(a.Content,{value:"messages",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Messages"}),e.jsx("p",{children:"You have 4 unread messages."})]})}),e.jsx(a.Content,{value:"notifications",children:e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Notifications"}),e.jsx("p",{children:"You have 2 new notifications."})]})})]}),args:{variant:"default"}},l={render:s=>e.jsxs(a,{...s,defaultValue:"inbox",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"inbox",children:e.jsxs("span",{className:"flex items-center gap-2",children:["Inbox",e.jsx(c,{variant:"primary",children:"4"})]})}),e.jsx(a.Trigger,{value:"sent",children:e.jsxs("span",{className:"flex items-center gap-2",children:["Sent",e.jsx(c,{variant:"secondary",children:"2"})]})}),e.jsx(a.Trigger,{value:"draft",children:e.jsxs("span",{className:"flex items-center gap-2",children:["Draft",e.jsx(c,{variant:"accent",children:"1"})]})})]}),e.jsx(a.Content,{value:"inbox",children:e.jsx("div",{className:"p-4",children:"Inbox content"})}),e.jsx(a.Content,{value:"sent",children:e.jsx("div",{className:"p-4",children:"Sent content"})}),e.jsx(a.Content,{value:"draft",children:e.jsx("div",{className:"p-4",children:"Draft content"})})]})};var d,o,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="account" className="w-[400px]">
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
    </Tabs>,
  args: {
    variant: 'default'
  }
}`,...(g=(o=n.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};var u,b,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="profile" className="w-[400px]">
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
    </Tabs>,
  args: {
    variant: 'default'
  }
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var v,h,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 w-[400px]">
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
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var p,x,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="messages" className="w-[400px]">
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
    </Tabs>,
  args: {
    variant: 'default'
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,N,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="inbox">
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
}`,...(C=(N=l.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const y=["Basic","WithIcons","Variants","WithBadge","WithBadgeAndIcons"],S=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Variants:r,WithBadge:i,WithBadgeAndIcons:l,WithIcons:t,__namedExportsOrder:y,default:w},Symbol.toStringTag,{value:"Module"}));export{n as B,S as T,r as V,t as W,i as a};
