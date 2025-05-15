import{M as r}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const B={title:"Components/Badge",component:r,parameters:{layout:"centered",docs:{description:{component:"The `Badge` component is used to display small pieces of information, such as counts, statuses, or categories. It supports different visual variants (e.g., primary, secondary, success) and sizes (e.g., sm, md, lg) to suit various contexts."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error"],defaultValue:"primary"},size:{control:"select",options:["sm","md","lg"],defaultValue:"md"}}},e={render:a=>({components:{Badge:r},setup(){return{args:a}},template:`
      <Badge v-bind="args" class="basic-badge">
        Badge
      </Badge>
    `}),parameters:{docs:{description:{story:"This is the basic usage of the `Badge` component. It displays a badge with default primary variant and medium size. You can change its `variant`, `size`, and content using the controls and slot. The `class` attribute allows adding custom CSS classes."}}}},s={render:a=>({components:{Badge:r},setup(){return{args:a}},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <Badge v-bind="args" variant="primary" class="primary-badge">Primary</Badge>
        <Badge v-bind="args" variant="secondary" class="secondary-badge">Secondary</Badge>
        <Badge v-bind="args" variant="success" class="success-badge">Success</Badge>
        <Badge v-bind="args" variant="warning" class="warning-badge">Warning</Badge>
        <Badge v-bind="args" variant="error" class="error-badge">Error</Badge>
      </div>
    `}),parameters:{docs:{description:{story:"This story showcases the different visual variants available for the `Badge` component: `primary`, `secondary`, `success`, `warning`, and `error`. Each variant has a distinct color scheme to convey different semantic meanings. Custom CSS classes are applied to each badge for additional styling."}}}},n={render:a=>({components:{Badge:r},setup(){return{args:a}},template:`
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <Badge v-bind="args" size="sm" class="badge-sm">Small</Badge>
        <Badge v-bind="args" size="md" class="badge-md">Medium</Badge>
        <Badge v-bind="args" size="lg" class="badge-lg">Large</Badge>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates the different sizes available for the `Badge` component: `sm` (small), `md` (medium), and `lg` (large). Each size has a custom CSS class for additional styling."}}}};var t,d,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args" class="basic-badge">
        Badge
      </Badge>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This is the basic usage of the \`Badge\` component. It displays a badge with default primary variant and medium size. You can change its \`variant\`, \`size\`, and content using the controls and slot. The \`class\` attribute allows adding custom CSS classes.'
      }
    }
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var o,c,g;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <Badge v-bind="args" variant="primary" class="primary-badge">Primary</Badge>
        <Badge v-bind="args" variant="secondary" class="secondary-badge">Secondary</Badge>
        <Badge v-bind="args" variant="success" class="success-badge">Success</Badge>
        <Badge v-bind="args" variant="warning" class="warning-badge">Warning</Badge>
        <Badge v-bind="args" variant="error" class="error-badge">Error</Badge>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the different visual variants available for the \`Badge\` component: \`primary\`, \`secondary\`, \`success\`, \`warning\`, and \`error\`. Each variant has a distinct color scheme to convey different semantic meanings. Custom CSS classes are applied to each badge for additional styling.'
      }
    }
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <Badge v-bind="args" size="sm" class="badge-sm">Small</Badge>
        <Badge v-bind="args" size="md" class="badge-md">Medium</Badge>
        <Badge v-bind="args" size="lg" class="badge-lg">Large</Badge>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the different sizes available for the \`Badge\` component: \`sm\` (small), \`md\` (medium), and \`lg\` (large). Each size has a custom CSS class for additional styling.'
      }
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const y=["Basic","Variants","Sizes"];export{e as Basic,n as Sizes,s as Variants,y as __namedExportsOrder,B as default};
