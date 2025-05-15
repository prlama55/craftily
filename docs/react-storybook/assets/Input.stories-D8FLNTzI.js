import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./index.es-1aP_VqRC.js";const b={title:"Components/Input",component:r,parameters:{layout:"centered"}},s={args:{placeholder:"Enter text here",className:"w-64"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(r,{placeholder:"Default input"}),e.jsx(r,{placeholder:"With border",className:"border border-gray-300 rounded-md"}),e.jsx(r,{placeholder:"Filled style",className:"bg-gray-100 rounded-md"}),e.jsx(r,{placeholder:"Custom style",className:"border-b-2 border-blue-500 focus:border-blue-700 rounded-none"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(r,{placeholder:"Search...",prefix:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx(r,{placeholder:"Enter email",suffix:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx(r,{placeholder:"Password",type:"password",suffix:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(r,{placeholder:"Default state"}),e.jsx(r,{placeholder:"Disabled state",disabled:!0}),e.jsx(r,{placeholder:"Error state",error:"This field is required"}),e.jsx(r,{placeholder:"Success state",success:!0}),e.jsx(r,{placeholder:"With value",value:"Input with value"})]})},n={args:{className:"w-64",placeholder:"Enter text here"}};var l,d,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here',
    className: 'w-64'
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Default input" />
      <Input placeholder="With border" className="border border-gray-300 rounded-md" />
      <Input placeholder="Filled style" className="bg-gray-100 rounded-md" />
      <Input placeholder="Custom style" className="border-b-2 border-blue-500 focus:border-blue-700 rounded-none" />
    </div>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,m,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Search..." prefix={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>} />
      <Input placeholder="Enter email" suffix={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>} />
      <Input placeholder="Password" type="password" suffix={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>} />
    </div>
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var w,g,f;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Default state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Error state" error="This field is required" />
      <Input placeholder="Success state" success />
      <Input placeholder="With value" value="Input with value" />
    </div>
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,j,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: 'w-64',
    placeholder: 'Enter text here'
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const N=["Basic","Variants","WithIcon","States","Primary"],L=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Primary:n,States:t,Variants:a,WithIcon:o,__namedExportsOrder:N,default:b},Symbol.toStringTag,{value:"Module"}));export{s as B,L as I,t as S,a as V,o as W};
