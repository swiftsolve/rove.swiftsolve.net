import{j as e}from"./iframe-B0v85q2s.js";import{B as f}from"./BrandIcon-BUHkW6vd.js";import{W as u,T as t,a as c}from"./TitleBar-ap8q4iOG.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-D1carl3E.js";import"./layers-D5UzyUFr.js";import"./Icons-BhIK1_hX.js";import"./StatusDot-CT-0Sw8x.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,l=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-flex shrink-0 items-center justify-center text-accent","aria-hidden":!0,children:e.jsx(f,{size:22})}),e.jsx("span",{className:"text-2xl font-semibold tracking-heading-large text-primary",children:"Rove"})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(u,{action:"minimize",onClick:p()}),e.jsx(u,{action:"close",onClick:p()})]}),v={title:"App frame/TitleBar/TitleBar",component:c,subcomponents:{TitleBarStatus:t,WindowButton:u},args:{brand:l,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d},argTypes:{brand:{control:!1},status:{control:!1},controls:{control:!1}},parameters:{layout:"fullscreen"},decorators:[m=>e.jsx("div",{className:"w-[545px]",children:e.jsx(m,{})})]},r={},s={args:{status:e.jsx(t,{tone:"negative",children:"No internet"})}},n={args:{status:e.jsx(t,{tone:"neutral",children:"Connecting…"})}},a={args:{status:e.jsx(t,{tone:"neutral",children:"Offline"})}},o={args:{controls:void 0}},i={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(c,{brand:l,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d}),e.jsx(c,{brand:l,status:e.jsx(t,{tone:"negative",children:"No internet"}),controls:d}),e.jsx(c,{brand:l,status:e.jsx(t,{tone:"neutral",children:"Connecting…"}),controls:d}),e.jsx(c,{brand:l,status:e.jsx(t,{tone:"neutral",children:"Offline"})})]})},y=["Connected","NoInternet","Connecting","Offline","WithoutControls","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="negative">No internet</TitleBarStatus>
  }
}`,...s.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="neutral">Connecting…</TitleBarStatus>
  }
}`,...n.parameters?.docs?.source},description:{story:"No network info yet.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="neutral">Offline</TitleBarStatus>
  }
}`,...a.parameters?.docs?.source},description:{story:"No network at all.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Every status together.",...i.parameters?.docs?.description}}};export{i as AllStates,r as Connected,n as Connecting,s as NoInternet,a as Offline,o as WithoutControls,y as __namedExportsOrder,v as default};
