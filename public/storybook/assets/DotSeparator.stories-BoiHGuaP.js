import{G as o,j as e}from"./iframe-DGeRsrcz.js";import{I as a,D as n}from"./DotSeparator-CMQpyM17.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CICwuVeI.js";const m={title:"Containers/DotSeparator/DotSeparator",component:n,subcomponents:{InlineMeta:a},parameters:{docs:{subtitle:"A small dot between items on one line.",toc:o},guidance:{whenToUse:["Short facts on one line, like a device’s vendor and model.","Facts that may be empty, in `InlineMeta`: they drop out with their dots.","Parts you lay out yourself, a bare `DotSeparator` between them: the Services header."],whenNotToUse:["Labels with their values: use `DataRow`s.","A status beside its words: use `StatusDot`.","A missing value that should show: use `NoValue`."],accessibility:{builtIn:["The dot is hidden from screen readers.","A truncated item keeps its full text for screen readers."],toHandle:["Items that read well in a row, without the dots.","The full value elsewhere when truncation can cut it off."]}}}},t={render:()=>e.jsxs("span",{className:"type-body-small inline-flex items-center gap-6 text-secondary",children:["Wi‑Fi ",e.jsx(n,{})," 5 GHz"]})},s={render:()=>e.jsxs("div",{className:"type-body-small flex flex-col items-start gap-12 text-secondary",children:[e.jsxs("span",{className:"inline-flex items-center gap-6",children:["Wi‑Fi ",e.jsx(n,{})," 5 GHz"]}),e.jsx(a,{items:["192.168.1.20","Apple",null,"2 min ago"]}),e.jsx(a,{items:["Ethernet"]}),e.jsx("span",{className:"block w-[160px]",children:e.jsx(a,{shouldTruncate:!0,items:["a-very-long-hostname.local","Raspberry Pi Foundation","now"]})})]})},d=["Dot","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <span className="type-body-small inline-flex items-center gap-6 text-secondary">
      Wi‑Fi <DotSeparator /> 5 GHz
    </span>
}`,...t.parameters?.docs?.source},description:{story:"A dot between two inline items.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="type-body-small flex flex-col items-start gap-12 text-secondary">
      <span className="inline-flex items-center gap-6">
        Wi‑Fi <DotSeparator /> 5 GHz
      </span>
      <InlineMeta items={['192.168.1.20', 'Apple', null, '2 min ago']} />
      <InlineMeta items={['Ethernet']} />
      <span className="block w-[160px]">
        <InlineMeta shouldTruncate items={['a-very-long-hostname.local', 'Raspberry Pi Foundation', 'now']} />
      </span>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Every form together.",...s.parameters?.docs?.description}}};export{s as AllStates,t as Dot,d as __namedExportsOrder,m as default};
