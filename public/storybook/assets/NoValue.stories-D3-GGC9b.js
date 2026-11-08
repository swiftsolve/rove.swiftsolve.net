import{G as n,j as e}from"./iframe-Bm3I4Pgu.js";import{D as o,a as r}from"./DataList-BpxbN3wv.js";import{N as a}from"./NoValue-Bbc2wn_b.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";const x={title:"Data display/NoValue",component:a,args:{label:"None"},parameters:{docs:{subtitle:"A short drawn bar where a value is missing.",toc:n},guidance:{whenToUse:["Where a value would be but there’s none: not measured, unknown.","A value the formatter returns as null: `?? <NoValue />`."],whenNotToUse:["A field that may not apply: use `DataRow` with a null value.","A section with nothing to show: use `EmptyState`.","A page still loading: use `LoadingState`."],accessibility:{builtIn:["The bar is `aria-hidden`; screen readers hear `label` instead.","A drawn bar, not a dash, so nothing reads as “dash”."],toHandle:["A `label` that says why: “Not measured”, “Unknown”.","A label nearby, like a row’s, that says what’s missing."]}}}},s={render:d=>e.jsx("span",{className:"type-body text-secondary",children:e.jsx(a,{...d})})},t={render:()=>e.jsxs("div",{className:"flex w-[360px] flex-col gap-16",children:[e.jsxs(o,{children:[e.jsx(r,{label:"Gateway",value:"192.168.1.1"}),e.jsx(r,{label:"Interface",children:e.jsx(a,{})}),e.jsx(r,{label:"MAC",value:"A4:C3:F0:01:02:03"})]}),e.jsxs("dl",{className:"grid grid-cols-3 gap-16",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-body-medium text-tertiary",children:"Ping"}),e.jsx("dd",{className:"type-body num leading-body text-primary",children:"12.4 ms"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-body-medium text-tertiary",children:"Jitter"}),e.jsx("dd",{className:"type-body num leading-body text-primary",children:e.jsx(a,{label:"Not measured"})})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-body-medium text-tertiary",children:"Loss"}),e.jsx("dd",{className:"type-body num leading-body text-primary",children:"0%"})]})]}),e.jsx("div",{className:"metric",children:e.jsx("span",{className:"type-display metric-value",children:e.jsx(a,{label:"No reading"})})})]})},l={render:()=>e.jsxs("div",{className:"flex items-end gap-16 text-primary",children:[e.jsx("span",{className:"type-body",children:e.jsx(a,{})}),e.jsx("span",{className:"type-body leading-body",children:e.jsx(a,{label:"Not measured"})}),e.jsx("span",{className:"type-display",children:e.jsx(a,{label:"Not measured"})})]})},u=["Default","InContext","AllSizes"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <span className="type-body text-secondary">
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
          <dt className="type-body-medium text-tertiary">Ping</dt>
          <dd className="type-body num leading-body text-primary">12.4 ms</dd>
        </div>
        <div className="flex flex-col gap-4">
          <dt className="type-body-medium text-tertiary">Jitter</dt>
          <dd className="type-body num leading-body text-primary">
            <NoValue label="Not measured" />
          </dd>
        </div>
        <div className="flex flex-col gap-4">
          <dt className="type-body-medium text-tertiary">Loss</dt>
          <dd className="type-body num leading-body text-primary">0%</dd>
        </div>
      </dl>
      <div className="metric">
        <span className="type-display metric-value">
          <NoValue label="No reading" />
        </span>
      </div>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Where it stands in: a data row's value, the speed test's substats and hero number.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-16 text-primary">
      <span className="type-body">
        <NoValue />
      </span>
      <span className="type-body leading-body">
        <NoValue label="Not measured" />
      </span>
      <span className="type-display">
        <NoValue label="Not measured" />
      </span>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"It scales with the text around it: a data row's value, a substat, a hero number.",...l.parameters?.docs?.description}}};export{l as AllSizes,s as Default,t as InContext,u as __namedExportsOrder,x as default};
