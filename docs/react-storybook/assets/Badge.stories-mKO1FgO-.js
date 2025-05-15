import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Q as r}from"./index.es-1aP_VqRC.js";const h={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{variant:{control:"select",options:["primary","secondary","accent","ghost","outline"]}}},s={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,variant:"primary",children:"Primary"}),e.jsx(r,{...a,variant:"secondary",children:"Secondary"}),e.jsx(r,{...a,variant:"accent",children:"Accent"}),e.jsx(r,{...a,variant:"ghost",children:"Ghost"}),e.jsx(r,{...a,variant:"outline",children:"Outline"})]})},t={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,className:"text-xs",children:"Extra Small"}),e.jsx(r,{...a,className:"text-sm",children:"Small"}),e.jsx(r,{...a,children:"Default"}),e.jsx(r,{...a,className:"text-lg",children:"Large"}),e.jsx(r,{...a,className:"text-xl",children:"Extra Large"})]}),args:{variant:"primary"}},n={render:a=>e.jsx("div",{className:"flex flex-wrap gap-4 items-center",children:e.jsxs(r,{...a,children:[e.jsx("svg",{className:"w-4 h-4 mr-1",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L1 21h22L12 2zm0 3.45l8.4 14.55H3.6L12 5.45z"})}),"With Icon"]})}),args:{variant:"primary"}};var c,i,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} variant="primary">
        Primary
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="accent">
        Accent
      </Badge>
      <Badge {...args} variant="ghost">
        Ghost
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
    </div>
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,o,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} className="text-xs">
        Extra Small
      </Badge>
      <Badge {...args} className="text-sm">
        Small
      </Badge>
      <Badge {...args}>Default</Badge>
      <Badge {...args} className="text-lg">
        Large
      </Badge>
      <Badge {...args} className="text-xl">
        Extra Large
      </Badge>
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var g,x,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args}>
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.45l8.4 14.55H3.6L12 5.45z" />
        </svg>
        With Icon
      </Badge>
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(p=(x=n.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const v=["Variants","Sizes","WithIcon"],f=Object.freeze(Object.defineProperty({__proto__:null,Sizes:t,Variants:s,WithIcon:n,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{f as B,t as S,s as V,n as W};
