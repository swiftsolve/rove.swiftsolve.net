import{j as e}from"./iframe-rBHxdIey.js";import{B as f}from"./BrandIcon-CPLnFIW-.js";import{W as u,T as t,a as i}from"./TitleBar-Cm5A_Hus.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-D1carl3E.js";import"./layers-D5UzyUFr.js";import"./Icons-BNKO3jID.js";import"./StatusDot-Do7pRXna.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,c=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-flex shrink-0 items-center justify-center text-accent","aria-hidden":!0,children:e.jsx(f,{size:22})}),e.jsx("span",{className:"text-2xl font-semibold tracking-heading-large text-primary",children:"Rove"})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(u,{action:"minimize",onClick:p()}),e.jsx(u,{action:"close",onClick:p()})]}),v={title:"App frame/TitleBar/TitleBar",component:i,subcomponents:{TitleBarStatus:t,WindowButton:u},args:{brand:c,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d},argTypes:{brand:{control:!1},status:{control:!1},controls:{control:!1}},parameters:{layout:"fullscreen"},decorators:[m=>e.jsx("div",{className:"w-[545px]",children:e.jsx(m,{})})]},s={},n={args:{status:e.jsx(t,{tone:"negative",children:"No internet"})}},r={args:{status:e.jsx(t,{tone:"neutral",children:"Connecting…"})}},l={args:{status:e.jsx(t,{tone:"neutral",children:"Offline"})}},a={args:{controls:void 0}},o={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(i,{brand:c,status:e.jsx(t,{tone:"positive",children:"Wi‑Fi"}),controls:d}),e.jsx(i,{brand:c,status:e.jsx(t,{tone:"negative",children:"No internet"}),controls:d}),e.jsx(i,{brand:c,status:e.jsx(t,{tone:"neutral",children:"Connecting…"}),controls:d}),e.jsx(i,{brand:c,status:e.jsx(t,{tone:"neutral",children:"Offline"})})]})},y=["Connected","NoInternet","Connecting","Offline","WithoutControls","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Online: the dot pulses green.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="negative">No internet</TitleBarStatus>
  }
}`,...n.parameters?.docs?.source},description:{story:"Connected, but the internet is down.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="neutral">Connecting…</TitleBarStatus>
  }
}`,...r.parameters?.docs?.source},description:{story:"No network info yet.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: <TitleBarStatus tone="neutral">Offline</TitleBarStatus>
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    controls: undefined
  }
}`,...a.parameters?.docs?.source},description:{story:"A window with native decorations has no WindowButtons.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // Several headers on one page is this overview only; the app has one.
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
}`,...o.parameters?.docs?.source},description:{story:"Every status together.",...o.parameters?.docs?.description}}};export{o as AllStates,s as Connected,r as Connecting,n as NoInternet,l as Offline,a as WithoutControls,y as __namedExportsOrder,v as default};
