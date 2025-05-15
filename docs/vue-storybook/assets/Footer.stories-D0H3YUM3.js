import{Q as i,t as g,e as f,r as v}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const G={title:"Components/Footer",parameters:{layout:"fullscreen",docs:{description:{component:"The `Footer` component is designed for the bottom section of a webpage. It typically contains copyright information, navigation links (`FooterNavGroup`, `FooterLink`), and social media links (`FooterSocialLink`). The component uses slots (`#copyright`, `#navigation`, `#social`) to allow flexible content placement."}}},tags:["autodocs"]},e={render:o=>({components:{Footer:i},setup(){return{args:o}},template:`
      <Footer v-bind="args">
        <template #copyright>
          © 2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    `}),parameters:{docs:{description:{story:"This story demonstrates the basic usage of the `Footer` component with only the copyright information provided through the `#copyright` slot. This is the simplest form of the footer."},source:{code:`
<Footer>
  <template #copyright>
    © 2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        `}}}},t={render:o=>({components:{Footer:i,FooterNavGroup:f,FooterLink:g},setup(){return{args:o}},template:`
      <Footer v-bind="args">
        <template #navigation>
          <FooterNavGroup title="Product">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
          </FooterNavGroup>
          <FooterNavGroup title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </FooterNavGroup>
        </template>
        <template #copyright>
          © 2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    `}),parameters:{docs:{description:{story:"This story shows how to add navigation links to the `Footer` using the `#navigation` slot. `FooterNavGroup` is used to group links under a title, and `FooterLink` creates individual navigation items. Copyright information is also included."},source:{code:`
<Footer>
  <template #navigation>
    <FooterNavGroup title="Product">
      <FooterLink href="#">Features</FooterLink>
      <FooterLink href="#">Pricing</FooterLink>
      <FooterLink href="#">Documentation</FooterLink>
    </FooterNavGroup>
    <FooterNavGroup title="Company">
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Blog</FooterLink>
      <FooterLink href="#">Careers</FooterLink>
    </FooterNavGroup>
  </template>
  <template #copyright>
    © 2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        `}}}},r={render:o=>({components:{Footer:i,FooterSocialLink:v},setup(){return{args:o}},template:`
      <Footer v-bind="args">
        <template #social>
          <FooterSocialLink href="#" icon="github">GitHub</FooterSocialLink>
          <FooterSocialLink href="#" icon="twitter">Twitter</FooterSocialLink>
          <FooterSocialLink href="#" icon="linkedin">LinkedIn</FooterSocialLink>
        </template>
        <template #copyright>
          2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    `}),parameters:{docs:{description:{story:"This story demonstrates including social media links in the `Footer` via the `#social` slot. The `FooterSocialLink` component is used for each link, which can include an `icon` prop for common social media platforms. Copyright is also present."},source:{code:`
<Footer>
  <template #social>
    <FooterSocialLink href="#" icon="github">GitHub</FooterSocialLink>
    <FooterSocialLink href="#" icon="twitter">Twitter</FooterSocialLink>
    <FooterSocialLink href="#" icon="linkedin">LinkedIn</FooterSocialLink>
    <FooterSocialLink href="#" icon="linkedin" label="LinkedIn" />
  </template>
  <template #copyright>
    © 2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        `}}}},n={render:o=>({components:{Footer:i,FooterNavGroup:f,FooterLink:g,FooterSocialLink:v},setup(){return{args:o}},template:`
      <Footer v-bind="args">
        <template #brand>
          <img src="/logo.svg" alt="Logo" style="height: 32px;" />
          <p style="margin-top: 1rem;">
            Making the web beautiful, one component at a time
          </p>
        </template>
        <template #navigation>
          <FooterNavGroup title="Product">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
          </FooterNavGroup>
          <FooterNavGroup title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </FooterNavGroup>
          <FooterNavGroup title="Resources">
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
          </FooterNavGroup>
        </template>
        <template #social>
          <FooterSocialLink href="#" icon="twitter" label="Twitter" />
          <FooterSocialLink href="#" icon="github" label="GitHub" />
          <FooterSocialLink href="#" icon="linkedin" label="LinkedIn" />
        </template>
        <template #copyright>
          2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    `}),parameters:{docs:{description:{story:"This story showcases a `Footer` with all available slots utilized: `#brand` for a logo and tagline, `#navigation` for multiple link groups, `#social` for social media icons, and `#copyright` for the copyright notice. This represents a common, comprehensive footer layout."},source:{code:`
<Footer>
  <template #brand>
    <img src="/logo.svg" alt="Logo" style="height: 32px;" />
    <p style="margin-top: 1rem;">
      Making the web beautiful, one component at a time
    </p>
  </template>
  <template #navigation>
    <FooterNavGroup title="Product">
      <FooterLink href="#">Features</FooterLink>
      <FooterLink href="#">Pricing</FooterLink>
      <FooterLink href="#">Documentation</FooterLink>
    </FooterNavGroup>
    <FooterNavGroup title="Company">
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Blog</FooterLink>
      <FooterLink href="#">Careers</FooterLink>
    </FooterNavGroup>
    <FooterNavGroup title="Resources">
      <FooterLink href="#">Support</FooterLink>
      <FooterLink href="#">Terms</FooterLink>
      <FooterLink href="#">Privacy</FooterLink>
    </FooterNavGroup>
  </template>
  <template #social>
    <FooterSocialLink href="#" icon="twitter" label="Twitter" />
    <FooterSocialLink href="#" icon="github" label="GitHub" />
    <FooterSocialLink href="#" icon="linkedin" label="LinkedIn" />
  </template>
  <template #copyright>
    2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        `}}}};var a,l,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Footer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Footer v-bind="args">
        <template #copyright>
          © 2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the basic usage of the \`Footer\` component with only the copyright information provided through the \`#copyright\` slot. This is the simplest form of the footer.'
      },
      source: {
        code: \`
<Footer>
  <template #copyright>
    © 2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        \`
      }
    }
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var F,p,c;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Footer,
      FooterNavGroup,
      FooterLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Footer v-bind="args">
        <template #navigation>
          <FooterNavGroup title="Product">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
          </FooterNavGroup>
          <FooterNavGroup title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </FooterNavGroup>
        </template>
        <template #copyright>
          © 2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows how to add navigation links to the \`Footer\` using the \`#navigation\` slot. \`FooterNavGroup\` is used to group links under a title, and \`FooterLink\` creates individual navigation items. Copyright information is also included.'
      },
      source: {
        code: \`
<Footer>
  <template #navigation>
    <FooterNavGroup title="Product">
      <FooterLink href="#">Features</FooterLink>
      <FooterLink href="#">Pricing</FooterLink>
      <FooterLink href="#">Documentation</FooterLink>
    </FooterNavGroup>
    <FooterNavGroup title="Company">
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Blog</FooterLink>
      <FooterLink href="#">Careers</FooterLink>
    </FooterNavGroup>
  </template>
  <template #copyright>
    © 2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        \`
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,k,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Footer,
      FooterSocialLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Footer v-bind="args">
        <template #social>
          <FooterSocialLink href="#" icon="github">GitHub</FooterSocialLink>
          <FooterSocialLink href="#" icon="twitter">Twitter</FooterSocialLink>
          <FooterSocialLink href="#" icon="linkedin">LinkedIn</FooterSocialLink>
        </template>
        <template #copyright>
          2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates including social media links in the \`Footer\` via the \`#social\` slot. The \`FooterSocialLink\` component is used for each link, which can include an \`icon\` prop for common social media platforms. Copyright is also present.'
      },
      source: {
        code: \`
<Footer>
  <template #social>
    <FooterSocialLink href="#" icon="github">GitHub</FooterSocialLink>
    <FooterSocialLink href="#" icon="twitter">Twitter</FooterSocialLink>
    <FooterSocialLink href="#" icon="linkedin">LinkedIn</FooterSocialLink>
    <FooterSocialLink href="#" icon="linkedin" label="LinkedIn" />
  </template>
  <template #copyright>
    © 2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        \`
      }
    }
  }
}`,...(m=(k=r.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var u,L,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Footer,
      FooterNavGroup,
      FooterLink,
      FooterSocialLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Footer v-bind="args">
        <template #brand>
          <img src="/logo.svg" alt="Logo" style="height: 32px;" />
          <p style="margin-top: 1rem;">
            Making the web beautiful, one component at a time
          </p>
        </template>
        <template #navigation>
          <FooterNavGroup title="Product">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
          </FooterNavGroup>
          <FooterNavGroup title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </FooterNavGroup>
          <FooterNavGroup title="Resources">
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
          </FooterNavGroup>
        </template>
        <template #social>
          <FooterSocialLink href="#" icon="twitter" label="Twitter" />
          <FooterSocialLink href="#" icon="github" label="GitHub" />
          <FooterSocialLink href="#" icon="linkedin" label="LinkedIn" />
        </template>
        <template #copyright>
          2025 Craftily UI. All rights reserved.
        </template>
      </Footer>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases a \`Footer\` with all available slots utilized: \`#brand\` for a logo and tagline, \`#navigation\` for multiple link groups, \`#social\` for social media icons, and \`#copyright\` for the copyright notice. This represents a common, comprehensive footer layout.'
      },
      source: {
        code: \`
<Footer>
  <template #brand>
    <img src="/logo.svg" alt="Logo" style="height: 32px;" />
    <p style="margin-top: 1rem;">
      Making the web beautiful, one component at a time
    </p>
  </template>
  <template #navigation>
    <FooterNavGroup title="Product">
      <FooterLink href="#">Features</FooterLink>
      <FooterLink href="#">Pricing</FooterLink>
      <FooterLink href="#">Documentation</FooterLink>
    </FooterNavGroup>
    <FooterNavGroup title="Company">
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Blog</FooterLink>
      <FooterLink href="#">Careers</FooterLink>
    </FooterNavGroup>
    <FooterNavGroup title="Resources">
      <FooterLink href="#">Support</FooterLink>
      <FooterLink href="#">Terms</FooterLink>
      <FooterLink href="#">Privacy</FooterLink>
    </FooterNavGroup>
  </template>
  <template #social>
    <FooterSocialLink href="#" icon="twitter" label="Twitter" />
    <FooterSocialLink href="#" icon="github" label="GitHub" />
    <FooterSocialLink href="#" icon="linkedin" label="LinkedIn" />
  </template>
  <template #copyright>
    2025 Craftily UI. All rights reserved.
  </template>
</Footer>
        \`
      }
    }
  }
}`,...(d=(L=n.parameters)==null?void 0:L.docs)==null?void 0:d.source}}};const S=["Basic","WithNavigation","WithSocial","FullFeatured"];export{e as Basic,n as FullFeatured,t as WithNavigation,r as WithSocial,S as __namedExportsOrder,G as default};
