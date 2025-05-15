import{L as a,I as e}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const m={title:"Components/ButtonGroupVertical",parameters:{layout:"centered",docs:{description:{component:"The `ButtonGroup` component, when configured with the `vertical` prop, groups related buttons together in a vertical stack. This arrangement is useful for toolbars or action lists where vertical space is preferred. Individual buttons within the group retain their own styling options for variants and sizes."}}},tags:["autodocs"],argTypes:{vertical:{control:"boolean",defaultValue:!0}}},n={render:t=>({components:{Button:e,ButtonGroup:a},setup(){return{args:t}},template:`
      <ButtonGroup vertical v-bind="args">
        <Button v-bind="args" label="Top"></Button>
        <Button v-bind="args" label="Middle"></Button>
        <Button v-bind="args" label="Bottom"></Button>
      </ButtonGroup>
    `}),parameters:{docs:{description:{story:"This story demonstrates the basic usage of the `ButtonGroup` component with the `vertical` prop. Buttons are stacked vertically and styled to appear connected."}}}},o={render:t=>({components:{Button:e,ButtonGroup:a},setup(){return{args:t}},template:`
      <div style="display: flex; gap: 1rem;">
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="primary" label="Top"></Button>
          <Button v-bind="args" variant="primary" label="Middle"></Button>
          <Button v-bind="args" variant="primary" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="secondary" label="Top"></Button>
          <Button v-bind="args" variant="secondary" label="Middle"></Button>
          <Button v-bind="args" variant="secondary" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="outline" label="Top"></Button>
          <Button v-bind="args" variant="outline" label="Middle"></Button>
          <Button v-bind="args" variant="outline" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="ghost" label="Top"></Button>
          <Button v-bind="args" variant="ghost" label="Middle"></Button>
          <Button v-bind="args" variant="ghost" label="Bottom"></Button>
        </ButtonGroup>
      </div>
    `}),parameters:{docs:{description:{story:"This story shows how different button `variant`s look within a vertically oriented `ButtonGroup`. Each group demonstrates a different variant: primary, secondary, outline, and ghost."}}}},r={render:t=>({components:{Button:e,ButtonGroup:a},setup(){return{args:t}},template:`
      <div style="display: flex; gap: 1rem;">
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="sm" label="Top"></Button>
          <Button v-bind="args" size="sm" label="Middle"></Button>
          <Button v-bind="args" size="sm" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="md" label="Top"></Button>
          <Button v-bind="args" size="md" label="Middle"></Button>
          <Button v-bind="args" size="md" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="lg" label="Top"></Button>
          <Button v-bind="args" size="lg" label="Middle"></Button>
          <Button v-bind="args" size="lg" label="Bottom"></Button>
        </ButtonGroup>
      </div>
    `}),parameters:{docs:{description:{story:"This story illustrates how different button `size`s (sm, md, lg) are rendered within a vertical `ButtonGroup`. Each group uses buttons of a consistent size."}}}};var s,i,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup vertical v-bind="args">
        <Button v-bind="args" label="Top"></Button>
        <Button v-bind="args" label="Middle"></Button>
        <Button v-bind="args" label="Bottom"></Button>
      </ButtonGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the basic usage of the \`ButtonGroup\` component with the \`vertical\` prop. Buttons are stacked vertically and styled to appear connected.'
      }
    }
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,d,B;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 1rem;">
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="primary" label="Top"></Button>
          <Button v-bind="args" variant="primary" label="Middle"></Button>
          <Button v-bind="args" variant="primary" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="secondary" label="Top"></Button>
          <Button v-bind="args" variant="secondary" label="Middle"></Button>
          <Button v-bind="args" variant="secondary" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="outline" label="Top"></Button>
          <Button v-bind="args" variant="outline" label="Middle"></Button>
          <Button v-bind="args" variant="outline" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="ghost" label="Top"></Button>
          <Button v-bind="args" variant="ghost" label="Middle"></Button>
          <Button v-bind="args" variant="ghost" label="Bottom"></Button>
        </ButtonGroup>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story shows how different button \`variant\`s look within a vertically oriented \`ButtonGroup\`. Each group demonstrates a different variant: primary, secondary, outline, and ghost.'
      }
    }
  }
}`,...(B=(d=o.parameters)==null?void 0:d.docs)==null?void 0:B.source}}};var p,v,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 1rem;">
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="sm" label="Top"></Button>
          <Button v-bind="args" size="sm" label="Middle"></Button>
          <Button v-bind="args" size="sm" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="md" label="Top"></Button>
          <Button v-bind="args" size="md" label="Middle"></Button>
          <Button v-bind="args" size="md" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="lg" label="Top"></Button>
          <Button v-bind="args" size="lg" label="Middle"></Button>
          <Button v-bind="args" size="lg" label="Bottom"></Button>
        </ButtonGroup>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story illustrates how different button \`size\`s (sm, md, lg) are rendered within a vertical \`ButtonGroup\`. Each group uses buttons of a consistent size.'
      }
    }
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const h=["Basic","Variants","Sizes"];export{n as Basic,r as Sizes,o as Variants,h as __namedExportsOrder,m as default};
