import{I as n}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const I={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"The `Button` component is a fundamental interactive element used to trigger actions. It supports various visual styles (`variant`), sizes (`size`), can include icons, and can be set to `disabled` or `loading` states. It is designed to be versatile for different UI needs."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","accent","success","error","warning","info"],defaultValue:"primary"},size:{control:"select",options:["xs","sm","md","lg","xl","xxl","3xl","4xl"],defaultValue:"md"},disabled:{control:"boolean",defaultValue:!1},className:{control:"text",description:"Additional CSS class names"}}},e={args:{className:"basic-button",label:"Button"},render:t=>({components:{Button:n},setup(){return{args:t}},template:`
      <Button v-bind="args"/>
    `}),parameters:{docs:{description:{story:"This is the basic usage of the `Button` component. It displays a button with default primary variant and medium size. You can change its `variant`, `size`, and `disabled` state using the controls. The content of the button is passed via the default slot. The `className` prop allows adding custom CSS classes."}}}},s={render:t=>({components:{Button:n},setup(){return{args:t}},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <Button v-bind="args" variant="primary" size="sm" label="Primary" className="primary-button"/>
        <Button v-bind="args" variant="secondary" size="sm" label="Secondary" className="secondary-button"/>
        <Button v-bind="args" variant="accent" size="sm" label="Accent" className="accent-button"/>
        <Button v-bind="args" variant="outline" size="sm" label="Outline" className="outline-button"/>
        <Button v-bind="args" variant="ghost" size="sm" label="Ghost" className="ghost-button"/>
      </div>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
        <Button v-bind="args" variant="success" size="sm" label="Success" className="success-button"/>
        <Button v-bind="args" variant="error" size="sm" label="Error" className="error-button"/>
        <Button v-bind="args" variant="warning" size="sm" label="Warning" className="warning-button"/>
        <Button v-bind="args" variant="info" size="sm" label="Info" className="info-button"/>
      </div>
    `}),parameters:{docs:{description:{story:"This story showcases the different visual variants available for the `Button` component: `primary`, `secondary`, `accent`, `outline`, `ghost`, `success`, `error`, `warning`, and `info`. Each variant provides a distinct appearance to suit different interaction contexts. Custom class names are applied to each button for additional styling."}}}},a={render:t=>({components:{Button:n},setup(){return{args:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <Button v-bind="args" size="xs" label="Extra Small" className="button-xs"/>
          <Button v-bind="args" size="sm" label="Small" className="button-sm"/>
          <Button v-bind="args" size="md" label="Medium" className="button-md"/>
          <Button v-bind="args" size="lg" label="Large" className="button-lg"/>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <Button v-bind="args" size="xl" label="Extra Large" className="button-xl"/>
          <Button v-bind="args" size="xxl" label="XXL" className="button-xxl"/>
          <Button v-bind="args" size="3xl" label="3XL" className="button-3xl"/>
          <Button v-bind="args" size="4xl" label="4XL" className="button-4xl"/>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates the different sizes available for the `Button` component: `xs` (extra small), `sm` (small), `md` (medium), `lg` (large), `xl` (extra large), `xxl`, `3xl`, and `4xl`. The size prop affects the padding, height, and font size of the button. Each size has a custom class name for additional styling."}}}},o={render:t=>({components:{Button:n},setup(){return{args:t}},template:`
      <div style="display: flex; gap: 0.5rem; flex-direction: column;">
        <div>
          <Button v-bind="args" label="Button with Left Icon" icon-position="left" className="left-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
        <div>
          <Button v-bind="args" label="Button with Right Icon" icon-position="right" className="right-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:'This story shows how to include an icon within a `Button`. Icons can be placed before (default) or after the button text by using the `icon-position` prop set to either "left" or "right". To add an icon, use an SVG element with the `slot="icon"` attribute, and place the button text in the default slot. Custom class names are applied to each button for additional styling.'}}}},i={render:t=>({components:{Button:n},setup(){return{loadingArgs:{...t,loading:!0,className:"loading-button"}}},template:`
      <Button v-bind="loadingArgs" label="Loading"/>
    `}),parameters:{docs:{description:{story:"This story demonstrates the `loading` state of the `Button`. When `loading` is true, the button typically shows a spinner and may be disabled to prevent further clicks until the loading process completes. A custom class name is applied for additional styling."}}}},r={render:t=>({components:{Button:n},setup(){return{disabledArgs:{...t,disabled:!0,className:"disabled-button"}}},template:`
      <Button v-bind="disabledArgs" label="Disabled"/>
    `}),parameters:{docs:{description:{story:"This story shows a `Button` in its `disabled` state. A disabled button is not interactive and is typically styled to indicate that it cannot be clicked. A custom class name is applied for additional styling."},source:{code:`
          <Button v-bind="disabledArgs" label="Disabled" className="disabled-button"/>
        `}}}};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    className: 'basic-button',
    label: 'Button'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args"/>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This is the basic usage of the \`Button\` component. It displays a button with default primary variant and medium size. You can change its \`variant\`, \`size\`, and \`disabled\` state using the controls. The content of the button is passed via the default slot. The \`className\` prop allows adding custom CSS classes.'
      }
    }
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <Button v-bind="args" variant="primary" size="sm" label="Primary" className="primary-button"/>
        <Button v-bind="args" variant="secondary" size="sm" label="Secondary" className="secondary-button"/>
        <Button v-bind="args" variant="accent" size="sm" label="Accent" className="accent-button"/>
        <Button v-bind="args" variant="outline" size="sm" label="Outline" className="outline-button"/>
        <Button v-bind="args" variant="ghost" size="sm" label="Ghost" className="ghost-button"/>
      </div>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
        <Button v-bind="args" variant="success" size="sm" label="Success" className="success-button"/>
        <Button v-bind="args" variant="error" size="sm" label="Error" className="error-button"/>
        <Button v-bind="args" variant="warning" size="sm" label="Warning" className="warning-button"/>
        <Button v-bind="args" variant="info" size="sm" label="Info" className="info-button"/>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the different visual variants available for the \`Button\` component: \`primary\`, \`secondary\`, \`accent\`, \`outline\`, \`ghost\`, \`success\`, \`error\`, \`warning\`, and \`info\`. Each variant provides a distinct appearance to suit different interaction contexts. Custom class names are applied to each button for additional styling.'
      }
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <Button v-bind="args" size="xs" label="Extra Small" className="button-xs"/>
          <Button v-bind="args" size="sm" label="Small" className="button-sm"/>
          <Button v-bind="args" size="md" label="Medium" className="button-md"/>
          <Button v-bind="args" size="lg" label="Large" className="button-lg"/>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <Button v-bind="args" size="xl" label="Extra Large" className="button-xl"/>
          <Button v-bind="args" size="xxl" label="XXL" className="button-xxl"/>
          <Button v-bind="args" size="3xl" label="3XL" className="button-3xl"/>
          <Button v-bind="args" size="4xl" label="4XL" className="button-4xl"/>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the different sizes available for the \`Button\` component: \`xs\` (extra small), \`sm\` (small), \`md\` (medium), \`lg\` (large), \`xl\` (extra large), \`xxl\`, \`3xl\`, and \`4xl\`. The size prop affects the padding, height, and font size of the button. Each size has a custom class name for additional styling.'
      }
    }
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-direction: column;">
        <div>
          <Button v-bind="args" label="Button with Left Icon" icon-position="left" className="left-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
        <div>
          <Button v-bind="args" label="Button with Right Icon" icon-position="right" className="right-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" slot="icon">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows how to include an icon within a \`Button\`. Icons can be placed before (default) or after the button text by using the \`icon-position\` prop set to either "left" or "right". To add an icon, use an SVG element with the \`slot="icon"\` attribute, and place the button text in the default slot. Custom class names are applied to each button for additional styling.'
      }
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,x,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      const loadingArgs = {
        ...args,
        loading: true,
        className: 'loading-button'
      };
      return {
        loadingArgs
      };
    },
    template: \`
      <Button v-bind="loadingArgs" label="Loading"/>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`loading\` state of the \`Button\`. When \`loading\` is true, the button typically shows a spinner and may be disabled to prevent further clicks until the loading process completes. A custom class name is applied for additional styling.'
      }
    }
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,N,S;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      const disabledArgs = {
        ...args,
        disabled: true,
        className: 'disabled-button'
      };
      return {
        disabledArgs
      };
    },
    template: \`
      <Button v-bind="disabledArgs" label="Disabled"/>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows a \`Button\` in its \`disabled\` state. A disabled button is not interactive and is typically styled to indicate that it cannot be clicked. A custom class name is applied for additional styling.'
      },
      source: {
        code: \`
          <Button v-bind="disabledArgs" label="Disabled" className="disabled-button"/>
        \`
      }
    }
  }
}`,...(S=(N=r.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const L=["Basic","Variants","Sizes","WithIcon","Loading","Disabled"];export{e as Basic,r as Disabled,i as Loading,a as Sizes,s as Variants,o as WithIcon,L as __namedExportsOrder,I as default};
