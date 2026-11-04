import{G as p,j as e,r as u}from"./iframe-BXzSuZzq.js";import{B as n}from"./BarMeter-DAYGGc-m.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const d=["xs","sm","md","lg"],m=["var(--text-tertiary)","var(--status-poor)","var(--status-warning)","var(--status-good)","var(--status-positive)"],w={title:"Data display/BarMeter",component:n,args:{value:3,size:"lg",color:"var(--status-good)"},argTypes:{value:{control:{type:"range",min:0,max:4,step:1}},size:{control:"inline-radio",options:d},color:{control:"select",options:m}},parameters:{docs:{toc:p},guidance:{use:["Signal strength or a rating, at a glance.","`lg` for a list row’s rating, `sm` in a data row.","`md` beside a title, `xs` in a dense strip like Home’s.","A status token as `color`, matching how many bars are lit.","`value={0}` before there’s a rating, and `isDimmed` for a stale one waiting on a new test."],avoid:["An exact figure: use `Readout` or `MetricValue`.","Comparing traffic between rows: use `SplitBar`.","A status in words: use `Badge` or `StatusDot`."],accessibility:{builtIn:["Hidden from screen readers: it’s a picture of the value.","Unlit bars are a faint tint, so the count reads without telling colours apart."],youHandle:['The value in words: an `sr-only` word beside it (“Good”), or a wrapper with `role="meter"` and a label.',"A colour that matches those words."]}}}},r={},a={args:{size:"sm",value:4,color:"var(--status-positive)"}},s={args:{value:0,color:"var(--text-tertiary)"}},t={args:{isDimmed:!0}},o={render:()=>e.jsx("div",{className:"grid grid-cols-[repeat(7,max-content)] items-end gap-x-16 gap-y-12",children:d.map(i=>e.jsxs(u.Fragment,{children:[e.jsx("span",{className:"w-[24px] text-xs text-tertiary",children:i}),m.map((c,l)=>e.jsx(n,{value:l,size:i,color:c},c)),e.jsx(n,{value:3,size:i,isDimmed:!0})]},i))})},h=["Rating","Signal","Empty","Dimmed","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A list row's rating.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    value: 4,
    color: 'var(--status-positive)'
  }
}`,...a.parameters?.docs?.source},description:{story:"Signal strength in a data row.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    color: 'var(--text-tertiary)'
  }
}`,...s.parameters?.docs?.source},description:{story:"Nothing lit: no rating yet.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Every size at every value, then dimmed.",...o.parameters?.docs?.description}}};export{o as AllStates,t as Dimmed,s as Empty,r as Rating,a as Signal,h as __namedExportsOrder,w as default};
