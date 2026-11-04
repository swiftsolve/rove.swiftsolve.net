import{G as g,j as e}from"./iframe-BXzSuZzq.js";import{B as h}from"./BrandIcon-CYX-mrYf.js";import{W as u,T as t,a as c}from"./TitleBar-B9aMAcoi.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./Icons-DVtCSASZ.js";import"./StatusDot-9UeNAcBG.js";import"./layers-D5UzyUFr.js";import"./status-EdzG58Fr.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,l=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-flex shrink-0 items-center justify-center text-accent","aria-hidden":!0,children:e.jsx(h,{size:22})}),e.jsx("span",{className:"text-2xl font-semibold tracking-heading-large text-primary",children:"Rove"})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(u,{action:"minimize",onClick:m()}),e.jsx(u,{action:"close",onClick:m()})]}),y={title:"App frame/TitleBar/TitleBar",component:c,subcomponents:{TitleBarStatus:t,WindowButton:u},args:{brand:l,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d},argTypes:{brand:{control:!1},status:{control:!1},controls:{control:!1}},parameters:{layout:"fullscreen",docs:{toc:g},guidance:{use:["The window’s top edge, once: brand, connection status and window controls.","A `TitleBarStatus` beside the brand: the connection, in words.","`WindowButton`s for minimise and close, on a frameless window.","Status tones: `positive` connected, `negative` connected but something’s wrong beyond the link, `neutral` connecting or offline."],avoid:["A page’s title and actions: use `PageHeader`.","Moving between pages: use `NavRail`.","A status anywhere else: a `StatusDot` beside its words."],accessibility:{builtIn:["A `<header>` landmark, which also drags the window.","`TitleBarStatus` is a status region: a change is read out.","The status dot is decorative. The words carry it.","Each `WindowButton` is a native button named “Minimize” or “Close”, out of the Tab order like a native title bar’s."],youHandle:["A brand whose name is text, its mark hidden from screen readers.","Status words that make sense alone: “No internet”, not “Error”."]}}},decorators:[p=>e.jsx("div",{className:"w-[545px]",children:e.jsx(p,{})})]},n={},s={args:{status:e.jsx(t,{tone:"negative",children:"No internet"})}},a={args:{status:e.jsx(t,{tone:"neutral",children:"Connecting…"})}},r={args:{status:e.jsx(t,{tone:"neutral",children:"Offline"})}},o={args:{controls:void 0}},i={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(c,{brand:l,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d}),e.jsx(c,{brand:l,status:e.jsx(t,{tone:"negative",children:"No internet"}),controls:d}),e.jsx(c,{brand:l,status:e.jsx(t,{tone:"neutral",children:"Connecting…"}),controls:d}),e.jsx(c,{brand:l,status:e.jsx(t,{tone:"neutral",children:"Offline"})})]})},k=["Connected","NoInternet","Connecting","Offline","WithoutControls","AllStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      <TitleBar brand={brand} status={<TitleBarStatus tone="positive">Wi‑Fi</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="negative">No internet</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="neutral">Connecting…</TitleBarStatus>} controls={controls} />
      <TitleBar brand={brand} status={<TitleBarStatus tone="neutral">Offline</TitleBarStatus>} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every status together.",...i.parameters?.docs?.description}}};export{i as AllStates,n as Connected,a as Connecting,s as NoInternet,r as Offline,o as WithoutControls,k as __namedExportsOrder,y as default};
