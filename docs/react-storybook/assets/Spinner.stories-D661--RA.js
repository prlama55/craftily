import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./index.es-1aP_VqRC.js";const S={title:"Components/Spinner",component:s,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},color:{control:"select",options:["primary","secondary","success","error","warning","info"]}}},o={render:r=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{...r,size:"sm"}),e.jsx(s,{...r,size:"md"}),e.jsx(s,{...r,size:"lg"}),e.jsx(s,{...r,size:"xl"})]})},a={render:r=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{...r,color:"primary"}),e.jsx(s,{...r,color:"secondary"}),e.jsx(s,{...r,color:"success"}),e.jsx(s,{...r,color:"error"}),e.jsx(s,{...r,color:"warning"}),e.jsx(s,{...r,color:"info"})]}),args:{size:"md"}},n={render:r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{...r}),e.jsx("span",{className:"text-sm",children:"Loading..."})]}),args:{size:"lg",color:"primary"}};var c,i,t;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </div>
}`,...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="error" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="info" />
    </div>,
  args: {
    size: 'md'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-2">
      <Spinner {...args} />
      <span className="text-sm">Loading...</span>
    </div>,
  args: {
    size: 'lg',
    color: 'primary'
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const j=["Sizes","Colors","WithText"],z=Object.freeze(Object.defineProperty({__proto__:null,Colors:a,Sizes:o,WithText:n,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{a as C,z as S,n as W,o as a};
