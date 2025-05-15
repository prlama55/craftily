import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./index.es-1aP_VqRC.js";const x={title:"Components/Select",component:l,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"},error:{control:"text"}}},o={args:{className:"w-64",placeholder:"Select an option",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]}},s={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{...a,className:"w-64",placeholder:"Small select",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]}),e.jsx(l,{...a,className:"w-64",placeholder:"Medium select",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]}),e.jsx(l,{...a,className:"w-64",placeholder:"Large select",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]})]}),args:{className:"w-64"}},t={render:a=>e.jsxs(l,{...a,children:[e.jsxs("optgroup",{label:"Fruits",children:[e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"orange",children:"Orange"})]}),e.jsxs("optgroup",{label:"Vegetables",children:[e.jsx("option",{value:"carrot",children:"Carrot"}),e.jsx("option",{value:"broccoli",children:"Broccoli"}),e.jsx("option",{value:"spinach",children:"Spinach"})]})]}),args:{className:"w-64",placeholder:"Select food"}},r={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{...a,placeholder:"Default select",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]}),e.jsx(l,{...a,disabled:!0,placeholder:"Disabled select",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]}),e.jsx(l,{...a,error:"Please select an option",placeholder:"Error state",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]})]}),args:{className:"w-64"}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    className: 'w-64',
    placeholder: 'Select an option',
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }]
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,u,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Select {...args} className="w-64" placeholder="Small select" options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }]} />
      <Select {...args} className="w-64" placeholder="Medium select" options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }]} />
      <Select {...args} className="w-64" placeholder="Large select" options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }]} />
    </div>,
  args: {
    className: 'w-64'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,m,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Select {...args}>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
      </optgroup>
    </Select>,
  args: {
    className: 'w-64',
    placeholder: 'Select food'
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,O,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Select {...args} placeholder="Default select" options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }]} />
      <Select {...args} disabled placeholder="Disabled select" options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }]} />
      <Select {...args} error="Please select an option" placeholder="Error state" options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }]} />
    </div>,
  args: {
    className: 'w-64'
  }
}`,...(h=(O=r.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const S=["Basic","Sizes","WithGroups","States"],f=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Sizes:s,States:r,WithGroups:t,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{o as B,f as S,t as W,s as a,r as b};
