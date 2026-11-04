import{j as e,G as x}from"./iframe-CrePPxRl.js";import{D as i}from"./DirectionIcon-BUuz8a6W.js";import{b as v}from"./icon-options-DaFk-_p1.js";import{a as w,b}from"./cn-CdwUFd5Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-BbuS_MLN.js";const y=b("metric num",{variants:{size:{large:null,compact:"metric-compact"}},defaultVariants:{size:"large"}}),N=b("metric-value",{variants:{size:{large:"type-number-display",compact:"type-number-large"}},defaultVariants:{size:"large"}});function h({value:s,unit:n,spokenValue:r,size:p}){const t=r!=null;return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:N({size:p}),"aria-hidden":t||void 0,children:s}),e.jsx("span",{className:"type-body-small metric-unit","aria-hidden":t||void 0,children:n}),t&&e.jsx("span",{className:"sr-only",children:r})]})}function a({label:s,icon:n,size:r="large",className:p,...t}){const f=y({size:r});return s==null?e.jsxs("div",{className:w(f,"min-w-0",p),children:[n!=null&&e.jsx("span",{className:"metric-icon",children:n}),e.jsx(h,{size:r,...t})]}):e.jsxs("div",{className:p,children:[e.jsxs("dt",{className:"mb-8 flex items-center gap-6",children:[n,e.jsx("span",{className:"type-overline text-tertiary",children:s})]}),e.jsx("dd",{className:f,children:e.jsx(h,{size:r,...t})})]})}try{a.displayName="Readout",a.__docgenInfo={description:"A number and its unit (live speed, data used), with an optional label and\nicon. A labelled readout is a term and its description, so it goes inside a\n`<dl>`; without a label, the icon sits inline with the figure.",displayName:"Readout",filePath:"/tmp/tmp.q7TJa0gwDv/rove/src/ui/readout/Readout.tsx",methods:[],props:{value:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:'The number, formatted: "182", "4.6".',name:"value",required:!0,tags:{},type:{name:"string"}},unit:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:'After the number, smaller: "Mbps", "GB".',name:"unit",required:!0,tags:{},type:{name:"string"}},spokenValue:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:`What a screen reader hears instead, when the visible number is animating
("182 Mbps" while the digits still count up to it).`,name:"spokenValue",required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:'Names the figure ("Download", "Data used"). With one, render the readout inside a `<dl>`.',name:"label",required:!1,tags:{},type:{name:"string"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:"An icon: before the label, or before the figure when there's no label.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},size:{defaultValue:{value:"large"},declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:"`compact` for a summary card's figure, which has no label.",name:"size",required:!1,tags:{},type:{name:"enum",raw:'VariantOf<(props?: (ConfigVariants<{ size: { large: null; compact: string; }; }> & ClassProp)) => string, "size"> | undefined',value:[{value:'"compact"'},{value:'"large"'}]}},className:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:"Its place in a layout: `min-w-0 flex-1` to share a row with other readouts.",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const j=v(14,{"Direction down":e.jsx(i,{series:"down"}),"Direction up":e.jsx(i,{series:"up"})}),T={title:"Data display/Readout",component:a,args:{label:"Download",icon:"Direction down",value:"182",unit:"Mbps"},argTypes:{icon:j},render:s=>e.jsx("dl",{children:e.jsx(a,{...s})}),parameters:{docs:{toc:x},guidance:{use:["A headline figure and its unit: live speed, data used.","Labelled pairs side by side: Traffic’s “Download” and “Upload”.","`compact`, with no label, for a Home stat card’s figure."],avoid:["A value in a list of facts: use `DataRow`.","A number inside a line of text, easing each poll: use `MetricValue`."],accessibility:{builtIn:["Labelled, a `<dt>` and `<dd>`, read as a pair.","With `spokenValue`, the moving digits are hidden and it’s read instead."],toHandle:["A `<dl>` around labelled readouts.","A `spokenValue` while the figure animates.","With no label, a title nearby that says what the figure is."]}}}},o={},m={args:{label:"Upload",icon:"Direction up",value:"24.6"}},g={args:{label:"Data used",icon:void 0,value:"4.6",unit:"GB"}},l={args:{value:"96",spokenValue:"182 Mbps"}},d={args:{label:void 0},render:s=>e.jsx(a,{...s})},c={args:{label:void 0,size:"compact",icon:e.jsx(i,{series:"down",size:12}),value:"4.6",unit:"GB"},render:s=>e.jsx(a,{...s})},u={render:()=>e.jsxs("div",{className:"flex w-[480px] flex-col gap-20",children:[e.jsxs("dl",{className:"flex gap-20",children:[e.jsx(a,{className:"min-w-0 flex-1",label:"Download",icon:e.jsx(i,{series:"down"}),value:"182",unit:"Mbps"}),e.jsx(a,{className:"min-w-0 flex-1",label:"Upload",icon:e.jsx(i,{series:"up"}),value:"24.6",unit:"Mbps"}),e.jsx(a,{className:"min-w-0 flex-1",label:"Data used",value:"4.6",unit:"GB"})]}),e.jsxs("div",{className:"flex items-baseline gap-20",children:[e.jsx(a,{value:"182",unit:"Mbps"}),e.jsx(a,{size:"compact",icon:e.jsx(i,{series:"down",size:12}),value:"4.6",unit:"GB"}),e.jsx(a,{size:"compact",value:"12",unit:"ms"})]})]})},I=["Download","Upload","WithoutIcon","SpokenApart","Unlabelled","Compact","AllStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"Live speed, its direction arrow before the label.",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload',
    icon: 'Direction up',
    value: '24.6'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Data used',
    icon: undefined,
    value: '4.6',
    unit: 'GB'
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '96',
    spokenValue: '182 Mbps'
  }
}`,...l.parameters?.docs?.source},description:{story:"Mid count-up: the digits show 96, a screen reader hears the settled 182 Mbps.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  },
  render: args => <Readout {...args} />
}`,...d.parameters?.docs?.source},description:{story:"No label: the icon sits inline with the figure.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    size: 'compact',
    icon: <DirectionIcon series="down" size={12} />,
    value: '4.6',
    unit: 'GB'
  },
  render: args => <Readout {...args} />
}`,...c.parameters?.docs?.source},description:{story:"A summary card's figure.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Labelled readouts in a list, then unlabelled ones at both sizes.",...u.parameters?.docs?.description}}};export{u as AllStates,c as Compact,o as Download,l as SpokenApart,d as Unlabelled,m as Upload,g as WithoutIcon,I as __namedExportsOrder,T as default};
