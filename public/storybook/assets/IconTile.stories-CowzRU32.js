import{j as e}from"./iframe-C59GY1hh.js";import{D as f,V as d,W as x,b as I,U as z,I as h}from"./Icons-MCtIEys9.js";import{I as g,a as p}from"./IconTile-CxmOLA31.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-D3eiRh-a.js";import"./pressable-n_zMMF94.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v=["sm","md","lg"],j=["var(--status-positive)","var(--status-good)","var(--status-warning)","var(--status-poor)","var(--status-negative)","var(--series-down)","var(--series-up)","neutral"],u=Object.fromEntries(Object.entries(h).filter(s=>typeof s[1]=="function").sort(([s],[o])=>s.localeCompare(o)).map(([s,o])=>[s,e.jsx(o,{size:16},s)])),V={title:"Data display/IconTile",component:g,args:{color:"var(--status-positive)",icon:"RouterIcon"},argTypes:{size:{control:"inline-radio",options:v},color:{control:"text"},icon:{control:"select",options:Object.keys(u),mapping:u}}},r={},t={args:{size:"lg",color:"var(--status-negative)",icon:e.jsx(x,{size:18})}},a={args:{color:"neutral",icon:e.jsx(z,{size:16})}},i={args:{size:"lg",color:"var(--series-down)",icon:e.jsx(I,{size:18})}},n={render:()=>e.jsx(p,{color:"var(--status-good)",label:"Video calls: Good",onClick:m(),icon:e.jsx(d,{size:16})})},c={render:()=>e.jsx(p,{color:"neutral",label:"Video calls: Testing",onClick:m(),isDisabled:!0,icon:e.jsx(d,{size:16})})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsx("div",{className:"grid grid-cols-[repeat(8,max-content)] items-center gap-12",children:v.map(s=>j.map(o=>e.jsx(g,{size:s,color:o,icon:e.jsx(f,{size:16})},`${s}-${o}`)))}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx(p,{color:"var(--status-positive)",label:"Video calls: Excellent",onClick:m(),icon:e.jsx(d,{size:16})}),e.jsx(p,{color:"neutral",label:"Video calls: Testing",onClick:m(),isDisabled:!0,icon:e.jsx(d,{size:16})})]})]})},k=["Default","Disconnected","Neutral","Large","Button","ButtonDisabled","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A wash of the icon's own colour: a router in the device list.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    color: 'var(--status-negative)',
    icon: <WifiOffIcon size={18} />
  }
}`,...t.parameters?.docs?.source},description:{story:"An absent connection: the same wash, in the negative colour.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    icon: <UnknownDeviceIcon size={16} />
  }
}`,...a.parameters?.docs?.source},description:{story:"The sunken fill, for something uncategorised or not yet rated.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    color: 'var(--series-down)',
    icon: <WifiIcon size={18} />
  }
}`,...i.parameters?.docs?.source},description:{story:"The connection strip's tile.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IconTileButton color="var(--status-good)" label="Video calls: Good" onClick={fn()} icon={<VideoCallIcon size={16} />} />
}`,...n.parameters?.docs?.source},description:{story:"Opens what it stands for: hover deepens the tint and lifts it.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IconTileButton color="neutral" label="Video calls: Testing" onClick={fn()} isDisabled icon={<VideoCallIcon size={16} />} />
}`,...c.parameters?.docs?.source},description:{story:"Inert while a test replaces what it opens.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {/* A grid, so each colour's column lines up across sizes. */}
      <div className="grid grid-cols-[repeat(8,max-content)] items-center gap-12">
        {SIZES.map(size => COLORS.map(color => <IconTile key={\`\${size}-\${color}\`} size={size} color={color} icon={<DeviceIcon size={16} />} />))}
      </div>
      <div className="flex items-center gap-12">
        <IconTileButton color="var(--status-positive)" label="Video calls: Excellent" onClick={fn()} icon={<VideoCallIcon size={16} />} />
        <IconTileButton color="neutral" label="Video calls: Testing" onClick={fn()} isDisabled icon={<VideoCallIcon size={16} />} />
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every size in each colour the app uses, then the button form.",...l.parameters?.docs?.description}}};export{l as AllStates,n as Button,c as ButtonDisabled,r as Default,t as Disconnected,i as Large,a as Neutral,k as __namedExportsOrder,V as default};
