import{G as p,j as n}from"./iframe-RWCjgjma.js";import{B as c}from"./Button-h0k1_ueK.js";import{T as l}from"./Tooltip-CvsY3PuX.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-CQ-b8E7M.js";import"./pressable-n_zMMF94.js";import"./layers-D5UzyUFr.js";import"./usePositioner-BlCIaKDQ.js";import"./useBaseUiId-Dn29YJQo.js";import"./useOpenChangeComplete-dlW0hiCF.js";import"./useTimeout-D5anX_Ze.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CFrsFuXv.js";import"./DirectionContext-B-lzyrpY.js";const k={title:"Overlays/Tooltip",component:l,args:{content:"Your router, at 192.168.1.1.",children:n.jsx(c,{children:"Gateway"})},argTypes:{children:{control:!1},side:{control:"inline-radio",options:["top","bottom","left","right"]}},parameters:{docs:{toc:p},guidance:{use:["A short hint on a control: what a value means, or why a button is off.","Detail that would crowd the row, like a host’s address.",'`side="right"` beside the nav rail.'],avoid:["Naming an icon-only button: use `IconButton`, whose `label` is its tooltip.","Anything to click or act on: use `Dialog` or `Menu`.","A message the user must see: use `Banner`."],accessibility:{builtIn:["Opens on keyboard focus, not only on hover.","Screen readers hear the content as the trigger’s description, after any it already had.","No description when it only repeats the trigger’s `aria-label`.","The bubble itself is hidden from screen readers, so nothing is read twice."],youHandle:["A focusable trigger, like a `Button`: keyboard users can’t reach a tip on plain text.","Over plain text, `shouldDescribe={false}` and the hint in `sr-only` text too.","Two short sentences at most, and nothing needed to finish a task."]}}},decorators:[i=>n.jsx("div",{className:"flex h-[160px] items-center justify-center",children:n.jsx(i,{})})],play:async({canvas:i,userEvent:d})=>{await d.hover(i.getByRole("button"))}},s={},o={args:{side:"top"}},e={args:{side:"right"}},a={args:{side:"left"}},t={args:{content:"Rated on the worst of latency, jitter and loss. A new test replaces it.",children:n.jsx(c,{children:"Rating"})}},r={args:{isDisabled:!0}},N=["Bottom","Top","Right","Left","Wrapping","Disabled"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Never opens: content that would be stale while a new test runs.",...r.parameters?.docs?.description}}};export{s as Bottom,r as Disabled,a as Left,e as Right,o as Top,t as Wrapping,N as __namedExportsOrder,k as default};
