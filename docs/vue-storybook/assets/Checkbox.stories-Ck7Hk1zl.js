import{q as s}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const f={title:"Components/Checkbox",component:s,parameters:{layout:"centered",docs:{description:{component:"The `Checkbox` component allows users to select one or more options from a set. It can be used individually or in groups. Key features include different sizes, disabled state, and checked state. The label for the checkbox is provided as its default slot content."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],defaultValue:"md"},disabled:{control:"boolean",defaultValue:!1},checked:{control:"boolean",defaultValue:!1}}},a={render:e=>({components:{Checkbox:s},setup(){return{args:e}},template:`
      <Checkbox v-bind="args" class="basic-checkbox">
        Basic checkbox
      </Checkbox>
    `}),parameters:{docs:{description:{story:'This story demonstrates the basic usage of the `Checkbox` component. It shows a single checkbox with a label provided via the default slot. The `v-bind="args"` allows for interactive control through Storybook Controls addon. The `class` attribute allows adding custom CSS classes.'}}}},o={render:e=>({components:{Checkbox:s},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" size="sm" class="checkbox-sm">
          Small checkbox
        </Checkbox>
        <Checkbox v-bind="args" size="md" class="checkbox-md">
          Medium checkbox
        </Checkbox>
        <Checkbox v-bind="args" size="lg" class="checkbox-lg">
          Large checkbox
        </Checkbox>
      </div>
    `}),parameters:{docs:{description:{story:"This story showcases the different `size` options available for the `Checkbox` component: `sm` (small), `md` (medium), and `lg` (large). The size affects the visual scale of the checkbox and its label. Each size has a custom CSS class for additional styling."}}}},c={render:e=>({components:{Checkbox:s},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" class="default-checkbox">
          Default checkbox
        </Checkbox>
        <Checkbox v-bind="args" checked class="checked-checkbox">
          Checked checkbox
        </Checkbox>
        <Checkbox v-bind="args" disabled class="disabled-checkbox">
          Disabled checkbox
        </Checkbox>
        <Checkbox v-bind="args" checked disabled class="checked-disabled-checkbox">
          Checked and disabled
        </Checkbox>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates the various states of the `Checkbox` component: default (unchecked), `checked`, `disabled`, and `checked` + `disabled`. These states provide visual feedback about the interactivity and selection status of the checkbox. Custom CSS classes are applied to each checkbox for additional styling."}}}},n={render:e=>({components:{Checkbox:s},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" name="fruits" value="apple" class="apple-checkbox">
          Apple
        </Checkbox>
        <Checkbox v-bind="args" name="fruits" value="banana" class="banana-checkbox">
          Banana
        </Checkbox>
        <Checkbox v-bind="args" name="fruits" value="orange" class="orange-checkbox">
          Orange
        </Checkbox>
      </div>
    `}),parameters:{docs:{description:{story:"This story shows how multiple `Checkbox` components can be grouped together by assigning them the same `name` attribute. This is a common pattern for allowing multiple selections within a related set of options. Each checkbox still maintains its individual `value`. Custom CSS classes are applied to each checkbox for additional styling."}}}};var t,r,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Checkbox v-bind="args" class="basic-checkbox">
        Basic checkbox
      </Checkbox>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the basic usage of the \`Checkbox\` component. It shows a single checkbox with a label provided via the default slot. The \`v-bind="args"\` allows for interactive control through Storybook Controls addon. The \`class\` attribute allows adding custom CSS classes.'
      }
    }
  }
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,d,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" size="sm" class="checkbox-sm">
          Small checkbox
        </Checkbox>
        <Checkbox v-bind="args" size="md" class="checkbox-md">
          Medium checkbox
        </Checkbox>
        <Checkbox v-bind="args" size="lg" class="checkbox-lg">
          Large checkbox
        </Checkbox>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the different \`size\` options available for the \`Checkbox\` component: \`sm\` (small), \`md\` (medium), and \`lg\` (large). The size affects the visual scale of the checkbox and its label. Each size has a custom CSS class for additional styling.'
      }
    }
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,k,m;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" class="default-checkbox">
          Default checkbox
        </Checkbox>
        <Checkbox v-bind="args" checked class="checked-checkbox">
          Checked checkbox
        </Checkbox>
        <Checkbox v-bind="args" disabled class="disabled-checkbox">
          Disabled checkbox
        </Checkbox>
        <Checkbox v-bind="args" checked disabled class="checked-disabled-checkbox">
          Checked and disabled
        </Checkbox>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the various states of the \`Checkbox\` component: default (unchecked), \`checked\`, \`disabled\`, and \`checked\` + \`disabled\`. These states provide visual feedback about the interactivity and selection status of the checkbox. Custom CSS classes are applied to each checkbox for additional styling.'
      }
    }
  }
}`,...(m=(k=c.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var p,x,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" name="fruits" value="apple" class="apple-checkbox">
          Apple
        </Checkbox>
        <Checkbox v-bind="args" name="fruits" value="banana" class="banana-checkbox">
          Banana
        </Checkbox>
        <Checkbox v-bind="args" name="fruits" value="orange" class="orange-checkbox">
          Orange
        </Checkbox>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows how multiple \`Checkbox\` components can be grouped together by assigning them the same \`name\` attribute. This is a common pattern for allowing multiple selections within a related set of options. Each checkbox still maintains its individual \`value\`. Custom CSS classes are applied to each checkbox for additional styling.'
      }
    }
  }
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const v=["Basic","Sizes","States","Group"];export{a as Basic,n as Group,o as Sizes,c as States,v as __namedExportsOrder,f as default};
