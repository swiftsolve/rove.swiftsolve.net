import{j as s}from"./iframe-z7nJYRSA.js";import{B as n}from"./BrandIcon-CM8M4NFf.js";import{H as c,C as l}from"./HdStreamIcon-Bq2CxNF1.js";import{C as p}from"./ConnectionIcon-CJV9lEa0.js";import{D as o}from"./DirectionIcon-DbkgoKet.js";import{I as d}from"./Icons-jjf03Q2P.js";import{U as m}from"./UltraHdStreamIcon-nUgwKQOi.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CICwuVeI.js";const x={BrandIcon:n,CloudGamingIcon:l,ConnectionIcon:p,"DirectionIcon down":e=>s.jsx(o,{series:"down",...e}),"DirectionIcon up":e=>s.jsx(o,{series:"up",...e}),HdStreamIcon:c,UltraHdStreamIcon:m},u=Object.entries({...d,...x}).filter(e=>typeof e[1]=="function").sort(([e],[r])=>e.localeCompare(r)),S={title:"Icons/All icons",argTypes:{size:{control:{type:"range",min:12,max:32,step:1},description:"Unset: each icon at its own default size."},className:{control:!1,description:"Its colour (`text-positive`) and place in a line. It's the text colour by default."}}},t={parameters:{layout:"padded"},render:({size:e})=>s.jsx("ul",{role:"list",className:"grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8",children:u.map(([r,i])=>s.jsxs("li",{className:"flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary",children:[s.jsx("span",{className:"flex h-[32px] items-center",children:s.jsx(i,{size:e})}),s.jsx("span",{className:"type-caption text-tertiary",children:r})]},r))})},a={render:({size:e=48})=>s.jsxs("div",{className:"flex items-center gap-20 text-accent",children:[s.jsx(n,{size:e}),s.jsx(n,{size:e,hasGradient:!0})]})},v=["Catalogue","Brand"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Every icon, named. Set `size` to see them all at one size.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 48
  }) => <div className="flex items-center gap-20 text-accent">
      <BrandIcon size={size} />
      <BrandIcon size={size} hasGradient />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"The Rove mark in the accent colour, and with the app icon's gradient.",...a.parameters?.docs?.description}}};export{a as Brand,t as Catalogue,v as __namedExportsOrder,S as default};
