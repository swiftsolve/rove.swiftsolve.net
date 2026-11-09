import{j as e}from"./iframe-qq4D_QBx.js";import{B as i}from"./BrandIcon-B6qiJYFk.js";import{U as p,H as d,C as x}from"./UltraHdStreamIcon-anU7bxaQ.js";import{C as f}from"./ConnectionIcon-B-RIapvj.js";import{D as c}from"./DirectionIcon-DMg3FAQs.js";import{I as u}from"./Icons-BkWyznfl.js";import{S as h,P as g}from"./SmartHomeIcon-D_t9ICYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-BikPFUNl.js";const y={CloudGamingIcon:x,ConnectionIcon:f,"DirectionIcon down":s=>e.jsx(c,{series:"down",...s}),"DirectionIcon up":s=>e.jsx(c,{series:"up",...s}),HdStreamIcon:d,PathIcon:g,SmartHomeIcon:h,UltraHdStreamIcon:p};function l(s){return Object.entries(s).filter(a=>typeof a[1]=="function").sort(([a],[r])=>a.localeCompare(r))}const I=[{title:"Lucide",icons:l(u)},{title:"Custom",icons:l(y)}],G={title:"Icons/All icons",argTypes:{size:{control:{type:"range",min:12,max:32,step:1},description:"Unset: each icon at its own default size."},className:{control:!1,description:"Its colour (`text-positive`) and place in a line. It's the text colour by default."}}},t={parameters:{layout:"padded"},render:({size:s})=>e.jsx("div",{className:"flex flex-col gap-20",children:I.map(({title:a,icons:r})=>e.jsxs("section",{className:"flex flex-col gap-12",children:[e.jsx("h2",{className:"type-heading text-primary",children:a}),e.jsx("ul",{role:"list",className:"grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8",children:r.map(([o,m])=>e.jsxs("li",{className:"flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary",children:[e.jsx("span",{className:"flex h-[32px] items-center",children:e.jsx(m,{size:s})}),e.jsx("span",{className:"type-caption text-tertiary",children:o})]},o))})]},a))})},n={render:({size:s=48})=>e.jsxs("div",{className:"flex items-center gap-20 text-accent",children:[e.jsx(i,{size:s}),e.jsx(i,{size:s,hasGradient:!0})]})},O=["Catalogue","Brand"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // Centred, the list shrinks to one column; padded, it fills the width.
  parameters: {
    layout: 'padded'
  },
  render: ({
    size
  }) => <div className="flex flex-col gap-20">
      {GROUPS.map(({
      title,
      icons
    }) => <section key={title} className="flex flex-col gap-12">
          <h2 className="type-heading text-primary">{title}</h2>
          <ul role="list" className="grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8">
            {icons.map(([name, Icon]) => <li key={name} className="flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary">
                <span className="flex h-[32px] items-center">
                  <Icon size={size} />
                </span>
                <span className="type-caption text-tertiary">{name}</span>
              </li>)}
          </ul>
        </section>)}
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Every icon, named: Lucide's, then Rove's own. Set `size` to see them all at one size.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 48
  }) => <div className="flex items-center gap-20 text-accent">
      <BrandIcon size={size} />
      <BrandIcon size={size} hasGradient />
    </div>
}`,...n.parameters?.docs?.source},description:{story:"The Rove mark in the accent colour, and with the app icon's gradient.",...n.parameters?.docs?.description}}};export{n as Brand,t as Catalogue,O as __namedExportsOrder,G as default};
