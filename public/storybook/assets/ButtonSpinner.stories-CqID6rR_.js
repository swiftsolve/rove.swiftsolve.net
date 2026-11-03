import{j as s}from"./iframe-CHA-W8uN.js";import{B as n}from"./ButtonSpinner-B391oOcO.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Status and feedback/ButtonSpinner",component:n,args:{size:14},argTypes:{size:{control:{type:"number",min:10,max:32,step:1}},color:{control:"text"}},render:a=>s.jsx("span",{className:"inline-flex text-secondary",children:s.jsx(n,{...a})})},e={},r={args:{size:16,color:"var(--accent-default)"}},t={render:a=>s.jsxs("span",{className:"inline-flex items-center gap-6 type-caption text-secondary",children:[s.jsx(n,{...a}),"Retrying…"]})},d=["Default","Accent","WithLabel"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"The text colour around it. A loading Button draws this for you.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 16,
    color: 'var(--accent-default)'
  }
}`,...r.parameters?.docs?.source},description:{story:"Outside a button, in the accent.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <span className="inline-flex items-center gap-6 type-caption text-secondary">
      <ButtonSpinner {...args} />
      Retrying…
    </span>
}`,...t.parameters?.docs?.source},description:{story:"Beside the words it stands for, outside a button.",...t.parameters?.docs?.description}}};export{r as Accent,e as Default,t as WithLabel,d as __namedExportsOrder,p as default};
