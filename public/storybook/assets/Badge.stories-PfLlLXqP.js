import{G as d,j as e}from"./iframe-RWCjgjma.js";import{B as n,L as i}from"./Badge-B9OTR6D1.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./StatusDot-cezumTZo.js";const u={title:"Status and feedback/Badge",component:n,args:{tone:"positive",children:"Up"},parameters:{docs:{toc:d},guidance:{use:["A word or two that flags a title, like the ISP card’s VPN.","Green for good news, amber for a caveat, red for a fault.","`LiveBadge` in a card header whose data updates live."],avoid:["A status beside its own words: use `StatusDot`.","A failure the user should act on: use `Banner`.","Something to press: use `Button`."],accessibility:{builtIn:["Plain text: screen readers read its words.","Capitals come from the style, so the words are read as written.","`LiveBadge`’s dot is hidden from screen readers, and stops pulsing under reduced motion."],youHandle:["Words that say it without the colour: “Down”, not a red blank.","A word or two, no more."]}}},argTypes:{tone:{control:"inline-radio",options:["positive","warning","negative"]}}},r={args:{tone:"positive",children:"VPN"}},a={args:{tone:"warning",children:"Slow"}},t={args:{tone:"negative",children:"Down"}},s={render:()=>e.jsx(i,{})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(n,{tone:"positive",children:"VPN"}),e.jsx(n,{tone:"warning",children:"Slow"}),e.jsx(n,{tone:"negative",children:"Down"}),e.jsx(i,{}),e.jsx(i,{children:"Streaming"})]})},v=["Positive","Warning","Negative","Live","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    children: 'VPN'
  }
}`,...r.parameters?.docs?.source},description:{story:"Good news: the ISP card's VPN flag.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Slow'
  }
}`,...a.parameters?.docs?.source},description:{story:"A heads-up, not an error.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'Down'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <LiveBadge />
}`,...s.parameters?.docs?.source},description:{story:"The card's data is updating live.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <Badge tone="positive">VPN</Badge>
      <Badge tone="warning">Slow</Badge>
      <Badge tone="negative">Down</Badge>
      <LiveBadge />
      <LiveBadge>Streaming</LiveBadge>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Every tone, and the Live pill.",...o.parameters?.docs?.description}}};export{o as AllStates,s as Live,t as Negative,r as Positive,a as Warning,v as __namedExportsOrder,u as default};
