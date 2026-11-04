import{j as s}from"./iframe-4-CnYKse.js";import{B as n}from"./BrandIcon-Cr8HXMR_.js";import{H as l,C as d}from"./HdStreamIcon-Bjv4tVmC.js";import{C as m}from"./ConnectionIcon-f0QpZQtj.js";import{D as i}from"./DirectionIcon-DaXSYjFu.js";import{k as p,I as x}from"./Icons-BKicTCjk.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";function o({size:e=22,className:t}){return s.jsxs(p,{size:e,className:t,children:[s.jsx("path",{d:"M10.25 14.2H3.65L8.6 6.5v11"}),s.jsx("path",{d:"M13.75 6.5v11M20.35 6.5l-6.6 7.15M16.17 11.01l4.18 6.49"})]})}try{o.displayName="UltraHdStreamIcon",o.__docgenInfo={description:`4K as bare lettering, drawn with HdStreamIcon's HD: one cap height
(y 6.5–17.5), 3.5 between letters (a stroke's width of clear space), and
Inter's skeletons (a closed 4, a K whose arm meets the stem).`,displayName:"UltraHdStreamIcon",filePath:"/tmp/tmp.O6mlx7QJhd/rove/src/ui/icons/UltraHdStreamIcon.tsx",methods:[],props:{size:{defaultValue:{value:"22"},declarations:[{fileName:"rove/src/ui/icons/Icons.tsx",name:"TypeLiteral"}],description:"Its width and height in px. Each icon has its own default.",name:"size",required:!1,tags:{},type:{name:"number"}},className:{defaultValue:null,declarations:[{fileName:"rove/src/ui/icons/Icons.tsx",name:"TypeLiteral"}],description:"Its colour (`text-positive`) and place in a line (`shrink-0`). It's the text colour by default.",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const u={BrandIcon:n,CloudGamingIcon:d,ConnectionIcon:m,"DirectionIcon down":e=>s.jsx(i,{series:"down",...e}),"DirectionIcon up":e=>s.jsx(i,{series:"up",...e}),HdStreamIcon:l,UltraHdStreamIcon:o},f=Object.entries({...x,...u}).filter(e=>typeof e[1]=="function").sort(([e],[t])=>e.localeCompare(t)),S={title:"Foundations/Icons",argTypes:{size:{control:{type:"range",min:12,max:32,step:1},description:"Unset: each icon at its own default size."},className:{control:!1,description:"Its colour (`text-positive`) and place in a line. It's the text colour by default."}}},a={render:({size:e})=>s.jsx("ul",{role:"list",className:"grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8",children:f.map(([t,c])=>s.jsxs("li",{className:"flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary",children:[s.jsx("span",{className:"flex h-[32px] items-center",children:s.jsx(c,{size:e})}),s.jsx("span",{className:"text-xs text-tertiary",children:t})]},t))})},r={render:({size:e=48})=>s.jsxs("div",{className:"flex items-center gap-20 text-accent",children:[s.jsx(n,{size:e}),s.jsx(n,{size:e,hasGradient:!0})]})},w=["Catalogue","Brand"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    size
  }) => <ul role="list" className="grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-8">
      {ICONS.map(([name, Icon]) => <li key={name} className="flex flex-col items-center gap-8 rounded-sm bg-surface px-8 py-12 text-secondary">
          <span className="flex h-[32px] items-center">
            <Icon size={size} />
          </span>
          <span className="text-xs text-tertiary">{name}</span>
        </li>)}
    </ul>
}`,...a.parameters?.docs?.source},description:{story:"Every icon, named. Set `size` to see them all at one size.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 48
  }) => <div className="flex items-center gap-20 text-accent">
      <BrandIcon size={size} />
      <BrandIcon size={size} hasGradient />
    </div>
}`,...r.parameters?.docs?.source},description:{story:"The Rove mark in the accent colour, and with the app icon's gradient.",...r.parameters?.docs?.description}}};export{r as Brand,a as Catalogue,w as __namedExportsOrder,S as default};
