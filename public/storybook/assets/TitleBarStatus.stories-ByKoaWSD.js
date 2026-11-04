import{T as o}from"./TitleBar-_fSL90Tm.js";import"./iframe-uQibPjhz.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./Icons-Diu3Gw38.js";import"./StatusDot-D26Uzhdm.js";import"./layers-D5UzyUFr.js";import"./status-EdzG58Fr.js";const l={title:"App frame/TitleBar/TitleBarStatus",component:o,args:{tone:"positive",children:"Wi‑Fi"},argTypes:{tone:{control:"inline-radio",options:["positive","negative","neutral"]}}},e={},r={args:{tone:"negative",children:"No internet"}},t={args:{tone:"neutral",children:"Connecting…"}},u=["Positive","Negative","Neutral"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'negative',
    children: 'No internet'
  }
}`,...r.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'neutral',
    children: 'Connecting…'
  }
}`,...t.parameters?.docs?.source},description:{story:"No network info yet, or offline.",...t.parameters?.docs?.description}}};export{r as Negative,t as Neutral,e as Positive,u as __namedExportsOrder,l as default};
