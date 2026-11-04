import{G as f,j as e}from"./iframe-BfXVAaG9.js";import{B as g}from"./BrandIcon-CIPbK9ae.js";import{W as u,T as t,a as l}from"./TitleBar-Dw5fVqhj.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./Icons-BiE5t5ng.js";import"./StatusDot-XT3ZykLE.js";import"./layers-D5UzyUFr.js";import"./status-EdzG58Fr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,c=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-flex shrink-0 items-center justify-center text-accent","aria-hidden":!0,children:e.jsx(g,{size:22})}),e.jsx("span",{className:"text-2xl font-semibold tracking-heading-large text-primary",children:"Rove"})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(u,{action:"minimize",onClick:p()}),e.jsx(u,{action:"close",onClick:p()})]}),y={title:"App frame/TitleBar/TitleBar",component:l,subcomponents:{TitleBarStatus:t,WindowButton:u},args:{brand:c,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d},argTypes:{brand:{control:!1},status:{control:!1},controls:{control:!1}},parameters:{layout:"fullscreen",docs:{toc:f},guidance:{use:["The window’s top edge, once per window.","`TitleBarStatus` for the connection in words: “Offline”, “No internet”.","`WindowButton`s only on a frameless window."],avoid:["A page’s title and actions: use `PageHeader`.","A status anywhere else: a `StatusDot` beside its words."],accessibility:{builtIn:["A `<header>` landmark that also drags the window.",'`TitleBarStatus` is `role="status"`, so a change is read out.',"`WindowButton`s are named “Minimize” and “Close”, out of the Tab order."],toHandle:["A brand with its name as text and its mark hidden.","Status words that make sense heard alone: “No internet”."]}}},decorators:[m=>e.jsx("div",{className:"w-[545px]",children:e.jsx(m,{})})]},s={},n={args:{status:e.jsx(t,{tone:"negative",children:"No internet"})}},a={args:{status:e.jsx(t,{tone:"neutral",children:"Connecting…"})}},r={args:{status:e.jsx(t,{tone:"neutral",children:"Offline"})}},o={args:{controls:void 0}},i={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{brand:c,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d}),e.jsx(l,{brand:c,status:e.jsx(t,{tone:"negative",children:"No internet"}),controls:d}),e.jsx(l,{brand:c,status:e.jsx(t,{tone:"neutral",children:"Connecting…"}),controls:d}),e.jsx(l,{brand:c,status:e.jsx(t,{tone:"neutral",children:"Offline"})})]})},C=["Connected","NoInternet","Connecting","Offline","WithoutControls","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="negative">No internet</TitleBarStatus>
  }
}`,...n.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="neutral">Connecting…</TitleBarStatus>
  }
}`,...a.parameters?.docs?.source},description:{story:"No network info yet.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="neutral">Offline</TitleBarStatus>
  }
}`,...r.parameters?.docs?.source},description:{story:"No network at all.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    controls: undefined
  }
}`,...o.parameters?.docs?.source},description:{story:"A window with native decorations has no WindowButtons.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  // Several title bars, each a banner landmark, is this overview only; the app
  // has one.
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'landmark-no-duplicate-banner',
          enabled: false
        }, {
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: () => <div className="flex flex-col">
      <TitleBar brand={brand} status={<TitleBarStatus tone="positive">Wi‑Fi</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="negative">No internet</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="neutral">Connecting…</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="neutral">Offline</TitleBarStatus>} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every status together.",...i.parameters?.docs?.description}}};export{i as AllStates,s as Connected,a as Connecting,n as NoInternet,r as Offline,o as WithoutControls,C as __namedExportsOrder,y as default};
