import{G as d,j as n}from"./iframe-DdLtxfxV.js";import{B as c}from"./Button-D54UY3DG.js";import{T as l}from"./Tooltip-HcYxvV5G.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-DbuxvJnY.js";import"./pressable-n_zMMF94.js";import"./layers-D5UzyUFr.js";import"./usePositioner-ZB9J2gT5.js";import"./useBaseUiId-BNjmEaxP.js";import"./useOpenChangeComplete-VEkqF1Ly.js";import"./useTimeout-BRLeKilt.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DjgjSY0s.js";import"./DirectionContext-C7TR_WN9.js";const S={title:"Overlays/Tooltip",component:l,args:{content:"Your router, at 192.168.1.1.",children:n.jsx(c,{children:"Gateway"})},argTypes:{children:{control:!1},side:{control:"inline-radio",options:["top","bottom","left","right"]}},parameters:{docs:{toc:d},guidance:{use:["Why a control is off: “Connect to a network first”.","What a mark means: “Privacy-randomized MAC address”.","Detail that would crowd a row, like a host’s full name and IP."],avoid:["Naming an icon-only button: use `IconButton`; its `label` is the tooltip.","A message the user must see: use `Banner`.","Anything to click: use `Menu` or `Dialog`."],accessibility:{builtIn:["Opens on keyboard focus, not only on hover.","Its content describes the trigger, after any description it had.","No description when it repeats the trigger’s `aria-label`."],toHandle:["A focusable trigger: keyboard users can’t reach a tip on plain text.","Over plain text, `shouldDescribe={false}` and the hint in `sr-only` text."]}}},decorators:[i=>n.jsx("div",{className:"flex h-[160px] items-center justify-center",children:n.jsx(i,{})})],play:async({canvas:i,userEvent:p})=>{await p.hover(i.getByRole("button"))}},s={},o={args:{side:"top"}},e={args:{side:"right"}},a={args:{side:"left"}},t={args:{content:"Rated on the worst of latency, jitter and loss. A new test replaces it.",children:n.jsx(c,{children:"Rating"})}},r={args:{isDisabled:!0}},C=["Bottom","Top","Right","Left","Wrapping","Disabled"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Rated on the worst of latency, jitter and loss. A new test replaces it.',
    children: <Button>Rating</Button>
  }
}`,...t.parameters?.docs?.source},description:{story:"Content past the max width wraps.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Never opens: content that would be stale while a new test runs.",...r.parameters?.docs?.description}}};export{s as Bottom,r as Disabled,a as Left,e as Right,o as Top,t as Wrapping,C as __namedExportsOrder,S as default};
