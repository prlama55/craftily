import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-D4lIrffr.js";import{H as l,e as p}from"./index.es-1aP_VqRC.js";const i={title:"Components/Modal",component:l,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{title:{control:"text"},closeOnBackdrop:{control:"boolean"},hideCloseButton:{control:"boolean"},closeButtonLabel:{control:"text"}}},m=n=>{const[c,t]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(p,{onClick:()=>{console.log("Open Modal"),t(!0)},label:"Open Modal",variant:"primary",size:"sm"}),e.jsx(l,{...n,open:c,onClose:()=>t(!1),children:e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"This is the modal content."})})})]})},o={render:m,args:{title:"Example Modal",closeOnBackdrop:!0,hideCloseButton:!1,closeButtonLabel:"×"}};var s,a,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ModalTemplate,
  args: {
    title: 'Example Modal',
    closeOnBackdrop: true,
    hideCloseButton: false,
    closeButtonLabel: '×'
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const u=["Basic"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{o as B,M};
