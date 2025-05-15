import{r as e}from"./vue.esm-bundler-B6fWMb2G.js";import{C as s,z as E}from"./index.es-DjIhR-52.js";const C={title:"Components/Select",component:s,parameters:{layout:"centered",docs:{description:{component:"The `Select` component provides a dropdown list for users to choose one option from a predefined set. It supports `v-model` for data binding, placeholder text, various states (disabled, error, loading), and can display options passed as an array or via native `<option>` and `<optgroup>` tags within its default slot. Sizes can be controlled by applying standard size attributes (e.g., `sm`, `md`, `lg`)."}}},tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"Binding for v-model"},placeholder:{control:"text"},disabled:{control:"boolean"},error:{control:"text",description:"Error message string or boolean for error state"},loading:{control:"boolean"},loadingText:{control:"text"},options:{control:"object",description:"Array of options to display"}}},r={args:{placeholder:"Select an option",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],modelValue:""},render:t=>({components:{Select:s},setup(){const o=e(t.modelValue);return{args:t,selectedValue:o}},template:`
      <div>
        <h4>Selected value: {{ selectedValue }}</h4>
        <Select 
          v-model="selectedValue" 
          :options="args.options" 
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :error="args.error"
          style="width: 200px;"
        />
      </div>
    `}),parameters:{docs:{description:{story:"This story showcases the basic `Select` component. It uses `v-model` for two-way data binding with a `selectedValue` ref. Options are provided via the `options` prop, and a placeholder is set. The `style` attribute is used here to control the width for demonstration purposes."}}}},n={render:()=>({components:{Select:s},setup(){const t=e(""),o=e(""),l=e("");return{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}],selectedSm:t,selectedMd:o,selectedLg:l}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 200px;">
        <div>
          <h4>Small: {{ selectedSm }}</h4>
          <Select 
            v-model="selectedSm" 
            :options="options" 
            placeholder="Small select" 
            size="sm" 
          />
        </div>
        
        <div>
          <h4>Medium: {{ selectedMd }}</h4>
          <Select 
            v-model="selectedMd" 
            :options="options" 
            placeholder="Medium select" 
            size="md" 
          />
        </div>
        
        <div>
          <h4>Large: {{ selectedLg }}</h4>
          <Select 
            v-model="selectedLg" 
            :options="options" 
            placeholder="Large select" 
            size="lg" 
          />
        </div>
      </div>
    `}),parameters:{docs:{description:{story:'This story demonstrates different sizes for the `Select` component. Although `size` is not an explicit prop of the underlying Vue component and is passed as a standard HTML attribute, this story shows how `size="sm"`, `size="md"`, and `size="lg"` can be used to control the select field\'s height, typically styled via global CSS or a theming system.'}}}},a={render:()=>({components:{Select:s},setup(){const t=e(""),o=e(""),l=e(""),c=e("");return{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}],selectedDefault:t,selectedDisabled:o,selectedErrorMsg:l,selectedErrorBool:c}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 250px;">
        <div>
          <h4>Default: {{ selectedDefault }}</h4>
          <Select 
            v-model="selectedDefault" 
            placeholder="Default state"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Disabled: {{ selectedDisabled }}</h4>
          <Select 
            v-model="selectedDisabled" 
            placeholder="Disabled state" 
            :disabled="true"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Error with message: {{ selectedErrorMsg }}</h4>
          <Select 
            v-model="selectedErrorMsg" 
            placeholder="Error with message" 
            error="Please select a valid option"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Error as boolean: {{ selectedErrorBool }}</h4>
          <Select 
            v-model="selectedErrorBool" 
            placeholder="Error as boolean" 
            :error="true"
            :options="options"
          />
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"This story illustrates different states of the `Select` component: default, `disabled`, and `error`. The error state can be triggered by passing a string (as an error message) or `true` to the `error` prop. These states provide visual cues and control interactivity based on the select field's current status."}}}},i={render:()=>({components:{Select:s,Option:E},setup(){return{selectedFruit:e(""),citrusOptions:[{label:"Orange",value:"orange"},{label:"Lemon",value:"lemon"},{label:"Lime",value:"lime"}],berryOptions:[{label:"Strawberry",value:"strawberry"},{label:"Blueberry",value:"blueberry"},{label:"Raspberry",value:"raspberry"}]}},template:`
      <div>
        <h3>Selected fruit: {{ selectedFruit }}</h3>
        <Select 
          v-model="selectedFruit" 
          placeholder="Select a fruit" 
          style="width: 200px;"
        >
          <optgroup label="Citrus Fruits">
            <Option v-for="option in citrusOptions" :key="option.value" :value="option.value">{{ option.label }}</Option>
          </optgroup>
          <optgroup label="Berry Fruits">
            <Option v-for="option in berryOptions" :key="option.value" :value="option.value">{{ option.label }}</Option>
          </optgroup>
        </Select>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates how to use native HTML `<optgroup>` and `<option>` elements within the default slot of the `Select` component to group related options. This is useful for organizing longer lists of choices into logical categories. The placeholder is still set via the placeholder prop."}}}},d={render:()=>({components:{Select:s},setup(){return{selectedCountry:e(""),selectId:"country-select",countryOptions:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 250px;">
        <h4>Selected country: {{ selectedCountry }}</h4>
        <label :for="selectId">Choose a country</label>
        <Select 
          :id="selectId" 
          v-model="selectedCountry" 
          placeholder="Select a country"
          :options="countryOptions"
          :aria-describedby="selectId + '-hint'"
        />
        <small :id="selectId + '-hint'" style="font-size: 0.875em; color: #666;">
          Please select your country of residence.
        </small>
      </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates how to pair a `Select` component with an external `<label>` and a hint text (using a `<small>` tag). The `label` uses the `for` attribute matching the `Select` component's `id` for accessibility. The hint text is associated via the `aria-describedby` attribute on the `Select` component, pointing to the `id` of the hint element. This provides important context and accessibility for the select field."}}}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }] as SelectOption[],
    modelValue: ''
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      const selectedValue = ref(args.modelValue);
      return {
        args,
        selectedValue
      };
    },
    template: \`
      <div>
        <h4>Selected value: {{ selectedValue }}</h4>
        <Select 
          v-model="selectedValue" 
          :options="args.options" 
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :error="args.error"
          style="width: 200px;"
        />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the basic \`Select\` component. It uses \`v-model\` for two-way data binding with a \`selectedValue\` ref. Options are provided via the \`options\` prop, and a placeholder is set. The \`style\` attribute is used here to control the width for demonstration purposes.'
      }
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,v,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select
    },
    setup() {
      const selectedSm = ref('');
      const selectedMd = ref('');
      const selectedLg = ref('');
      const options = [{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }];
      return {
        options,
        selectedSm,
        selectedMd,
        selectedLg
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 200px;">
        <div>
          <h4>Small: {{ selectedSm }}</h4>
          <Select 
            v-model="selectedSm" 
            :options="options" 
            placeholder="Small select" 
            size="sm" 
          />
        </div>
        
        <div>
          <h4>Medium: {{ selectedMd }}</h4>
          <Select 
            v-model="selectedMd" 
            :options="options" 
            placeholder="Medium select" 
            size="md" 
          />
        </div>
        
        <div>
          <h4>Large: {{ selectedLg }}</h4>
          <Select 
            v-model="selectedLg" 
            :options="options" 
            placeholder="Large select" 
            size="lg" 
          />
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates different sizes for the \`Select\` component. Although \`size\` is not an explicit prop of the underlying Vue component and is passed as a standard HTML attribute, this story shows how \`size="sm"\`, \`size="md"\`, and \`size="lg"\` can be used to control the select field\\'s height, typically styled via global CSS or a theming system.'
      }
    }
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,g,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select
    },
    setup() {
      const selectedDefault = ref('');
      const selectedDisabled = ref('');
      const selectedErrorMsg = ref('');
      const selectedErrorBool = ref('');
      const options = [{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }];
      return {
        options,
        selectedDefault,
        selectedDisabled,
        selectedErrorMsg,
        selectedErrorBool
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 250px;">
        <div>
          <h4>Default: {{ selectedDefault }}</h4>
          <Select 
            v-model="selectedDefault" 
            placeholder="Default state"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Disabled: {{ selectedDisabled }}</h4>
          <Select 
            v-model="selectedDisabled" 
            placeholder="Disabled state" 
            :disabled="true"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Error with message: {{ selectedErrorMsg }}</h4>
          <Select 
            v-model="selectedErrorMsg" 
            placeholder="Error with message" 
            error="Please select a valid option"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Error as boolean: {{ selectedErrorBool }}</h4>
          <Select 
            v-model="selectedErrorBool" 
            placeholder="Error as boolean" 
            :error="true"
            :options="options"
          />
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "This story illustrates different states of the \`Select\` component: default, \`disabled\`, and \`error\`. The error state can be triggered by passing a string (as an error message) or \`true\` to the \`error\` prop. These states provide visual cues and control interactivity based on the select field's current status."
      }
    }
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,O,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      Option
    },
    setup() {
      const selectedFruit = ref('');
      // Group the options by their group property
      const citrusOptions = [{
        label: 'Orange',
        value: 'orange'
      }, {
        label: 'Lemon',
        value: 'lemon'
      }, {
        label: 'Lime',
        value: 'lime'
      }];
      const berryOptions = [{
        label: 'Strawberry',
        value: 'strawberry'
      }, {
        label: 'Blueberry',
        value: 'blueberry'
      }, {
        label: 'Raspberry',
        value: 'raspberry'
      }];
      return {
        selectedFruit,
        citrusOptions,
        berryOptions
      };
    },
    template: \`
      <div>
        <h3>Selected fruit: {{ selectedFruit }}</h3>
        <Select 
          v-model="selectedFruit" 
          placeholder="Select a fruit" 
          style="width: 200px;"
        >
          <optgroup label="Citrus Fruits">
            <Option v-for="option in citrusOptions" :key="option.value" :value="option.value">{{ option.label }}</Option>
          </optgroup>
          <optgroup label="Berry Fruits">
            <Option v-for="option in berryOptions" :key="option.value" :value="option.value">{{ option.label }}</Option>
          </optgroup>
        </Select>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to use native HTML \`<optgroup>\` and \`<option>\` elements within the default slot of the \`Select\` component to group related options. This is useful for organizing longer lists of choices into logical categories. The placeholder is still set via the placeholder prop.'
      }
    }
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var x,T,z;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select
    },
    setup() {
      const selectedCountry = ref('');
      const selectId = 'country-select';
      const countryOptions = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }, {
        value: 'au',
        label: 'Australia'
      }];
      return {
        selectedCountry,
        selectId,
        countryOptions
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 250px;">
        <h4>Selected country: {{ selectedCountry }}</h4>
        <label :for="selectId">Choose a country</label>
        <Select 
          :id="selectId" 
          v-model="selectedCountry" 
          placeholder="Select a country"
          :options="countryOptions"
          :aria-describedby="selectId + '-hint'"
        />
        <small :id="selectId + '-hint'" style="font-size: 0.875em; color: #666;">
          Please select your country of residence.
        </small>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates how to pair a \`Select\` component with an external \`<label>\` and a hint text (using a \`<small>\` tag). The \`label\` uses the \`for\` attribute matching the \`Select\` component's \`id\` for accessibility. The hint text is associated via the \`aria-describedby\` attribute on the \`Select\` component, pointing to the \`id\` of the hint element. This provides important context and accessibility for the select field."
      }
    }
  }
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const V=["Basic","Sizes","States","WithGroups","WithLabelAndHint"];export{r as Basic,n as Sizes,a as States,i as WithGroups,d as WithLabelAndHint,V as __namedExportsOrder,C as default};
