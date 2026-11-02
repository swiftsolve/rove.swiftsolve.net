import{j as e,r as l}from"./iframe-BCcfZn2f.js";import{B as n}from"./BarMeter-CoOT7AXr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-D3eiRh-a.js";const m=["xs","sm","md","lg"],p=["var(--text-tertiary)","var(--status-poor)","var(--status-warning)","var(--status-good)","var(--status-positive)"],S={title:"Data display/BarMeter",component:n,args:{value:3,size:"lg",color:"var(--status-good)"},argTypes:{value:{control:{type:"range",min:0,max:4,step:1}},size:{control:"inline-radio",options:m},color:{control:"select",options:p}}},r={},s={args:{size:"sm",value:4,color:"var(--status-positive)"}},a={args:{value:0,color:"var(--text-tertiary)"}},t={args:{isDimmed:!0}},o={render:()=>e.jsx("div",{className:"grid grid-cols-[repeat(7,max-content)] items-end gap-x-16 gap-y-12",children:m.map(i=>e.jsxs(l.Fragment,{children:[e.jsx("span",{className:"w-[24px] text-xs text-tertiary",children:i}),p.map((c,d)=>e.jsx(n,{value:d,size:i,color:c},c)),e.jsx(n,{value:3,size:i,isDimmed:!0})]},i))})},z=["Rating","Signal","Empty","Dimmed","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A list row's rating.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    value: 4,
    color: 'var(--status-positive)'
  }
}`,...s.parameters?.docs?.source},description:{story:"Signal strength in a data row.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    color: 'var(--text-tertiary)'
  }
}`,...a.parameters?.docs?.source},description:{story:"Nothing lit: no rating yet.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDimmed: true
  }
}`,...t.parameters?.docs?.source},description:{story:"A stale rating, waiting on a new test.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () =>
  // A grid, so each value's column lines up across sizes.
  <div className="grid grid-cols-[repeat(7,max-content)] items-end gap-x-16 gap-y-12">
      {SIZES.map(size => <Fragment key={size}>
          <span className="w-[24px] text-xs text-tertiary">{size}</span>
          {COLORS.map((color, value) => <BarMeter key={color} value={value} size={size} color={color} />)}
          <BarMeter value={3} size={size} isDimmed />
        </Fragment>)}
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Every size at every value, then dimmed.",...o.parameters?.docs?.description}}};export{o as AllStates,t as Dimmed,a as Empty,r as Rating,s as Signal,z as __namedExportsOrder,S as default};
