import{G as h,j as e}from"./iframe-DGYPmf4B.js";import{B as f}from"./BrandIcon-SDdI6a8V.js";import{T as t}from"./TitleBarStatus-BM-ufDxE.js";import{W as u}from"./WindowButton-NoA35aLG.js";import{T as l}from"./TitleBar-R_XFszYX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StatusDot-CqdHBN2W.js";import"./cn-B7OrgygE.js";import"./status-EdzG58Fr.js";import"./Icons-PYAiHy-m.js";import"./layers-D5UzyUFr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,c=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-flex shrink-0 translate-y-px items-center justify-center text-accent","aria-hidden":!0,children:e.jsx(f,{size:22})}),e.jsx("span",{className:"type-title leading-body text-primary",children:"Rove"})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(u,{action:"minimize",onClick:p()}),e.jsx(u,{action:"close",onClick:p()})]}),C={title:"App frame/TitleBar/TitleBar",component:l,subcomponents:{TitleBarStatus:t,WindowButton:u},args:{brand:c,status:e.jsx(t,{tone:"positive",children:"Online"}),controls:d},argTypes:{brand:{control:!1},status:{control:!1},controls:{control:!1}},parameters:{layout:"fullscreen",docs:{subtitle:"The bar across the window’s top: brand, connection status and window buttons.",toc:h},guidance:{whenToUse:["The window’s top edge, once per window.","The connection in words, in `TitleBarStatus`: “Offline”, “No internet”.","A frameless window, with `WindowButton`s."],whenNotToUse:["A page’s title and actions: use `PageHeader`.","A status anywhere else: use a `StatusDot` beside its words."],accessibility:{builtIn:["A `<header>` landmark that also drags the window.",'`TitleBarStatus` is `role="status"`, so a change is read out.',"`WindowButton`s are named “Minimize” and “Close”, out of the Tab order."],toHandle:["A brand with its name as text and its mark hidden.","Status words that make sense heard alone: “No internet”."]}}},decorators:[m=>e.jsx("div",{className:"w-[545px]",children:e.jsx(m,{})})]},n={},s={args:{status:e.jsx(t,{tone:"negative",children:"No internet"})}},a={args:{status:e.jsx(t,{tone:"neutral",children:"Connecting…"})}},r={args:{status:e.jsx(t,{tone:"neutral",children:"Offline"})}},o={args:{controls:void 0}},i={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{brand:c,status:e.jsx(t,{tone:"positive",children:"Online"}),controls:d}),e.jsx(l,{brand:c,status:e.jsx(t,{tone:"negative",children:"No internet"}),controls:d}),e.jsx(l,{brand:c,status:e.jsx(t,{tone:"neutral",children:"Connecting…"}),controls:d}),e.jsx(l,{brand:c,status:e.jsx(t,{tone:"neutral",children:"Offline"})})]})},k=["Connected","NoInternet","Connecting","Offline","WithoutControls","AllStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="negative">No internet</TitleBarStatus>
  }
}`,...s.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      <TitleBar brand={brand} status={<TitleBarStatus tone="positive">Online</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="negative">No internet</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="neutral">Connecting…</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="neutral">Offline</TitleBarStatus>} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every status together.",...i.parameters?.docs?.description}}};export{i as AllStates,n as Connected,a as Connecting,s as NoInternet,r as Offline,o as WithoutControls,k as __namedExportsOrder,C as default};
