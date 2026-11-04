import{G as r,j as e}from"./iframe-RWCjgjma.js";import{I as a,D as n}from"./DotSeparator-gn0t48Xq.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const c={title:"Containers/DotSeparator/DotSeparator",component:n,subcomponents:{InlineMeta:a},parameters:{docs:{toc:r},guidance:{use:["Between inline items on one line: an address, a vendor, a time.","`InlineMeta` for a list of items, some maybe empty.","`shouldTruncate` to keep them on one line.","A bare `DotSeparator` between two items you lay out yourself.","Empty items drop out with their dots, so pass every field. A `0` stays."],avoid:["Labels and their values: use `DataRow`s in a `DataList`.","A status beside its words: use `StatusDot`.","A missing value that should show: use `NoValue`.","A line between rows: `CardList` and `DataListStack` draw it."],accessibility:{builtIn:["The dot is hidden from screen readers.","A truncated item keeps its full text for screen readers."],youHandle:["Items that still make sense read in a row, without the dots.","The full value somewhere else when truncation can hide it.","Text colour with enough contrast: it takes its line’s."]}}}},t={render:()=>e.jsxs("span",{className:"inline-flex items-center gap-6 text-sm text-secondary",children:["Wi‑Fi ",e.jsx(n,{})," 5 GHz"]})},s={render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-12 text-sm text-secondary",children:[e.jsxs("span",{className:"inline-flex items-center gap-6",children:["Wi‑Fi ",e.jsx(n,{})," 5 GHz"]}),e.jsx(a,{items:["192.168.1.20","Apple",null,"2 min ago"]}),e.jsx(a,{items:["Ethernet"]}),e.jsx("span",{className:"block w-[160px]",children:e.jsx(a,{shouldTruncate:!0,items:["a-very-long-hostname.local","Raspberry Pi Foundation","now"]})})]})},d=["Dot","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Every form together.",...s.parameters?.docs?.description}}};export{s as AllStates,t as Dot,d as __namedExportsOrder,c as default};
