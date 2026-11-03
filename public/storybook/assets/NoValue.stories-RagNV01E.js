import{j as e}from"./iframe-DUVig4Wa.js";import{D as d,a as l}from"./DataList-DqG2eet6.js";import{N as a}from"./NoValue-N7YJsuT1.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const p={title:"Data display/NoValue",component:a,args:{label:"None"}},s={render:n=>e.jsx("span",{className:"text-sm text-secondary",children:e.jsx(a,{...n})})},t={render:()=>e.jsxs("div",{className:"flex w-[360px] flex-col gap-16",children:[e.jsxs(d,{children:[e.jsx(l,{label:"Gateway",value:"192.168.1.1"}),e.jsx(l,{label:"Interface",children:e.jsx(a,{})}),e.jsx(l,{label:"MAC",value:"A4:C3:F0:01:02:03"})]}),e.jsxs("dl",{className:"grid grid-cols-3 gap-16",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-overline text-tertiary",children:"Ping"}),e.jsx("dd",{className:"num text-md font-medium text-primary",children:"12.4 ms"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-overline text-tertiary",children:"Jitter"}),e.jsx("dd",{className:"num text-md font-medium text-primary",children:e.jsx(a,{label:"Not measured"})})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-overline text-tertiary",children:"Loss"}),e.jsx("dd",{className:"num text-md font-medium text-primary",children:"0%"})]})]}),e.jsx("div",{className:"metric",children:e.jsx("span",{className:"type-number-display metric-value",children:e.jsx(a,{label:"No reading"})})})]})},r={render:()=>e.jsxs("div",{className:"flex items-end gap-16 text-primary",children:[e.jsx("span",{className:"text-sm",children:e.jsx(a,{})}),e.jsx("span",{className:"text-md font-medium",children:e.jsx(a,{label:"Not measured"})}),e.jsx("span",{className:"type-number-display",children:e.jsx(a,{label:"Not measured"})})]})},u=["Default","InContext","AllSizes"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"It scales with the text around it: a data row's value, a substat, a hero number.",...r.parameters?.docs?.description}}};export{r as AllSizes,s as Default,t as InContext,u as __namedExportsOrder,p as default};
