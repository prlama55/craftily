import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as s,M as l}from"./index.es-1aP_VqRC.js";const R={title:"Components/Radio",component:s,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{disabled:{control:"boolean"}}},d={render:a=>e.jsx(l,{name:"fruits",defaultValue:"apple",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{...a,name:"fruits",value:"apple",children:"Apple"}),e.jsx(s,{...a,name:"fruits",value:"banana",children:"Banana"}),e.jsx(s,{...a,name:"fruits",value:"orange",children:"Orange"})]})})},n={render:a=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(l,{name:"size-sm",defaultValue:"1",children:e.jsx(s,{...a,name:"size-sm",value:"1",children:"Small radio"})}),e.jsx(l,{name:"size-md",defaultValue:"1",children:e.jsx(s,{...a,name:"size-md",value:"1",children:"Medium radio"})}),e.jsx(l,{name:"size-lg",defaultValue:"1",children:e.jsx(s,{...a,name:"size-lg",value:"1",children:"Large radio"})})]})},r={render:a=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs(l,{name:"states",defaultValue:"default",children:[e.jsx(s,{...a,name:"states",value:"default",children:"Default radio"}),e.jsx(s,{...a,name:"states",value:"checked",checked:!0,children:"Checked radio"}),e.jsx(s,{...a,name:"states",value:"disabled",disabled:!0,children:"Disabled radio"}),e.jsx(s,{...a,name:"states",value:"checked-disabled",checked:!0,disabled:!0,children:"Checked and disabled"})]})})};var i,o,t;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <RadioGroup name="fruits" defaultValue="apple">
      <div className="flex flex-col gap-4">
        <Radio {...args} name="fruits" value="apple">
          Apple
        </Radio>
        <Radio {...args} name="fruits" value="banana">
          Banana
        </Radio>
        <Radio {...args} name="fruits" value="orange">
          Orange
        </Radio>
      </div>
    </RadioGroup>
}`,...(t=(o=d.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6">
      <RadioGroup name="size-sm" defaultValue="1">
        <Radio {...args} name="size-sm" value="1">
          Small radio
        </Radio>
      </RadioGroup>
      <RadioGroup name="size-md" defaultValue="1">
        <Radio {...args} name="size-md" value="1">
          Medium radio
        </Radio>
      </RadioGroup>
      <RadioGroup name="size-lg" defaultValue="1">
        <Radio {...args} name="size-lg" value="1">
          Large radio
        </Radio>
      </RadioGroup>
    </div>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <RadioGroup name="states" defaultValue="default">
        <Radio {...args} name="states" value="default">
          Default radio
        </Radio>
        <Radio {...args} name="states" value="checked" checked>
          Checked radio
        </Radio>
        <Radio {...args} name="states" value="disabled" disabled>
          Disabled radio
        </Radio>
        <Radio {...args} name="states" value="checked-disabled" checked disabled>
          Checked and disabled
        </Radio>
      </RadioGroup>
    </div>
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const g=["Basic","Sizes","States"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Sizes:n,States:r,__namedExportsOrder:g,default:R},Symbol.toStringTag,{value:"Module"}));export{d as B,j as R,n as S,r as a};
