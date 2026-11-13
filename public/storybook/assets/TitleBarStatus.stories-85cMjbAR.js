import{G as o}from"./iframe-BNpRpaso.js";import{T as n}from"./TitleBarStatus-DYrwtIBq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StatusDot-DDWquQR7.js";import"./cn-B7OrgygE.js";import"./status-EdzG58Fr.js";const m={title:"App frame/TitleBar/TitleBarStatus",component:n,args:{tone:"positive",children:"Online"},argTypes:{tone:{control:"inline-radio",options:["positive","negative","neutral"]}},parameters:{docs:{toc:o},guidance:{whenToUse:["The connection in a word or two, beside the brand: “Online”, “No internet”."],whenNotToUse:["A status anywhere else: use a `StatusDot` beside its words."],accessibility:{builtIn:['`role="status"`, so a change is read out.',"The dot is hidden from screen readers."],toHandle:["Words that make sense heard alone: “No internet”."]}}}},e={},t={args:{tone:"negative",children:"No internet"}},r={args:{tone:"neutral",children:"Connecting…"}},u=["Positive","Negative","Neutral"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'No internet'
  }
}`,...t.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'neutral',
    children: 'Connecting…'
  }
}`,...r.parameters?.docs?.source},description:{story:"No network info yet, or offline.",...r.parameters?.docs?.description}}};export{t as Negative,r as Neutral,e as Positive,u as __namedExportsOrder,m as default};
