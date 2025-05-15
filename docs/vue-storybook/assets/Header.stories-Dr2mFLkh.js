import{I as r,u as s,h as o,p as d,g as i,i as I}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const m="data:image/svg+xml,%3csvg%20id='logo-14'%20width='73'%20height='49'%20viewBox='0%200%2073%2049'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M46.8676%2024C46.8676%2036.4264%2036.794%2046.5%2024.3676%2046.5C11.9413%2046.5%201.86765%2036.4264%201.86765%2024C1.86765%2011.5736%2011.9413%201.5%2024.3676%201.5C36.794%201.5%2046.8676%2011.5736%2046.8676%2024Z'%20class='ccustom'%20fill='%2368DBFF'%3e%3c/path%3e%3cpath%20d='M71.1324%2024C71.1324%2036.4264%2061.1574%2046.5%2048.8529%2046.5C36.5484%2046.5%2026.5735%2036.4264%2026.5735%2024C26.5735%2011.5736%2036.5484%201.5%2048.8529%201.5C61.1574%201.5%2071.1324%2011.5736%2071.1324%2024Z'%20class='ccompli1'%20fill='%23FF7917'%3e%3c/path%3e%3cpath%20d='M36.6705%2042.8416C42.8109%2038.8239%2046.8676%2031.8858%2046.8676%2024C46.8676%2016.1144%2042.8109%209.17614%2036.6705%205.15854C30.5904%209.17614%2026.5735%2016.1144%2026.5735%2024C26.5735%2031.8858%2030.5904%2038.8239%2036.6705%2042.8416Z'%20class='ccompli2'%20fill='%235D2C02'%3e%3c/path%3e%3c/svg%3e",B={title:"Components/Header",parameters:{layout:"fullscreen",docs:{description:{component:"The `Header` component is designed for the top section of a webpage. It typically contains a brand logo/name (`#brand` slot), primary navigation links (`#navigation` slot), and call-to-action buttons or user authentication links (`#actions` slot). It also supports a `#mobile-menu` slot for responsive designs to display a condensed menu on smaller screens."}}},tags:["autodocs"]},a={render:e=>({components:{Header:i,HeaderBrand:d,HeaderNav:o,HeaderNavItem:s,Button:r},setup(){return{args:e,Logo:m}},template:`
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
      </Header>
    `}),parameters:{docs:{description:{story:"This story displays a basic `Header` with a brand logo in the `#brand` slot and primary navigation links in the `#navigation` slot. It showcases the fundamental structure of the header."}}}},t={render:e=>({components:{Header:i,HeaderBrand:d,HeaderNav:o,HeaderNavItem:s,HeaderActions:I,Button:r},setup(){return{args:e,Logo:m}},template:`
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost" size="sm" label="Sign in"/>
          <Button variant="primary" size="sm" label="Get started"/>
        </HeaderActions>
      </Header>
    `}),parameters:{docs:{description:{story:"This story extends the basic `Header` by including call-to-action buttons (e.g., Sign In, Get Started) in the `#actions` slot. This is a common pattern for headers that need to guide users towards key interactions."}}}},n={render:e=>({components:{Header:i,HeaderBrand:d,HeaderNav:o,HeaderNavItem:s,HeaderActions:I,Button:r},setup(){return{args:e,Logo:m}},template:`
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost" size="sm" label="Sign in"/>
          <Button variant="primary" size="sm" label="Get started"/>
        </HeaderActions>
        <div slot="mobile-menu">
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
          <Button variant="ghost" size="sm" label="Sign in" style="margin-top: 1rem;"/>
          <Button variant="primary" size="sm" label="Get started" style="margin-top: 0.5rem;"/>
        </div>
      </Header>
    `}),parameters:{docs:{description:{story:"This story demonstrates the `#mobile-menu` slot, which is intended for responsive designs. The content within this slot (typically navigation and action items) would be shown on smaller screens when a mobile menu is toggled. This example includes all items from the desktop navigation and actions for completeness."}}}};var H,c,l;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Header,
      HeaderBrand,
      HeaderNav,
      HeaderNavItem,
      Button
    },
    setup() {
      return {
        args,
        Logo
      };
    },
    template: \`
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
      </Header>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story displays a basic \`Header\` with a brand logo in the \`#brand\` slot and primary navigation links in the \`#navigation\` slot. It showcases the fundamental structure of the header.'
      }
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var v,g,p;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Header,
      HeaderBrand,
      HeaderNav,
      HeaderNavItem,
      HeaderActions,
      Button
    },
    setup() {
      return {
        args,
        Logo
      };
    },
    template: \`
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost" size="sm" label="Sign in"/>
          <Button variant="primary" size="sm" label="Get started"/>
        </HeaderActions>
      </Header>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story extends the basic \`Header\` by including call-to-action buttons (e.g., Sign In, Get Started) in the \`#actions\` slot. This is a common pattern for headers that need to guide users towards key interactions.'
      }
    }
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,N,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Header,
      HeaderBrand,
      HeaderNav,
      HeaderNavItem,
      HeaderActions,
      Button
    },
    setup() {
      return {
        args,
        Logo
      };
    },
    template: \`
      <Header v-bind="args">
        <HeaderBrand>
          <img :src="Logo" alt="Logo" style="height: 32px;" />
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost" size="sm" label="Sign in"/>
          <Button variant="primary" size="sm" label="Get started"/>
        </HeaderActions>
        <div slot="mobile-menu">
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Features</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
          <HeaderNavItem>About</HeaderNavItem>
          <Button variant="ghost" size="sm" label="Sign in" style="margin-top: 1rem;"/>
          <Button variant="primary" size="sm" label="Get started" style="margin-top: 0.5rem;"/>
        </div>
      </Header>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`#mobile-menu\` slot, which is intended for responsive designs. The content within this slot (typically navigation and action items) would be shown on smaller screens when a mobile menu is toggled. This example includes all items from the desktop navigation and actions for completeness.'
      }
    }
  }
}`,...(h=(N=n.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};const f=["Basic","WithActions","WithMobileMenu"];export{a as Basic,t as WithActions,n as WithMobileMenu,f as __namedExportsOrder,B as default};
