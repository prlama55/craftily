import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as a,T as C,e as s}from"./index.es-1aP_VqRC.js";import{L as o}from"./logo-BWQ80QBF.js";const w={component:a,title:"Components/Header",parameters:{layout:"centered"}},t={args:{className:"header-default"},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Brand,{className:"header-brand",children:e.jsx("img",{src:o,alt:"Logo"})}),e.jsxs(a.Nav,{children:[e.jsx(a.NavItem,{active:!0,children:"Home"}),e.jsx(a.NavItem,{children:"About"})]}),e.jsx("div",{className:"search-container",children:e.jsx(C,{type:"text",placeholder:"Search...",className:"search-input"})}),e.jsx(a.Actions,{children:e.jsx(s,{variant:"primary",size:"sm",label:"Sign In"})})]})},d={args:{className:"header-basic"},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Brand,{className:"header-brand",children:e.jsx("img",{src:o,alt:"Logo"})}),e.jsxs(a.Nav,{children:[e.jsx(a.NavItem,{active:!0,children:"Home"}),e.jsx(a.NavItem,{children:"About"}),e.jsx(a.NavItem,{children:"Services"}),e.jsx(a.NavItem,{children:"Contact"})]}),e.jsx(a.Actions,{children:e.jsx(s,{variant:"primary",size:"sm",label:"Sign In"})})]})},c={args:{className:"header-with-navigation"},render:r=>e.jsxs(a,{...r,children:[e.jsxs(a.Nav,{children:[e.jsx(a.NavItem,{active:!0,children:"Home"}),e.jsx(a.NavItem,{children:"About"}),e.jsx(a.NavItem,{children:"Services"}),e.jsx(a.NavItem,{children:"Products"}),e.jsx(a.NavItem,{children:"Contact"}),e.jsx(a.NavItem,{children:"Support"})]}),e.jsx(a.Actions,{children:e.jsx(s,{variant:"primary",size:"sm",label:"Sign In"})})]})},i={args:{className:"header-with-actions"},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Brand,{children:e.jsx("img",{src:o,alt:"Craftily UI",className:"h-8"})}),e.jsxs(a.Nav,{children:[e.jsx(a.NavItem,{href:"#",active:!0,children:"Home"}),e.jsx(a.NavItem,{href:"#",children:"Products"}),e.jsx(a.NavItem,{href:"#",children:"About"}),e.jsx(a.NavItem,{href:"#",children:"Contact"})]}),e.jsxs(a.Actions,{children:[e.jsx(s,{variant:"ghost",size:"sm",label:"Sign In"}),e.jsx(s,{size:"sm",label:"Sign Up"})]})]})},n={args:{className:"header-with-search"},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Brand,{children:e.jsx("img",{src:o,alt:"Craftily UI",className:"h-8"})}),e.jsxs(a.Nav,{children:[e.jsx(a.NavItem,{href:"#",active:!0,children:"Home"}),e.jsx(a.NavItem,{href:"#",children:"Products"}),e.jsx(a.NavItem,{href:"#",children:"About"})]}),e.jsx(a.Search,{children:e.jsx(C,{type:"search",placeholder:"Search...",className:"w-64"})}),e.jsx(a.Actions,{children:e.jsx(s,{variant:"primary",size:"sm",label:"Sign In"})})]})},m={args:{className:"header-responsive"},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Brand,{children:e.jsx("img",{src:o,alt:"Craftily UI",className:"h-8"})}),e.jsx(a.Actions,{children:e.jsx(a.MobileMenu,{})}),e.jsxs(a.Nav,{className:"hidden md:flex",children:[e.jsx(a.NavItem,{href:"#",active:!0,children:"Home"}),e.jsx(a.NavItem,{href:"#",children:"Products"}),e.jsx(a.NavItem,{href:"#",children:"About"}),e.jsx(a.NavItem,{href:"#",children:"Contact"})]}),e.jsxs(a.Actions,{className:"hidden md:flex",children:[e.jsx(s,{variant:"ghost",size:"sm",label:"Sign In"}),e.jsx(s,{size:"sm",label:"Sign Up"})]}),e.jsxs(a.MobileMenu,{children:[e.jsx(a.NavItem,{href:"#",active:!0,children:"Home"}),e.jsx(a.NavItem,{href:"#",children:"Products"}),e.jsx(a.NavItem,{href:"#",children:"About"}),e.jsx(a.NavItem,{href:"#",children:"Contact"}),e.jsxs("div",{className:"mt-4",children:[e.jsx(s,{variant:"ghost",size:"sm",label:"Sign In",className:"w-full mb-2"}),e.jsx(s,{size:"sm",label:"Sign Up",className:"w-full"})]})]})]})};var l,h,v;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    className: 'header-default'
  },
  render: (args: Story['args']) => <Header {...args}>
      <Header.Brand className="header-brand">
        <img src={Logo} alt="Logo" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
      </Header.Nav>
      <div className="search-container">
        <Input type="text" placeholder="Search..." className="search-input" />
      </div>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var N,H,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: 'header-basic'
  },
  render: (args: Story['args']) => <Header {...args}>
      <Header.Brand className="header-brand">
        <img src={Logo} alt="Logo" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
        <Header.NavItem>Services</Header.NavItem>
        <Header.NavItem>Contact</Header.NavItem>
      </Header.Nav>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var g,u,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: 'header-with-navigation'
  },
  render: (args: Story['args']) => <Header {...args}>
      <Header.Nav>
        <Header.NavItem active>Home</Header.NavItem>
        <Header.NavItem>About</Header.NavItem>
        <Header.NavItem>Services</Header.NavItem>
        <Header.NavItem>Products</Header.NavItem>
        <Header.NavItem>Contact</Header.NavItem>
        <Header.NavItem>Support</Header.NavItem>
      </Header.Nav>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,p,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    className: 'header-with-actions'
  },
  render: (args: Story['args']) => <Header {...args}>
      <Header.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
        <Header.NavItem href="#">Contact</Header.NavItem>
      </Header.Nav>
      <Header.Actions>
        <Button variant="ghost" size="sm" label="Sign In" />
        <Button size="sm" label="Sign Up" />
      </Header.Actions>
    </Header>
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,S,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: 'header-with-search'
  },
  render: (args: Story['args']) => <Header {...args}>
      <Header.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
      </Header.Brand>
      <Header.Nav>
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
      </Header.Nav>
      <Header.Search>
        <Input type="search" placeholder="Search..." className="w-64" />
      </Header.Search>
      <Header.Actions>
        <Button variant="primary" size="sm" label="Sign In" />
      </Header.Actions>
    </Header>
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var B,y,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    className: 'header-responsive'
  },
  render: (args: Story['args']) => <Header {...args}>
      <Header.Brand>
        <img src={Logo} alt="Craftily UI" className="h-8" />
      </Header.Brand>
      <Header.Actions>
        <Header.MobileMenu />
      </Header.Actions>
      <Header.Nav className="hidden md:flex">
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
        <Header.NavItem href="#">Contact</Header.NavItem>
      </Header.Nav>
      <Header.Actions className="hidden md:flex">
        <Button variant="ghost" size="sm" label="Sign In" />
        <Button size="sm" label="Sign Up" />
      </Header.Actions>
      <Header.MobileMenu>
        <Header.NavItem href="#" active>
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Products</Header.NavItem>
        <Header.NavItem href="#">About</Header.NavItem>
        <Header.NavItem href="#">Contact</Header.NavItem>
        <div className="mt-4">
          <Button variant="ghost" size="sm" label="Sign In" className="w-full mb-2" />
          <Button size="sm" label="Sign Up" className="w-full" />
        </div>
      </Header.MobileMenu>
    </Header>
}`,...(z=(y=m.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const U=["Default","Basic","WithNavigation","WithActions","WithSearch","Responsive"],W=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Default:t,Responsive:m,WithActions:i,WithNavigation:c,WithSearch:n,__namedExportsOrder:U,default:w},Symbol.toStringTag,{value:"Module"}));export{d as B,W as H,m as R,i as W,n as a};
