import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{e as a}from"./index.es-1aP_VqRC.js";const n={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{variant:{control:"select",options:["default","primary","secondary","accent","ghost","link"]},size:{control:"select",options:["sm","md","lg"]},iconPosition:{control:"radio",options:["left","right"]}}},t={render:e=>s.jsxs("div",{className:"flex gap-4 items-center justify-center",children:[s.jsx(a,{...e,label:(e.variant+" sm").toUpperCase(),size:"sm"}),s.jsx(a,{...e,label:(e.variant+" md").toUpperCase(),size:"md"}),s.jsx(a,{...e,label:(e.variant+" lg").toUpperCase(),size:"lg"})]}),args:{variant:"primary"}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center justify-center">
      <Button {...args} label={(args.variant + ' sm').toUpperCase()} size="sm" />
      <Button {...args} label={(args.variant + ' md').toUpperCase()} size="md" />
      <Button {...args} label={(args.variant + ' lg').toUpperCase()} size="lg" />
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const l=["Sizes"],c=Object.freeze(Object.defineProperty({__proto__:null,Sizes:t,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{c as B,t as S};
