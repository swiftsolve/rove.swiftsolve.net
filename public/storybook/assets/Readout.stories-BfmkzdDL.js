import{G as u,j as e}from"./iframe-DGYPmf4B.js";import{D as s}from"./DirectionIcon-SVSl_LKL.js";import{b as p}from"./icon-options-xzTf0Co2.js";import{R as a}from"./Readout-8w0ZRDK-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-B7OrgygE.js";import"./Icons-PYAiHy-m.js";const m=p(14,{"Direction down":e.jsx(s,{series:"down"}),"Direction up":e.jsx(s,{series:"up"})}),j={title:"Data display/Readout",component:a,args:{label:"Download",icon:"Direction down",value:"182",unit:"Mbps"},argTypes:{icon:m},render:n=>e.jsx("dl",{children:e.jsx(a,{...n})}),parameters:{docs:{subtitle:"A headline number and its unit, with an optional label and icon.",toc:u},guidance:{whenToUse:["A headline figure and its unit: live speed, data used.","Labelled pairs side by side, sharing the row equally: Traffic’s “Download” and “Upload”.","A Home stat card’s figure, `compact` and unlabelled."],whenNotToUse:["A value in a list of facts: use `DataRow`.","A number inside a line of text, easing each poll: use `MetricValue`."],accessibility:{builtIn:["Labelled, a `<dt>` and `<dd>`, read as a pair.","With `spokenValue`, the moving digits are hidden and it’s read instead."],toHandle:["A `<dl>` around labelled readouts.","A `spokenValue` while the figure animates.","With no label, a title nearby that says what the figure is."]}}}},o={},d={args:{label:"Upload",icon:"Direction up",value:"24.6"}},c={args:{label:"Data used",icon:void 0,value:"4.6",unit:"GB"}},r={args:{value:"96",spokenValue:"182 Mbps"}},i={args:{label:void 0},render:n=>e.jsx(a,{...n})},t={args:{label:void 0,size:"compact",icon:e.jsx(s,{series:"down",size:12}),value:"4.6",unit:"GB"},render:n=>e.jsx(a,{...n})},l={render:()=>e.jsxs("div",{className:"flex w-[480px] flex-col gap-20",children:[e.jsxs("dl",{className:"flex gap-20",children:[e.jsx(a,{className:"min-w-0 flex-1",label:"Download",icon:e.jsx(s,{series:"down"}),value:"182",unit:"Mbps"}),e.jsx(a,{className:"min-w-0 flex-1",label:"Upload",icon:e.jsx(s,{series:"up"}),value:"24.6",unit:"Mbps"}),e.jsx(a,{className:"min-w-0 flex-1",label:"Data used",value:"4.6",unit:"GB"})]}),e.jsxs("div",{className:"flex items-baseline gap-20",children:[e.jsx(a,{value:"182",unit:"Mbps"}),e.jsx(a,{size:"compact",icon:e.jsx(s,{series:"down",size:12}),value:"4.6",unit:"GB"}),e.jsx(a,{size:"compact",value:"12",unit:"ms"})]})]})},N=["Download","Upload","WithoutIcon","SpokenApart","Unlabelled","Compact","AllStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"Live speed, its direction arrow before the label.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload',
    icon: 'Direction up',
    value: '24.6'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Data used',
    icon: undefined,
    value: '4.6',
    unit: 'GB'
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: '96',
    spokenValue: '182 Mbps'
  }
}`,...r.parameters?.docs?.source},description:{story:"Mid count-up: the digits show 96, a screen reader hears the settled 182 Mbps.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  },
  render: args => <Readout {...args} />
}`,...i.parameters?.docs?.source},description:{story:"No label: the icon sits inline with the figure.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    size: 'compact',
    icon: <DirectionIcon series="down" size={12} />,
    value: '4.6',
    unit: 'GB'
  },
  render: args => <Readout {...args} />
}`,...t.parameters?.docs?.source},description:{story:"A summary card's figure.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-[480px] flex-col gap-20">
      <dl className="flex gap-20">
        <Readout className="min-w-0 flex-1" label="Download" icon={<DirectionIcon series="down" />} value="182" unit="Mbps" />
        <Readout className="min-w-0 flex-1" label="Upload" icon={<DirectionIcon series="up" />} value="24.6" unit="Mbps" />
        <Readout className="min-w-0 flex-1" label="Data used" value="4.6" unit="GB" />
      </dl>
      <div className="flex items-baseline gap-20">
        <Readout value="182" unit="Mbps" />
        <Readout size="compact" icon={<DirectionIcon series="down" size={12} />} value="4.6" unit="GB" />
        <Readout size="compact" value="12" unit="ms" />
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Labelled readouts in a list, then unlabelled ones at both sizes.",...l.parameters?.docs?.description}}};export{l as AllStates,t as Compact,o as Download,r as SpokenApart,i as Unlabelled,d as Upload,c as WithoutIcon,N as __namedExportsOrder,j as default};
