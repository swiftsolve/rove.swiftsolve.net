import{G as p,j as e}from"./iframe-BNpRpaso.js";import{u as g}from"./use-second-ticks-Bj_a3w8T.js";import{B as n,L as l}from"./Badge-CvUN_-Sb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StatusDot-DDWquQR7.js";import"./cn-B7OrgygE.js";function o({children:d}){const c=g();return e.jsx(l,{updatedAt:c,children:d})}const B={title:"Status and feedback/Badge",component:n,args:{tone:"positive",children:"Up"},parameters:{docs:{subtitle:"A small tinted flag in capitals, beside a title.",toc:p},guidance:{whenToUse:["A word or two flagging a title: the ISP card’s VPN.","A card whose data updates live, `LiveBadge` in its header: Traffic."],whenNotToUse:["A status beside its own words: use `StatusDot`.","A failure the user should act on: use `Banner`."],accessibility:{builtIn:["Plain text; capitals come from CSS, so it’s read as typed.","`LiveBadge`’s dot is hidden from screen readers."],toHandle:["Words that carry the meaning without the colour."]}},partGuidance:{LiveBadge:{whenToUse:["A card whose numbers update live, in its header: Traffic."],whenNotToUse:["A word or two flagging a title: use `Badge`.","A connection status: use `StatusDot`."],accessibility:{builtIn:["Its dot is hidden from screen readers."],toHandle:["Words that say it’s live without the dot: “Live”."]}}}},argTypes:{tone:{control:"inline-radio",options:["positive","warning","negative"]}}},t={args:{tone:"positive",children:"VPN"}},r={args:{tone:"warning",children:"Slow"}},i={args:{tone:"negative",children:"Down"}},a={render:()=>e.jsx(o,{})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(n,{tone:"positive",children:"VPN"}),e.jsx(n,{tone:"warning",children:"Slow"}),e.jsx(n,{tone:"negative",children:"Down"}),e.jsx(o,{}),e.jsx(o,{children:"Streaming"})]})},x=["Positive","Warning","Negative","Live","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    children: 'VPN'
  }
}`,...t.parameters?.docs?.source},description:{story:"Good news: the ISP card's VPN flag.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Slow'
  }
}`,...r.parameters?.docs?.source},description:{story:"A heads-up, not an error.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'Down'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <TickingLiveBadge />
}`,...a.parameters?.docs?.source},description:{story:"The card's data is updating live: the dot breathes once per update, here once a second.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <Badge tone="positive">VPN</Badge>
      <Badge tone="warning">Slow</Badge>
      <Badge tone="negative">Down</Badge>
      <TickingLiveBadge />
      <TickingLiveBadge>Streaming</TickingLiveBadge>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Every tone, and the Live pill.",...s.parameters?.docs?.description}}};export{s as AllStates,a as Live,i as Negative,t as Positive,r as Warning,x as __namedExportsOrder,B as default};
