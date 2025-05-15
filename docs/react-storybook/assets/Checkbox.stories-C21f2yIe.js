import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{n as s}from"./index.es-1aP_VqRC.js";const m={title:"Components/Checkbox",component:s,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"}}},o={render:e=>c.jsx(s,{...e,children:"Accept terms and conditions"})},r={render:e=>c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsx(s,{...e,children:"Small checkbox"}),c.jsx(s,{...e,children:"Medium checkbox"}),c.jsx(s,{...e,children:"Large checkbox"})]})},a={render:e=>c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsx(s,{...e,children:"Default checkbox"}),c.jsx(s,{...e,checked:!0,children:"Checked checkbox"}),c.jsx(s,{...e,disabled:!0,children:"Disabled checkbox"}),c.jsx(s,{...e,checked:!0,disabled:!0,children:"Checked and disabled"})]})};var d,n,t;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Checkbox {...args}>Accept terms and conditions</Checkbox>
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var l,x,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Checkbox {...args}>Small checkbox</Checkbox>
      <Checkbox {...args}>Medium checkbox</Checkbox>
      <Checkbox {...args}>Large checkbox</Checkbox>
    </div>
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var i,b,k;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Checkbox {...args}>Default checkbox</Checkbox>
      <Checkbox {...args} checked>
        Checked checkbox
      </Checkbox>
      <Checkbox {...args} disabled>
        Disabled checkbox
      </Checkbox>
      <Checkbox {...args} checked disabled>
        Checked and disabled
      </Checkbox>
    </div>
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const p=["Basic","Sizes","States"],g=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Sizes:r,States:a,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{o as B,g as C,r as S,a};
