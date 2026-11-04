import{j as s}from"./iframe-DFV-YtU8.js";import{B as n}from"./BrandIcon-j1Z1ah8o.js";import{H as c,C as p}from"./HdStreamIcon-CDir4ZBu.js";import{C as l}from"./ConnectionIcon-D3zbexau.js";import{D as o}from"./DirectionIcon-DUjNfsJY.js";import{I as m}from"./Icons-DTzW9d5Y.js";import{U as d}from"./UltraHdStreamIcon-BIKTy9hD.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-9A1wEaLP.js";const x={BrandIcon:n,CloudGamingIcon:p,ConnectionIcon:l,"DirectionIcon down":e=>s.jsx(o,{series:"down",...e}),"DirectionIcon up":e=>s.jsx(o,{series:"up",...e}),HdStreamIcon:c,UltraHdStreamIcon:d},u=Object.entries({...m,...x}).filter(e=>typeof e[1]=="function").sort(([e],[t])=>e.localeCompare(t)),S={title:"Foundations/Icons",argTypes:{size:{control:{type:"range",min:12,max:32,step:1},description:"Unset: each icon at its own default size."},className:{control:!1,description:"Its colour (`text-positive`) and place in a line. It's the text colour by default."}}},a={render:({size:e})=>s.jsx("ul",{role:"list",className:"grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8",children:u.map(([t,i])=>s.jsxs("li",{className:"flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary",children:[s.jsx("span",{className:"flex h-[32px] items-center",children:s.jsx(i,{size:e})}),s.jsx("span",{className:"type-caption text-tertiary",children:t})]},t))})},r={render:({size:e=48})=>s.jsxs("div",{className:"flex items-center gap-20 text-accent",children:[s.jsx(n,{size:e}),s.jsx(n,{size:e,hasGradient:!0})]})},v=["Catalogue","Brand"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    size
  }) => <ul role="list" className="grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8">
      {ICONS.map(([name, Icon]) => <li key={name} className="flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary">
          <span className="flex h-[32px] items-center">
            <Icon size={size} />
          </span>
          <span className="type-caption text-tertiary">{name}</span>
        </li>)}
    </ul>
}`,...a.parameters?.docs?.source},description:{story:"Every icon, named. Set `size` to see them all at one size.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 48
  }) => <div className="flex items-center gap-20 text-accent">
      <BrandIcon size={size} />
      <BrandIcon size={size} hasGradient />
    </div>
}`,...r.parameters?.docs?.source},description:{story:"The Rove mark in the accent colour, and with the app icon's gradient.",...r.parameters?.docs?.description}}};export{r as Brand,a as Catalogue,v as __namedExportsOrder,S as default};
