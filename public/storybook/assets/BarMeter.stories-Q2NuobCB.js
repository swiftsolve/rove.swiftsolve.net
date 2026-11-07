import{G as d,j as e,r as u}from"./iframe-Cunn1f1n.js";import{B as n}from"./BarMeter-DKqN2VKz.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";const l=["sm","lg"],p=["var(--text-tertiary)","var(--status-poor)","var(--status-warning)","var(--status-good)","var(--status-positive)"],S={title:"Data display/BarMeter",component:n,args:{value:3,size:"lg",color:"var(--status-good)"},argTypes:{value:{control:{type:"range",min:0,max:4,step:1}},size:{control:"inline-radio",options:l},color:{control:"select",options:p}},parameters:{docs:{subtitle:"Four rising bars, some lit: a rating at a glance.",toc:d},guidance:{whenToUse:["Signal strength or a rating, at a glance.","A level in its status colour, taken from the text around it.","A rating not measured yet, `value={0}`: every bar unlit."],whenNotToUse:["An exact figure: use `MetricValue` or `Readout`.","Comparing traffic between rows: use `SplitBar`."],accessibility:{builtIn:["`aria-hidden`: it’s a picture of the value.","Bars fill with `currentColor`; unlit ones are a faint tint of it."],toHandle:['The value in words: an `sr-only` word or a `role="meter"` wrapper.',"A text colour on its container with 3:1 contrast, for the bars."]}}}},r={},a={args:{size:"sm",value:4,color:"var(--status-positive)"}},t={args:{value:0,color:"var(--text-tertiary)"}},s={args:{isDimmed:!0}},o={render:()=>e.jsx("div",{className:"grid grid-cols-[repeat(7,max-content)] items-end gap-x-16 gap-y-12",children:l.map(i=>e.jsxs(u.Fragment,{children:[e.jsx("span",{className:"type-caption w-[24px] text-tertiary",children:i}),p.map((c,m)=>e.jsx(n,{value:m,size:i,color:c},c)),e.jsx(n,{value:3,size:i,isDimmed:!0})]},i))})},h=["Rating","Signal","Empty","Dimmed","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A list row's rating.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    value: 4,
    color: 'var(--status-positive)'
  }
}`,...a.parameters?.docs?.source},description:{story:"Signal strength in a data row.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    color: 'var(--text-tertiary)'
  }
}`,...t.parameters?.docs?.source},description:{story:"Nothing lit: no rating yet.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDimmed: true
  }
}`,...s.parameters?.docs?.source},description:{story:"A stale rating, waiting on a new test.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () =>
  // A grid, so each value's column lines up across sizes.
  <div className="grid grid-cols-[repeat(7,max-content)] items-end gap-x-16 gap-y-12">
      {SIZES.map(size => <Fragment key={size}>
          <span className="type-caption w-[24px] text-tertiary">{size}</span>
          {COLORS.map((color, value) => <BarMeter key={color} value={value} size={size} color={color} />)}
          <BarMeter value={3} size={size} isDimmed />
        </Fragment>)}
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Every size at every value, then dimmed.",...o.parameters?.docs?.description}}};export{o as AllStates,s as Dimmed,t as Empty,r as Rating,a as Signal,h as __namedExportsOrder,S as default};
