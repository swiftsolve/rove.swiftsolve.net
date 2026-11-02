import{j as e}from"./iframe-BKxkrI3Z.js";import{D as n}from"./DirectionIcon-D_liqMxn.js";import{b}from"./icon-options-KdiSXNWb.js";import{c as f}from"./cn-D3eiRh-a.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./Icons-B7PxIgz2.js";function h({value:s,unit:i,spokenValue:r,size:m}){const t=r!=null;return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:f(m==="compact"?"type-number-large":"type-number-display","metric-value"),"aria-hidden":t||void 0,children:s}),e.jsx("span",{className:"type-body-small metric-unit","aria-hidden":t||void 0,children:i}),t&&e.jsx("span",{className:"sr-only",children:r})]})}function a({label:s,icon:i,size:r="large",className:m,...t}){const g=f("metric num",r==="compact"&&"metric-compact");return s==null?e.jsxs("div",{className:f(g,"min-w-0",m),children:[i!=null&&e.jsx("span",{className:"metric-icon",children:i}),e.jsx(h,{size:r,...t})]}):e.jsxs("div",{className:m,children:[e.jsxs("dt",{className:"mb-8 flex items-center gap-6",children:[i,e.jsx("span",{className:"type-overline text-tertiary",children:s})]}),e.jsx("dd",{className:g,children:e.jsx(h,{size:r,...t})})]})}try{a.displayName="Readout",a.__docgenInfo={description:"A number and its unit (live speed, data used), with an optional label and\nicon. A labelled readout is a term and its description, so it goes inside a\n`<dl>`; without a label, the icon sits inline with the figure.",displayName:"Readout",filePath:"/tmp/tmp.33X1UsBh5e/rove/src/ui/readout/Readout.tsx",methods:[],props:{value:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"ValueParts"}],description:'The number, formatted: "182", "4.6".',name:"value",parent:{fileName:"rove/src/ui/readout/Readout.tsx",name:"ValueParts"},required:!0,tags:{},type:{name:"string"}},unit:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"ValueParts"}],description:'After the number, smaller: "Mbps", "GB".',name:"unit",parent:{fileName:"rove/src/ui/readout/Readout.tsx",name:"ValueParts"},required:!0,tags:{},type:{name:"string"}},spokenValue:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"ValueParts"}],description:`What a screen reader hears instead, when the visible number is animating
("182 Mbps" while the digits still count up to it).`,name:"spokenValue",parent:{fileName:"rove/src/ui/readout/Readout.tsx",name:"ValueParts"},required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:'Names the figure ("Download", "Data used"). With one, render the readout inside a `<dl>`.',name:"label",required:!1,tags:{},type:{name:"string"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:"An icon: before the label, or before the figure when there's no label.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},size:{defaultValue:{value:"large"},declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:"`compact` for a summary card's figure, which has no label.",name:"size",required:!1,tags:{},type:{name:"enum",raw:'"compact" | "large"',value:[{value:'"compact"'},{value:'"large"'}]}},className:{defaultValue:null,declarations:[{fileName:"rove/src/ui/readout/Readout.tsx",name:"TypeLiteral"}],description:"Its place in a layout: `min-w-0 flex-1` to share a row with other readouts.",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const v=b(14,{"Direction down":e.jsx(n,{series:"down"}),"Direction up":e.jsx(n,{series:"up"})}),M={title:"Data display/Readout",component:a,args:{label:"Download",icon:"Direction down",value:"182",unit:"Mbps"},argTypes:{icon:v},render:s=>e.jsx("dl",{children:e.jsx(a,{...s})})},o={},p={args:{label:"Upload",icon:"Direction up",value:"24.6"}},x={args:{label:"Data used",icon:void 0,value:"4.6",unit:"GB"}},l={args:{value:"96",spokenValue:"182 Mbps"}},c={args:{label:void 0},render:s=>e.jsx(a,{...s})},d={args:{label:void 0,size:"compact",icon:e.jsx(n,{series:"down",size:12}),value:"4.6",unit:"GB"},render:s=>e.jsx(a,{...s})},u={render:()=>e.jsxs("div",{className:"flex w-[480px] flex-col gap-20",children:[e.jsxs("dl",{className:"flex gap-20",children:[e.jsx(a,{className:"min-w-0 flex-1",label:"Download",icon:e.jsx(n,{series:"down"}),value:"182",unit:"Mbps"}),e.jsx(a,{className:"min-w-0 flex-1",label:"Upload",icon:e.jsx(n,{series:"up"}),value:"24.6",unit:"Mbps"}),e.jsx(a,{className:"min-w-0 flex-1",label:"Data used",value:"4.6",unit:"GB"})]}),e.jsxs("div",{className:"flex items-baseline gap-20",children:[e.jsx(a,{value:"182",unit:"Mbps"}),e.jsx(a,{size:"compact",icon:e.jsx(n,{series:"down",size:12}),value:"4.6",unit:"GB"}),e.jsx(a,{size:"compact",value:"12",unit:"ms"})]})]})},S=["Download","Upload","WithoutIcon","SpokenApart","Unlabelled","Compact","AllStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"Live speed, its direction arrow before the label.",...o.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload',
    icon: 'Direction up',
    value: '24.6'
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Data used',
    icon: undefined,
    value: '4.6',
    unit: 'GB'
  }
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '96',
    spokenValue: '182 Mbps'
  }
}`,...l.parameters?.docs?.source},description:{story:"Mid count-up: the digits show 96, a screen reader hears the settled 182 Mbps.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  },
  render: args => <Readout {...args} />
}`,...c.parameters?.docs?.source},description:{story:"No label: the icon sits inline with the figure.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    size: 'compact',
    icon: <DirectionIcon series="down" size={12} />,
    value: '4.6',
    unit: 'GB'
  },
  render: args => <Readout {...args} />
}`,...d.parameters?.docs?.source},description:{story:"A summary card's figure.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Labelled readouts in a list, then unlabelled ones at both sizes.",...u.parameters?.docs?.description}}};export{u as AllStates,d as Compact,o as Download,l as SpokenApart,c as Unlabelled,p as Upload,x as WithoutIcon,S as __namedExportsOrder,M as default};
