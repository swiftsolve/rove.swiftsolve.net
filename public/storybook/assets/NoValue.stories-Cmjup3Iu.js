import{G as d,j as e}from"./iframe-BXzSuZzq.js";import{D as i,a as n}from"./DataList-C426_QS4.js";import{N as a}from"./NoValue-BgKIMIvW.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const u={title:"Data display/NoValue",component:a,args:{label:"None"},parameters:{docs:{toc:d},guidance:{use:["Where a value would be but there’s none: not measured, unknown.","In place of whatever a formatter returned null for.","Any size of line: a data row, a substat, a hero number."],avoid:["A field that may not apply at all: leave the `DataRow`’s value null, and the row isn’t drawn.","A section with nothing to show: use `EmptyState`.","A page still loading: use `LoadingState`.","A zero: it’s a value, so show it."],accessibility:{builtIn:["The bar is hidden. Screen readers hear `label` in its place.","No dash character, so nothing reads out as “dash”."],youHandle:["A `label` that says why: “Not measured”, “Unknown”.","A label nearby, like a row’s, that says what’s missing."]}}}},s={render:l=>e.jsx("span",{className:"text-sm text-secondary",children:e.jsx(a,{...l})})},t={render:()=>e.jsxs("div",{className:"flex w-[360px] flex-col gap-16",children:[e.jsxs(i,{children:[e.jsx(n,{label:"Gateway",value:"192.168.1.1"}),e.jsx(n,{label:"Interface",children:e.jsx(a,{})}),e.jsx(n,{label:"MAC",value:"A4:C3:F0:01:02:03"})]}),e.jsxs("dl",{className:"grid grid-cols-3 gap-16",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-overline text-tertiary",children:"Ping"}),e.jsx("dd",{className:"num text-md font-medium text-primary",children:"12.4 ms"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-overline text-tertiary",children:"Jitter"}),e.jsx("dd",{className:"num text-md font-medium text-primary",children:e.jsx(a,{label:"Not measured"})})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-overline text-tertiary",children:"Loss"}),e.jsx("dd",{className:"num text-md font-medium text-primary",children:"0%"})]})]}),e.jsx("div",{className:"metric",children:e.jsx("span",{className:"type-number-display metric-value",children:e.jsx(a,{label:"No reading"})})})]})},r={render:()=>e.jsxs("div",{className:"flex items-end gap-16 text-primary",children:[e.jsx("span",{className:"text-sm",children:e.jsx(a,{})}),e.jsx("span",{className:"text-md font-medium",children:e.jsx(a,{label:"Not measured"})}),e.jsx("span",{className:"type-number-display",children:e.jsx(a,{label:"Not measured"})})]})},N=["Default","InContext","AllSizes"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <span className="text-sm text-secondary">
      <NoValue {...args} />
    </span>
}`,...s.parameters?.docs?.source},description:{story:"In a line of body text.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-[360px] flex-col gap-16">
      <DataList>
        <DataRow label="Gateway" value="192.168.1.1" />
        <DataRow label="Interface">
          <NoValue />
        </DataRow>
        <DataRow label="MAC" value="A4:C3:F0:01:02:03" />
      </DataList>
      <dl className="grid grid-cols-3 gap-16">
        <div className="flex flex-col gap-4">
          <dt className="type-overline text-tertiary">Ping</dt>
          <dd className="num text-md font-medium text-primary">12.4 ms</dd>
        </div>
        <div className="flex flex-col gap-4">
          <dt className="type-overline text-tertiary">Jitter</dt>
          <dd className="num text-md font-medium text-primary">
            <NoValue label="Not measured" />
          </dd>
        </div>
        <div className="flex flex-col gap-4">
          <dt className="type-overline text-tertiary">Loss</dt>
          <dd className="num text-md font-medium text-primary">0%</dd>
        </div>
      </dl>
      <div className="metric">
        <span className="type-number-display metric-value">
          <NoValue label="No reading" />
        </span>
      </div>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Where it stands in: a data row's value, the speed test's substats and hero number.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-16 text-primary">
      <span className="text-sm">
        <NoValue />
      </span>
      <span className="text-md font-medium">
        <NoValue label="Not measured" />
      </span>
      <span className="type-number-display">
        <NoValue label="Not measured" />
      </span>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"It scales with the text around it: a data row's value, a substat, a hero number.",...r.parameters?.docs?.description}}};export{r as AllSizes,s as Default,t as InContext,N as __namedExportsOrder,u as default};
