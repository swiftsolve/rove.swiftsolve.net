import{G as d,j as e}from"./iframe-BC1pdl-x.js";import{D as i,a as r}from"./DataList-CvGOnqZt.js";import{N as a}from"./NoValue-Cw7lV1sU.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CICwuVeI.js";const x={title:"Data display/NoValue",component:a,args:{label:"None"},parameters:{docs:{subtitle:"A short drawn bar where a value is missing.",toc:d},guidance:{whenToUse:["Where a value would be but there’s none: not measured, unknown.","A value the formatter returns as null: `?? <NoValue />`."],whenNotToUse:["A field that may not apply: use `DataRow` with a null value.","A section with nothing to show: use `EmptyState`.","A page still loading: use `LoadingState`."],accessibility:{builtIn:["The bar is `aria-hidden`; screen readers hear `label` instead.","A drawn bar, not a dash, so nothing reads as “dash”."],toHandle:["A `label` that says why: “Not measured”, “Unknown”.","A label nearby, like a row’s, that says what’s missing."]}}}},s={render:n=>e.jsx("span",{className:"type-body-small text-secondary",children:e.jsx(a,{...n})})},t={render:()=>e.jsxs("div",{className:"flex w-[360px] flex-col gap-16",children:[e.jsxs(i,{children:[e.jsx(r,{label:"Gateway",value:"192.168.1.1"}),e.jsx(r,{label:"Interface",children:e.jsx(a,{})}),e.jsx(r,{label:"MAC",value:"A4:C3:F0:01:02:03"})]}),e.jsxs("dl",{className:"grid grid-cols-3 gap-16",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-label-field text-tertiary",children:"Ping"}),e.jsx("dd",{className:"type-number-default num leading-body-default text-primary",children:"12.4 ms"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-label-field text-tertiary",children:"Jitter"}),e.jsx("dd",{className:"type-number-default num leading-body-default text-primary",children:e.jsx(a,{label:"Not measured"})})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("dt",{className:"type-label-field text-tertiary",children:"Loss"}),e.jsx("dd",{className:"type-number-default num leading-body-default text-primary",children:"0%"})]})]}),e.jsx("div",{className:"metric",children:e.jsx("span",{className:"type-number-display metric-value",children:e.jsx(a,{label:"No reading"})})})]})},l={render:()=>e.jsxs("div",{className:"flex items-end gap-16 text-primary",children:[e.jsx("span",{className:"type-body-small",children:e.jsx(a,{})}),e.jsx("span",{className:"type-number-default leading-body-default",children:e.jsx(a,{label:"Not measured"})}),e.jsx("span",{className:"type-number-display",children:e.jsx(a,{label:"Not measured"})})]})},y=["Default","InContext","AllSizes"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <span className="type-body-small text-secondary">
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
          <dt className="type-label-field text-tertiary">Ping</dt>
          <dd className="type-number-default num leading-body-default text-primary">12.4 ms</dd>
        </div>
        <div className="flex flex-col gap-4">
          <dt className="type-label-field text-tertiary">Jitter</dt>
          <dd className="type-number-default num leading-body-default text-primary">
            <NoValue label="Not measured" />
          </dd>
        </div>
        <div className="flex flex-col gap-4">
          <dt className="type-label-field text-tertiary">Loss</dt>
          <dd className="type-number-default num leading-body-default text-primary">0%</dd>
        </div>
      </dl>
      <div className="metric">
        <span className="type-number-display metric-value">
          <NoValue label="No reading" />
        </span>
      </div>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Where it stands in: a data row's value, the speed test's substats and hero number.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-16 text-primary">
      <span className="type-body-small">
        <NoValue />
      </span>
      <span className="type-number-default leading-body-default">
        <NoValue label="Not measured" />
      </span>
      <span className="type-number-display">
        <NoValue label="Not measured" />
      </span>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"It scales with the text around it: a data row's value, a substat, a hero number.",...l.parameters?.docs?.description}}};export{l as AllSizes,s as Default,t as InContext,y as __namedExportsOrder,x as default};
