import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as o,Q as n}from"./index.es-1aP_VqRC.js";const u={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},tags:["docsPage"],argTypes:{placement:{control:"select",options:["top","right","bottom","left"]}}},r={render:e=>t.jsx(o,{...e,content:"This is a tooltip",children:t.jsx(n,{variant:"outline",children:"Hover me"})})},i={render:e=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(o,{...e,content:"Top tooltip",placement:"top",children:t.jsx(n,{variant:"outline",children:"Top"})}),t.jsx(o,{...e,content:"Right tooltip",placement:"right",children:t.jsx(n,{variant:"outline",children:"Right"})}),t.jsx(o,{...e,content:"Bottom tooltip",placement:"bottom",children:t.jsx(n,{variant:"outline",children:"Bottom"})}),t.jsx(o,{...e,content:"Left tooltip",placement:"left",children:t.jsx(n,{variant:"outline",children:"Left"})})]})},a={render:e=>t.jsxs(o,{...e,children:[t.jsx(n,{variant:"outline",children:"Hover for HTML content"}),t.jsxs("div",{slot:"content",children:[t.jsx("p",{style:{margin:"0 0 8px 0"},children:t.jsx("strong",{children:"Rich HTML Content"})}),t.jsxs("p",{style:{margin:"0"},children:["This tooltip contains ",t.jsx("em",{children:"formatted"})," content."]})]})]})};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} content="This is a tooltip">
      <Badge variant="outline">Hover me</Badge>
    </Tooltip>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Tooltip {...args} content="Top tooltip" placement="top">
        <Badge variant="outline">Top</Badge>
      </Tooltip>
      <Tooltip {...args} content="Right tooltip" placement="right">
        <Badge variant="outline">Right</Badge>
      </Tooltip>
      <Tooltip {...args} content="Bottom tooltip" placement="bottom">
        <Badge variant="outline">Bottom</Badge>
      </Tooltip>
      <Tooltip {...args} content="Left tooltip" placement="left">
        <Badge variant="outline">Left</Badge>
      </Tooltip>
    </div>
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,h,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Badge variant="outline">Hover for HTML content</Badge>
      <div slot="content">
        <p style={{
        margin: '0 0 8px 0'
      }}>
          <strong>Rich HTML Content</strong>
        </p>
        <p style={{
        margin: '0'
      }}>
          This tooltip contains <em>formatted</em> content.
        </p>
      </div>
    </Tooltip>
}`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const x=["Basic","Positions","WithHTML"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Positions:i,WithHTML:a,__namedExportsOrder:x,default:u},Symbol.toStringTag,{value:"Module"}));export{r as B,i as P,B as T};
