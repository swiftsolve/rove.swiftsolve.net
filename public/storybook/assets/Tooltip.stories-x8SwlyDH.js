import{j as i}from"./iframe-DUVig4Wa.js";import{B as c}from"./Button-Bfanhvar.js";import{T as d}from"./Tooltip-DgqCbHXd.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-DllW7uQ-.js";import"./pressable-n_zMMF94.js";import"./layers-D5UzyUFr.js";import"./usePositioner-BeOf__hn.js";import"./useBaseUiId-1TUgJYx5.js";import"./useOpenChangeComplete-EogAs_ll.js";import"./useTimeout-BFAfNTTc.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DcgwEOHZ.js";import"./DirectionContext-BOikIBUt.js";const A={title:"Overlays/Tooltip",component:d,args:{content:"Your router, at 192.168.1.1.",children:i.jsx(c,{children:"Gateway"})},argTypes:{children:{control:!1},side:{control:"inline-radio",options:["top","bottom","left","right"]}},decorators:[n=>i.jsx("div",{className:"flex h-[160px] items-center justify-center",children:i.jsx(n,{})})],play:async({canvas:n,userEvent:p})=>{await p.hover(n.getByRole("button"))}},s={},o={args:{side:"top"}},e={args:{side:"right"}},a={args:{side:"left"}},r={args:{content:"Rated on the worst of latency, jitter and loss. A new test replaces it.",children:i.jsx(c,{children:"Rating"})}},t={args:{isDisabled:!0}},E=["Bottom","Top","Right","Left","Wrapping","Disabled"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'right'
  }
}`,...e.parameters?.docs?.source},description:{story:"Beside the trigger, vertically centred: the nav rail.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Rated on the worst of latency, jitter and loss. A new test replaces it.',
    children: <Button>Rating</Button>
  }
}`,...r.parameters?.docs?.source},description:{story:"Content past the max width wraps.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Never opens: content that would be stale while a new test runs.",...t.parameters?.docs?.description}}};export{s as Bottom,t as Disabled,a as Left,e as Right,o as Top,r as Wrapping,E as __namedExportsOrder,A as default};
