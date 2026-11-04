import{G as n,j as e}from"./iframe-CL4WtWQJ.js";import{I as a,D as r}from"./DotSeparator-CSZkbovt.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const m={title:"Containers/DotSeparator/DotSeparator",component:r,subcomponents:{InlineMeta:a},parameters:{docs:{toc:n},guidance:{use:["Short facts on one line, like a device’s vendor and model.","`InlineMeta` when items may be empty: they drop out with their dots.","A bare `DotSeparator` between parts you lay out, like the Services header’s."],avoid:["Labels with their values: use `DataRow`s.","A status beside its words: use `StatusDot`.","A missing value that should show: use `NoValue`."],accessibility:{builtIn:["The dot is hidden from screen readers.","A truncated item keeps its full text for screen readers."],toHandle:["Items that read well in a row, without the dots.","The full value elsewhere when truncation can cut it off."]}}}},t={render:()=>e.jsxs("span",{className:"inline-flex items-center gap-6 text-sm text-secondary",children:["Wi‑Fi ",e.jsx(r,{})," 5 GHz"]})},s={render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-12 text-sm text-secondary",children:[e.jsxs("span",{className:"inline-flex items-center gap-6",children:["Wi‑Fi ",e.jsx(r,{})," 5 GHz"]}),e.jsx(a,{items:["192.168.1.20","Apple",null,"2 min ago"]}),e.jsx(a,{items:["Ethernet"]}),e.jsx("span",{className:"block w-[160px]",children:e.jsx(a,{shouldTruncate:!0,items:["a-very-long-hostname.local","Raspberry Pi Foundation","now"]})})]})},d=["Dot","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <span className="inline-flex items-center gap-6 text-sm text-secondary">
      Wi‑Fi <DotSeparator /> 5 GHz
    </span>
}`,...t.parameters?.docs?.source},description:{story:"A dot between two inline items.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-12 text-sm text-secondary">
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
