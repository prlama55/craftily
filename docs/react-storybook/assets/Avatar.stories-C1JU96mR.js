import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{Z as e}from"./index.es-1aP_VqRC.js";const x={title:"Components/Avatar",component:e,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{shape:{control:"select",options:["circle","square"],defaultValue:"circle"},size:{control:"select",options:["xs","sm","md","lg","xl"],defaultValue:"md"},src:{control:"text"},alt:{control:"text"},className:{control:"text"},children:{control:"text"}}},r={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[a.jsx(e,{size:"xs",children:"XS"}),a.jsx(e,{size:"sm",children:"SM"}),a.jsx(e,{size:"md",children:"MD"}),a.jsx(e,{size:"lg",children:"LG"}),a.jsx(e,{size:"xl",children:"XL"})]})},s={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[a.jsx(e,{size:"xs",src:"https://i.pravatar.cc/300",alt:"User avatar"}),a.jsx(e,{size:"sm",src:"https://i.pravatar.cc/300",alt:"User avatar"}),a.jsx(e,{size:"md",src:"https://i.pravatar.cc/300",alt:"User avatar"}),a.jsx(e,{size:"lg",src:"https://i.pravatar.cc/300",alt:"User avatar"}),a.jsx(e,{size:"xl",src:"https://i.pravatar.cc/300",alt:"User avatar"})]})},t={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[a.jsx(e,{size:"xs",children:"JD"}),a.jsx(e,{size:"sm",children:"JD"}),a.jsx(e,{size:"md",children:"JD"}),a.jsx(e,{size:"lg",children:"JD"}),a.jsx(e,{size:"xl",children:"JD"})]})};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="xs">XS</Avatar>
      <Avatar size="sm">SM</Avatar>
      <Avatar size="md">MD</Avatar>
      <Avatar size="lg">LG</Avatar>
      <Avatar size="xl">XL</Avatar>
    </div>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,o,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="xs" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="sm" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="md" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="lg" src="https://i.pravatar.cc/300" alt="User avatar" />
      <Avatar size="xl" src="https://i.pravatar.cc/300" alt="User avatar" />
    </div>
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var v,d,m;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="xs">JD</Avatar>
      <Avatar size="sm">JD</Avatar>
      <Avatar size="md">JD</Avatar>
      <Avatar size="lg">JD</Avatar>
      <Avatar size="xl">JD</Avatar>
    </div>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["Sizes","WithImage","WithInitials"],g=Object.freeze(Object.defineProperty({__proto__:null,Sizes:r,WithImage:s,WithInitials:t,__namedExportsOrder:z,default:x},Symbol.toStringTag,{value:"Module"}));export{g as A,r as S,s as W,t as a};
