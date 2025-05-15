import{U as n}from"./index.es-DjIhR-52.js";import"./vue.esm-bundler-B6fWMb2G.js";const b={title:"Components/Alert",component:n,parameters:{layout:"centered",docs:{description:{component:"The `Alert` component is used to display important messages to the user. Alerts can be configured with different types (`info`, `success`, `warning`, `error`) to reflect the nature of the message and can optionally be made dismissible by the user. It's a versatile component for user feedback and notifications within an application."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["info","success","warning","danger"],defaultValue:"info"},title:{control:"text",defaultValue:""},dismissible:{control:"boolean",defaultValue:!1},className:{control:"text",description:"Additional CSS class names"}}},s={render:e=>({components:{Alert:n},setup(){return{args:e}},template:`
      <Alert v-bind="args" className="my-2">
        This is a basic alert message
      </Alert>
    `}),parameters:{docs:{description:{story:"This is the most basic usage of the `Alert` component. It displays a default informational alert. You can change its type and content via controls. The `className` prop allows adding custom CSS classes."}}}},t={render:e=>({components:{Alert:n},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Alert v-bind="args" type="info" className="alert-info">
          This is an info alert
        </Alert>
        <Alert v-bind="args" type="success" className="alert-success">
          This is a success alert
        </Alert>
        <Alert v-bind="args" type="warning" className="alert-warning">
          This is a warning alert
        </Alert>
        <Alert v-bind="args" type="danger" className="alert-danger">
          This is an error alert
        </Alert>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates the different types of alerts available: `info`, `success`, `warning`, and `error`. Each type has a distinct visual style to convey its purpose. Custom class names are applied to each alert for additional styling."}}}},a={render:e=>({components:{Alert:n},setup(){return{dismissibleArgs:{...e,dismissible:!0,className:"dismissible-alert"}}},template:`
      <Alert v-bind="dismissibleArgs">
        This is a dismissible alert
      </Alert>
    `}),parameters:{docs:{description:{story:"This story demonstrates a dismissible `Alert`. When the `dismissible` prop is set to `true`, a close button appears, allowing the user to hide the alert. The default type is `info` but can be changed via controls. A custom class name is applied for additional styling."}}}};var r,i,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Alert v-bind="args" className="my-2">
        This is a basic alert message
      </Alert>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This is the most basic usage of the \`Alert\` component. It displays a default informational alert. You can change its type and content via controls. The \`className\` prop allows adding custom CSS classes.'
      }
    }
  }
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Alert v-bind="args" type="info" className="alert-info">
          This is an info alert
        </Alert>
        <Alert v-bind="args" type="success" className="alert-success">
          This is a success alert
        </Alert>
        <Alert v-bind="args" type="warning" className="alert-warning">
          This is a warning alert
        </Alert>
        <Alert v-bind="args" type="danger" className="alert-danger">
          This is an error alert
        </Alert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the different types of alerts available: \`info\`, \`success\`, \`warning\`, and \`error\`. Each type has a distinct visual style to convey its purpose. Custom class names are applied to each alert for additional styling.'
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
    },
    setup() {
      const dismissibleArgs = {
        ...args,
        dismissible: true,
        className: 'dismissible-alert'
      };
      return {
        dismissibleArgs
      };
    },
    template: \`
      <Alert v-bind="dismissibleArgs">
        This is a dismissible alert
      </Alert>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a dismissible \`Alert\`. When the \`dismissible\` prop is set to \`true\`, a close button appears, allowing the user to hide the alert. The default type is \`info\` but can be changed via controls. A custom class name is applied for additional styling.'
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const f=["Basic","Types","Dismissible"];export{s as Basic,a as Dismissible,t as Types,f as __namedExportsOrder,b as default};
