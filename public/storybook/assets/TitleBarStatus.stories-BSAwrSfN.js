import{T as o}from"./TitleBar-j8C8SiRU.js";import"./iframe-BFCGvnoX.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-DtcT_dLf.js";import"./layers-D5UzyUFr.js";import"./Icons-BMD2BtZT.js";import"./StatusDot-DYl1h8ae.js";const m={title:"App frame/TitleBar/TitleBarStatus",component:o,args:{tone:"positive",children:"Wi‑Fi"},argTypes:{tone:{control:"inline-radio",options:["positive","negative","neutral"]}}},e={},r={args:{tone:"negative",children:"No internet"}},t={args:{tone:"neutral",children:"Connecting…"}},l=["Positive","Negative","Neutral"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'No internet'
  }
}`,...r.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'neutral',
    children: 'Connecting…'
  }
}`,...t.parameters?.docs?.source},description:{story:"No network info yet, or offline.",...t.parameters?.docs?.description}}};export{r as Negative,t as Neutral,e as Positive,l as __namedExportsOrder,m as default};
