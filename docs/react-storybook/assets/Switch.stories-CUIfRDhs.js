import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a}from"./index.es-1aP_VqRC.js";const j={title:"Components/Switch",component:a,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{disabled:{control:"boolean",description:"Whether the switch is disabled"},checked:{control:"boolean",description:"Whether the switch is checked"}}},c={args:{checked:!1,disabled:!1},render:s=>e.jsx(a,{...s})},n={render:s=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,className:"scale-75"}),e.jsx("span",{children:"Small"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s}),e.jsx("span",{children:"Default"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,className:"scale-125"}),e.jsx("span",{children:"Large"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,className:"scale-150"}),e.jsx("span",{children:"Extra Large"})]})]}),args:{checked:!0}},r={render:s=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,checked:!1,disabled:!1}),e.jsx("span",{children:"Default switch"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,checked:!0,disabled:!1}),e.jsx("span",{children:"Checked switch"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,checked:!1,disabled:!0}),e.jsx("span",{children:"Disabled switch"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...s,checked:!0,disabled:!0}),e.jsx("span",{children:"Checked and disabled"})]})]})},i={render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:"Email notifications"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Receive email updates about your account activity"})]})})};var t,l,d;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  },
  render: args => <Switch {...args} />
}`,...(d=(l=c.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,p,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch {...args} className="scale-75" />
        <span>Small</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} />
        <span>Default</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} className="scale-125" />
        <span>Large</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} className="scale-150" />
        <span>Extra Large</span>
      </div>
    </div>,
  args: {
    checked: true
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch {...args} checked={false} disabled={false} />
        <span>Default switch</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} checked={true} disabled={false} />
        <span>Checked switch</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} checked={false} disabled={true} />
        <span>Disabled switch</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch {...args} checked={true} disabled={true} />
        <span>Checked and disabled</span>
      </div>
    </div>
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,u,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Switch {...args}>
      <div className="flex flex-col">
        <span>Email notifications</span>
        <span className="text-sm text-gray-500">
          Receive email updates about your account activity
        </span>
      </div>
    </Switch>
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const N=["Basic","Sizes","States","WithDescription"],w=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,Sizes:n,States:r,WithDescription:i,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{c as B,w as S,i as W,n as a,r as b};
