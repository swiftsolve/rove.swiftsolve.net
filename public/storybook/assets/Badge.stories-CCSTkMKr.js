import{G as d,j as e}from"./iframe-YcXBDmiC.js";import{B as n,L as i}from"./Badge-BDT9wSHc.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./StatusDot-Dcazdtm6.js";const u={title:"Status and feedback/Badge",component:n,args:{tone:"positive",children:"Up"},parameters:{docs:{toc:d},guidance:{use:["A word or two flagging a title: the ISP card’s VPN.","`LiveBadge` in a card header whose data updates live: Traffic."],avoid:["A status beside its own words: use `StatusDot`.","A failure the user should act on: use `Banner`."],accessibility:{builtIn:["Plain text; capitals come from CSS, so it’s read as typed.","`LiveBadge`’s dot is hidden from screen readers."],toHandle:["Words that carry the meaning without the colour."]}}},argTypes:{tone:{control:"inline-radio",options:["positive","warning","negative"]}}},r={args:{tone:"positive",children:"VPN"}},a={args:{tone:"warning",children:"Slow"}},o={args:{tone:"negative",children:"Down"}},s={render:()=>e.jsx(i,{})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(n,{tone:"positive",children:"VPN"}),e.jsx(n,{tone:"warning",children:"Slow"}),e.jsx(n,{tone:"negative",children:"Down"}),e.jsx(i,{}),e.jsx(i,{children:"Streaming"})]})},v=["Positive","Warning","Negative","Live","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    children: 'VPN'
  }
}`,...r.parameters?.docs?.source},description:{story:"Good news: the ISP card's VPN flag.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Slow'
  }
}`,...a.parameters?.docs?.source},description:{story:"A heads-up, not an error.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'Down'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <LiveBadge />
}`,...s.parameters?.docs?.source},description:{story:"The card's data is updating live.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <Badge tone="positive">VPN</Badge>
      <Badge tone="warning">Slow</Badge>
      <Badge tone="negative">Down</Badge>
      <LiveBadge />
      <LiveBadge>Streaming</LiveBadge>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Every tone, and the Live pill.",...t.parameters?.docs?.description}}};export{t as AllStates,s as Live,o as Negative,r as Positive,a as Warning,v as __namedExportsOrder,u as default};
