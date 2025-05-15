import{P as n}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const v={title:"Components/Spinner",component:n,parameters:{docs:{description:{component:"The `Spinner` component is used to indicate a loading or processing state. It provides visual feedback that an action is ongoing. It supports different sizes (`sm`, `md`, `lg`, `xl`), custom colors, and an accessible label for screen readers."}},layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Size of the spinner"},color:{control:"color",description:"Color of the spinner (e.g., CSS color name or hex code)"},label:{control:"text",description:"Accessible label for the spinner"}}},r={args:{size:"md",label:"Loading..."},render:e=>({components:{Spinner:n},setup(){return{args:e}},template:`
      <Spinner v-bind="args" />
    `}),parameters:{docs:{description:{story:"This story shows the basic `Spinner` component. It uses the default medium size and includes an accessible label. You can adjust props like `size`, `color`, and `label` using the Storybook controls."}}}},s={render:e=>({components:{Spinner:n},setup(){return{args:e}},template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Spinner size="sm" label="Loading small" />
        <Spinner size="md" label="Loading medium" />
        <Spinner size="lg" label="Loading large" />
        <Spinner size="xl" label="Loading extra large" />
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates the different `size` options available for the `Spinner` component: `sm`, `md`, `lg`, and `xl`. Each spinner is also given a unique accessible label."}}}},o={name:"With Different Colors",render:e=>({components:{Spinner:n},setup(){return{args:e}},template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Spinner color="blue" label="Loading blue" />
        <Spinner color="#4CAF50" label="Loading green" />
        <Spinner color="var(--craftily-color-warning-500, orange)" label="Loading warning (CSS var or orange)" />
        <Spinner color="rgb(255, 0, 0)" label="Loading red" />
        <Spinner :color="args.color || 'purple'" label="Loading (from control or purple)" />
      </div>
    `}),parameters:{docs:{description:{story:"This story shows how the `Spinner` component can be styled with different `color` values. Colors can be specified as CSS color names, hex codes, RGB values, or CSS variables. The last spinner in this example can have its color adjusted via the Storybook controls."}}}},a={name:"With Custom Label",args:{label:"Processing data...",size:"md"},render:e=>({components:{Spinner:n},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
        <Spinner :label="args.label" :size="args.size" />
        <Spinner label="Please wait" size="sm" color="grey" />
      </div>
    `}),parameters:{docs:{description:{story:"This story highlights the use of the `label` prop to provide custom accessible text for the `Spinner`. The first spinner uses a label from Storybook controls, while the second one has a hardcoded label. Providing a descriptive label is important for accessibility."}}}};var i,t,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading...'
  },
  render: args => ({
    components: {
      Spinner
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Spinner v-bind="args" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows the basic \`Spinner\` component. It uses the default medium size and includes an accessible label. You can adjust props like \`size\`, \`color\`, and \`label\` using the Storybook controls.'
      }
    }
  }
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Spinner
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Spinner size="sm" label="Loading small" />
        <Spinner size="md" label="Loading medium" />
        <Spinner size="lg" label="Loading large" />
        <Spinner size="xl" label="Loading extra large" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the different \`size\` options available for the \`Spinner\` component: \`sm\`, \`md\`, \`lg\`, and \`xl\`. Each spinner is also given a unique accessible label.'
      }
    }
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'With Different Colors',
  render: args => ({
    components: {
      Spinner
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Spinner color="blue" label="Loading blue" />
        <Spinner color="#4CAF50" label="Loading green" />
        <Spinner color="var(--craftily-color-warning-500, orange)" label="Loading warning (CSS var or orange)" />
        <Spinner color="rgb(255, 0, 0)" label="Loading red" />
        <Spinner :color="args.color || 'purple'" label="Loading (from control or purple)" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows how the \`Spinner\` component can be styled with different \`color\` values. Colors can be specified as CSS color names, hex codes, RGB values, or CSS variables. The last spinner in this example can have its color adjusted via the Storybook controls.'
      }
    }
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,h,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With Custom Label',
  args: {
    label: 'Processing data...',
    size: 'md'
  },
  render: args => ({
    components: {
      Spinner
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
        <Spinner :label="args.label" :size="args.size" />
        <Spinner label="Please wait" size="sm" color="grey" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story highlights the use of the \`label\` prop to provide custom accessible text for the \`Spinner\`. The first spinner uses a label from Storybook controls, while the second one has a hardcoded label. Providing a descriptive label is important for accessibility.'
      }
    }
  }
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const z=["Basic","Sizes","Colors","WithCustomLabel"];export{r as Basic,o as Colors,s as Sizes,a as WithCustomLabel,z as __namedExportsOrder,v as default};
