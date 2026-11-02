import{j as e}from"./iframe-W45tU3yU.js";import{D as t}from"./DirectionIcon-pbW0MX3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-D3eiRh-a.js";import"./Icons-DNNI0i_e.js";const x={title:"Foundations/DirectionIcon",component:t,args:{series:"down"},argTypes:{series:{control:"inline-radio",options:["down","up"]},size:{control:{type:"range",min:10,max:32,step:1}}}},s={},r={args:{series:"up"}},a={render:()=>e.jsx("dl",{className:"flex gap-20",children:[["down","Download","412 Mbps"],["up","Upload","38 Mbps"]].map(([o,n,p])=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("dt",{className:"flex items-center gap-6",children:[e.jsx(t,{series:o}),e.jsx("span",{className:"type-overline text-tertiary",children:n})]}),e.jsx("dd",{className:"type-number-default text-primary",children:p})]},o))})},g=["Download","Upload","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Blue, pointing down.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    series: 'up'
  }
}`,...r.parameters?.docs?.source},description:{story:"Purple, pointing up.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <dl className="flex gap-20">
      {([['down', 'Download', '412 Mbps'], ['up', 'Upload', '38 Mbps']] as const).map(([series, label, value]) => <div key={series} className="flex flex-col gap-8">
          <dt className="flex items-center gap-6">
            <DirectionIcon series={series} />
            <span className="type-overline text-tertiary">{label}</span>
          </dt>
          <dd className="type-number-default text-primary">{value}</dd>
        </div>)}
    </dl>
}`,...a.parameters?.docs?.source},description:{story:"Both, marking a speed test's readouts.",...a.parameters?.docs?.description}}};export{a as AllStates,s as Download,r as Upload,g as __namedExportsOrder,x as default};
