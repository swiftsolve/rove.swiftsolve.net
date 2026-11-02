import{j as e}from"./iframe-BKxkrI3Z.js";import{B as t,L as i}from"./Badge-Dfvis2Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StatusDot-ChDm-JsU.js";import"./cn-D3eiRh-a.js";const v={title:"Status and feedback/Badge",component:t,args:{tone:"positive",children:"Up"},argTypes:{tone:{control:"inline-radio",options:["positive","warning","negative"]}}},r={args:{tone:"positive",children:"VPN"}},a={args:{tone:"warning",children:"Slow"}},o={args:{tone:"negative",children:"Down"}},s={render:()=>e.jsx(i,{})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(t,{tone:"positive",children:"VPN"}),e.jsx(t,{tone:"warning",children:"Slow"}),e.jsx(t,{tone:"negative",children:"Down"}),e.jsx(i,{}),e.jsx(i,{children:"Streaming"})]})},u=["Positive","Warning","Negative","Live","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"The card's data is updating live.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <Badge tone="positive">VPN</Badge>
      <Badge tone="warning">Slow</Badge>
      <Badge tone="negative">Down</Badge>
      <LiveBadge />
      <LiveBadge>Streaming</LiveBadge>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Every tone, and the Live pill.",...n.parameters?.docs?.description}}};export{n as AllStates,s as Live,o as Negative,r as Positive,a as Warning,u as __namedExportsOrder,v as default};
