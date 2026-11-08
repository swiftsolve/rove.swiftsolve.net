import{j as s}from"./iframe-Bkcmcwky.js";import{B as n}from"./BrandIcon-DF1kJ6zi.js";import{H as c,C as l}from"./HdStreamIcon-toxgG_k8.js";import{C as p}from"./ConnectionIcon-y6c5in2Z.js";import{D as o}from"./DirectionIcon-C6_RV0zK.js";import{I as m}from"./Icons-CrqT-bp2.js";import{U as d,S as x,P as u}from"./UltraHdStreamIcon-De6PO_hN.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";const f={BrandIcon:n,CloudGamingIcon:l,ConnectionIcon:p,"DirectionIcon down":e=>s.jsx(o,{series:"down",...e}),"DirectionIcon up":e=>s.jsx(o,{series:"up",...e}),HdStreamIcon:c,PathIcon:u,SmartHomeIcon:x,UltraHdStreamIcon:d},h=Object.entries({...m,...f}).filter(e=>typeof e[1]=="function").sort(([e],[r])=>e.localeCompare(r)),B={title:"Icons/All icons",argTypes:{size:{control:{type:"range",min:12,max:32,step:1},description:"Unset: each icon at its own default size."},className:{control:!1,description:"Its colour (`text-positive`) and place in a line. It's the text colour by default."}}},a={parameters:{layout:"padded"},render:({size:e})=>s.jsx("ul",{role:"list",className:"grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8",children:h.map(([r,i])=>s.jsxs("li",{className:"flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary",children:[s.jsx("span",{className:"flex h-[32px] items-center",children:s.jsx(i,{size:e})}),s.jsx("span",{className:"type-caption text-tertiary",children:r})]},r))})},t={render:({size:e=48})=>s.jsxs("div",{className:"flex items-center gap-20 text-accent",children:[s.jsx(n,{size:e}),s.jsx(n,{size:e,hasGradient:!0})]})},w=["Catalogue","Brand"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // Centred, the list shrinks to one column; padded, it fills the width.
  parameters: {
    layout: 'padded'
  },
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
}`,...a.parameters?.docs?.source},description:{story:"Every icon, named. Set `size` to see them all at one size.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 48
  }) => <div className="flex items-center gap-20 text-accent">
      <BrandIcon size={size} />
      <BrandIcon size={size} hasGradient />
    </div>
}`,...t.parameters?.docs?.source},description:{story:"The Rove mark in the accent colour, and with the app icon's gradient.",...t.parameters?.docs?.description}}};export{t as Brand,a as Catalogue,w as __namedExportsOrder,B as default};
