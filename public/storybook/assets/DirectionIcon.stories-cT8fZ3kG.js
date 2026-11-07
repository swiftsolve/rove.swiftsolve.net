import{j as e}from"./iframe-CC20Qc84.js";import{D as t}from"./DirectionIcon-nuthfDVY.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./Icons-jdHWe0eC.js";const p=[["down","Download","412 Mbps"],["up","Upload","38 Mbps"]],x={title:"Icons/DirectionIcon",component:t,args:{series:"down"},argTypes:{series:{control:"inline-radio",options:["down","up"]},size:{control:{type:"range",min:10,max:32,step:1}}}},s={},r={args:{series:"up"}},a={render:()=>e.jsx("dl",{className:"flex gap-20",children:p.map(([o,n,i])=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("dt",{className:"flex items-center gap-6",children:[e.jsx(t,{series:o}),e.jsx("span",{className:"type-body-medium text-tertiary",children:n})]}),e.jsx("dd",{className:"type-body text-primary",children:i})]},o))})},y=["Download","Upload","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Blue, pointing down.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    series: 'up'
  }
}`,...r.parameters?.docs?.source},description:{story:"Purple, pointing up.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <dl className="flex gap-20">
      {READOUTS.map(([series, label, value]) => <div key={series} className="flex flex-col gap-8">
          <dt className="flex items-center gap-6">
            <DirectionIcon series={series} />
            <span className="type-body-medium text-tertiary">{label}</span>
          </dt>
          <dd className="type-body text-primary">{value}</dd>
        </div>)}
    </dl>
}`,...a.parameters?.docs?.source},description:{story:"Both, marking a speed test's readouts.",...a.parameters?.docs?.description}}};export{a as AllStates,s as Download,r as Upload,y as __namedExportsOrder,x as default};
