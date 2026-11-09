import{G as p,j as e}from"./iframe-NOeLXieQ.js";import{u as g}from"./use-second-ticks-s-_3dSZP.js";import{B as o,L as l}from"./Badge-CMp-IxXG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StatusDot-Dca0_fUc.js";import"./cn-CYafEIXe.js";function i({children:d}){const c=g();return e.jsx(l,{updatedAt:c,children:d})}const B={title:"Status and feedback/Badge",component:o,args:{tone:"positive",children:"Up"},parameters:{docs:{subtitle:"A small tinted flag in capitals, beside a title.",toc:p},guidance:{whenToUse:["A word or two flagging a title: the ISP card’s VPN.","A card whose data updates live, `LiveBadge` in its header: Traffic."],whenNotToUse:["A status beside its own words: use `StatusDot`.","A failure the user should act on: use `Banner`."],accessibility:{builtIn:["Plain text; capitals come from CSS, so it’s read as typed.","`LiveBadge`’s dot is hidden from screen readers."],toHandle:["Words that carry the meaning without the colour."]}}},argTypes:{tone:{control:"inline-radio",options:["positive","warning","negative"]}}},r={args:{tone:"positive",children:"VPN"}},a={args:{tone:"warning",children:"Slow"}},n={args:{tone:"negative",children:"Down"}},s={render:()=>e.jsx(i,{})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(o,{tone:"positive",children:"VPN"}),e.jsx(o,{tone:"warning",children:"Slow"}),e.jsx(o,{tone:"negative",children:"Down"}),e.jsx(i,{}),e.jsx(i,{children:"Streaming"})]})},x=["Positive","Warning","Negative","Live","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    children: 'VPN'
  }
}`,...r.parameters?.docs?.source},description:{story:"Good news: the ISP card's VPN flag.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Slow'
  }
}`,...a.parameters?.docs?.source},description:{story:"A heads-up, not an error.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'Down'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <TickingLiveBadge />
}`,...s.parameters?.docs?.source},description:{story:"The card's data is updating live: the dot breathes once per update, here once a second.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <Badge tone="positive">VPN</Badge>
      <Badge tone="warning">Slow</Badge>
      <Badge tone="negative">Down</Badge>
      <TickingLiveBadge />
      <TickingLiveBadge>Streaming</TickingLiveBadge>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Every tone, and the Live pill.",...t.parameters?.docs?.description}}};export{t as AllStates,s as Live,n as Negative,r as Positive,a as Warning,x as __namedExportsOrder,B as default};
