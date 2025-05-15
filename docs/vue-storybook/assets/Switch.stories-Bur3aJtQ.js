import{r as s}from"./vue.esm-bundler-B6fWMb2G.js";import{B as l}from"./index.es-DjIhR-52.js";const D={title:"Components/Switch",component:l,parameters:{layout:"centered",docs:{description:{component:"The `Switch` component is a toggle control that allows users to turn a setting on or off. It is typically used for binary choices. The component supports `v-model` for its checked state, a `disabled` state, and can be associated with a label. Sizes (`sm`, `md`, `lg`) can be applied via HTML attributes, styled through global CSS or a theme."}}},tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"Use v-model to bind the checked state"},disabled:{control:"boolean"},name:{control:"text"}}},r={render:e=>({components:{Switch:l},setup(){const t=s(e.modelValue||!1);return{args:e,isChecked:t}},template:`
      <label style="display: flex; align-items: center; gap: 0.5rem;">
        <Switch v-bind="args" v-model="isChecked" />
        Toggle me (State: {{ isChecked }})
      </label>
    `}),args:{modelValue:!1,disabled:!1,name:"basic-switch"},parameters:{docs:{description:{story:"This story shows the basic `Switch` component. It is bound to an `isChecked` ref using `v-model` and associated with a label that also displays its current boolean state. Props like `disabled` and `name` can be passed through `args`."}}}},c={render:e=>({components:{Switch:l},setup(){const t=s(!1),a=s(!0),n=s(!1),i={...e,size:"sm",name:"small-switch"},m={...e,size:"md",name:"medium-switch"},h={...e,size:"lg",name:"large-switch"};return{smallArgs:i,mediumArgs:m,largeArgs:h,smallChecked:t,mediumChecked:a,largeChecked:n}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="smallArgs" v-model="smallChecked" />
          Small switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="mediumArgs" v-model="mediumChecked" />
          Medium switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="largeArgs" v-model="largeChecked" />
          Large switch
        </label>
      </div>
    `}),parameters:{docs:{description:{story:'This story demonstrates different sizes for the `Switch` component by applying `size="sm"`, `size="md"`, and `size="lg"` as HTML attributes. These sizes are typically defined by global CSS or a theming system to control the visual scale of the switch.'}}}},d={render:e=>({components:{Switch:l},setup(){const t=s(!1),a=s(!0),n=s(!1),i=s(!0),m={...e,name:"default-switch"},h={...e,name:"checked-switch"},C={...e,disabled:!0,name:"disabled-switch"},V={...e,checked:!0,disabled:!0,name:"checked-disabled-switch"};return{defaultArgs:m,checkedArgs:h,disabledArgs:C,checkedDisabledArgs:V,defaultVal:t,checkedVal:a,disabledVal:n,checkedDisabledVal:i}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="defaultArgs" v-model="defaultVal" />
          Default switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="checkedArgs" v-model="checkedVal" />
          Checked switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="disabledArgs" v-model="disabledVal" />
          Disabled switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="checkedDisabledArgs" v-model="checkedDisabledVal" />
          Checked and disabled
        </label>
      </div>
    `}),parameters:{docs:{description:{story:"This story shows the `Switch` component in various states: default (unchecked), checked, disabled (unchecked), and checked & disabled. The `disabled` attribute prevents interaction, and the `checked` attribute (though typically controlled by `v-model`) can set the initial checked state for disabled switches."}}}},o={render:e=>({components:{Switch:l},setup(){const t=s(!0),a=s(!1),n={...e,name:"notifications-switch"},i={...e,name:"marketing-switch"};return{notificationsArgs:n,marketingArgs:i,notificationsEnabled:t,marketingEnabled:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer;">
          <Switch v-bind="notificationsArgs" v-model="notificationsEnabled" style="margin-top: 0.125rem;" />
          <div style="display: flex; flex-direction: column;">
            <span>Notifications</span>
            <span style="font-size: 0.875rem; color: #6b7280;">
              Receive notifications about important updates.
            </span>
          </div>
        </label>
        <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer;">
          <Switch v-bind="marketingArgs" v-model="marketingEnabled" style="margin-top: 0.125rem;" />
          <div style="display: flex; flex-direction: column;">
            <span>Marketing emails</span>
            <span style="font-size: 0.875rem; color: #6b7280;">
              Receive emails about new features and promotions.
            </span>
          </div>
        </label>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates how to use the `Switch` component with a more detailed label that includes a title and a description. This pattern is common in settings or preferences UIs where each toggle needs clear context. The entire area (switch and text) is wrapped in a `<label>` to make it clickable."}}}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Switch
    },
    setup() {
      const isChecked = ref(args.modelValue || false);
      return {
        args,
        isChecked
      };
    },
    template: \`
      <label style="display: flex; align-items: center; gap: 0.5rem;">
        <Switch v-bind="args" v-model="isChecked" />
        Toggle me (State: {{ isChecked }})
      </label>
    \`
  }),
  args: {
    modelValue: false,
    disabled: false,
    name: 'basic-switch'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story shows the basic \`Switch\` component. It is bound to an \`isChecked\` ref using \`v-model\` and associated with a label that also displays its current boolean state. Props like \`disabled\` and \`name\` can be passed through \`args\`.'
      }
    }
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,f,y;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Switch
    },
    setup() {
      const smallChecked = ref(false);
      const mediumChecked = ref(true);
      const largeChecked = ref(false);
      const smallArgs = {
        ...args,
        size: 'sm',
        name: 'small-switch'
      };
      const mediumArgs = {
        ...args,
        size: 'md',
        name: 'medium-switch'
      };
      const largeArgs = {
        ...args,
        size: 'lg',
        name: 'large-switch'
      };
      return {
        smallArgs,
        mediumArgs,
        largeArgs,
        smallChecked,
        mediumChecked,
        largeChecked
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="smallArgs" v-model="smallChecked" />
          Small switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="mediumArgs" v-model="mediumChecked" />
          Medium switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="largeArgs" v-model="largeChecked" />
          Large switch
        </label>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates different sizes for the \`Switch\` component by applying \`size="sm"\`, \`size="md"\`, and \`size="lg"\` as HTML attributes. These sizes are typically defined by global CSS or a theming system to control the visual scale of the switch.'
      }
    }
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,k,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Switch
    },
    setup() {
      const defaultVal = ref(false);
      const checkedVal = ref(true);
      const disabledVal = ref(false);
      const checkedDisabledVal = ref(true);
      const defaultArgs = {
        ...args,
        name: 'default-switch'
      };
      const checkedArgs = {
        ...args,
        name: 'checked-switch'
      };
      const disabledArgs = {
        ...args,
        disabled: true,
        name: 'disabled-switch'
      };
      const checkedDisabledArgs = {
        ...args,
        checked: true,
        disabled: true,
        name: 'checked-disabled-switch'
      };
      return {
        defaultArgs,
        checkedArgs,
        disabledArgs,
        checkedDisabledArgs,
        defaultVal,
        checkedVal,
        disabledVal,
        checkedDisabledVal
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="defaultArgs" v-model="defaultVal" />
          Default switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="checkedArgs" v-model="checkedVal" />
          Checked switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="disabledArgs" v-model="disabledVal" />
          Disabled switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="checkedDisabledArgs" v-model="checkedDisabledVal" />
          Checked and disabled
        </label>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows the \`Switch\` component in various states: default (unchecked), checked, disabled (unchecked), and checked & disabled. The \`disabled\` attribute prevents interaction, and the \`checked\` attribute (though typically controlled by \`v-model\`) can set the initial checked state for disabled switches.'
      }
    }
  }
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var S,x,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Switch
    },
    setup() {
      const notificationsEnabled = ref(true);
      const marketingEnabled = ref(false);
      const notificationsArgs = {
        ...args,
        name: 'notifications-switch'
      };
      const marketingArgs = {
        ...args,
        name: 'marketing-switch'
      };
      return {
        notificationsArgs,
        marketingArgs,
        notificationsEnabled,
        marketingEnabled
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer;">
          <Switch v-bind="notificationsArgs" v-model="notificationsEnabled" style="margin-top: 0.125rem;" />
          <div style="display: flex; flex-direction: column;">
            <span>Notifications</span>
            <span style="font-size: 0.875rem; color: #6b7280;">
              Receive notifications about important updates.
            </span>
          </div>
        </label>
        <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer;">
          <Switch v-bind="marketingArgs" v-model="marketingEnabled" style="margin-top: 0.125rem;" />
          <div style="display: flex; flex-direction: column;">
            <span>Marketing emails</span>
            <span style="font-size: 0.875rem; color: #6b7280;">
              Receive emails about new features and promotions.
            </span>
          </div>
        </label>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to use the \`Switch\` component with a more detailed label that includes a title and a description. This pattern is common in settings or preferences UIs where each toggle needs clear context. The entire area (switch and text) is wrapped in a \`<label>\` to make it clickable.'
      }
    }
  }
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const E=["Basic","Sizes","States","WithDescription"];export{r as Basic,c as Sizes,d as States,o as WithDescription,E as __namedExportsOrder,D as default};
