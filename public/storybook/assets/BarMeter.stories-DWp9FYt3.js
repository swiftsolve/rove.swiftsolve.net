import{G as m,j as o}from"./iframe-q5l8u0WQ.js";import{B as i}from"./BarMeter-BHR4vt1D.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";const c=["var(--text-tertiary)","var(--status-poor)","var(--status-warning)","var(--status-good)","var(--status-positive)"],v={title:"Data display/BarMeter",component:i,args:{value:3,color:"var(--status-good)"},argTypes:{value:{control:{type:"range",min:0,max:4,step:1}},color:{control:"select",options:c}},parameters:{docs:{subtitle:"Four rising bars, some lit: a rating at a glance.",toc:m},guidance:{whenToUse:["Signal strength or a rating, at a glance.","A level in its status colour, taken from the text around it.","A rating not measured yet, `value={0}`: every bar unlit."],whenNotToUse:["An exact figure: use `MetricValue` or `Readout`.","Comparing traffic between rows: use `SplitBar`."],accessibility:{builtIn:["`aria-hidden`: it’s a picture of the value.","Bars fill with `currentColor`; unlit ones are a faint tint of it."],toHandle:['The value in words: an `sr-only` word or a `role="meter"` wrapper.',"A text colour on its container with 3:1 contrast, for the bars."]}}}},e={},r={args:{value:4,color:"var(--status-positive)"}},a={args:{value:0,color:"var(--text-tertiary)"}},t={args:{isDimmed:!0}},s={render:()=>o.jsxs("div",{className:"flex items-end gap-16",children:[c.map((n,l)=>o.jsx(i,{value:l,color:n},n)),o.jsx(i,{value:3,isDimmed:!0})]})},y=["Rating","Signal","Empty","Dimmed","AllStates"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A rating in a data row.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    color: 'var(--status-positive)'
  }
}`,...r.parameters?.docs?.source},description:{story:"Signal strength in a data row.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    color: 'var(--text-tertiary)'
  }
}`,...a.parameters?.docs?.source},description:{story:"Nothing lit: no rating yet.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDimmed: true
  }
}`,...t.parameters?.docs?.source},description:{story:"A stale rating, waiting on a new test.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-16">
      {COLORS.map((color, value) => <BarMeter key={color} value={value} color={color} />)}
      <BarMeter value={3} isDimmed />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Every value, then dimmed.",...s.parameters?.docs?.description}}};export{s as AllStates,t as Dimmed,a as Empty,e as Rating,r as Signal,y as __namedExportsOrder,v as default};
