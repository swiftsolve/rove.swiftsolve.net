import{G as d,j as s,r as m}from"./iframe-B3mq6C2n.js";import{S as p}from"./SplitBar-oxnyfR1g.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CICwuVeI.js";const c=[{name:"Busiest",down:840,up:160},{name:"Mostly up",down:90,up:410},{name:"Down only",down:250,up:0},{name:"Quiet",down:20,up:10},{name:"Idle",down:0,up:0}],r=1e3,h={title:"Data display/SplitBar",component:p,args:{down:620,up:180,max:r,label:"620 MB down, 180 MB up",className:"w-[320px]"},argTypes:{down:{control:{type:"range",min:0,max:r,step:10}},up:{control:{type:"range",min:0,max:r,step:10}}},parameters:{docs:{subtitle:"A thin bar split into download and upload, against a shared maximum.",toc:d},guidance:{whenToUse:["Download and upload in proportion, in a usage row.","Rows compared with each other, every bar scaled to the busiest row."],whenNotToUse:["A rating or signal: use `BarMeter`.","A single headline amount: use `Readout`."],accessibility:{builtIn:['An image to screen readers (`role="img"`), named by `label`.'],toHandle:["A `label` that says both amounts, down then up.","Figures beside it: colour alone doesn’t say which segment is which."]}}}},e={},a={args:{down:0,up:0,label:"Nothing transferred"}},t={render:()=>s.jsx("div",{className:"grid grid-cols-[max-content_320px] items-center gap-x-16 gap-y-12",children:c.map(({name:n,down:o,up:i})=>s.jsxs(m.Fragment,{children:[s.jsx("span",{className:"type-caption text-tertiary",children:n}),s.jsx(p,{down:o,up:i,max:r,label:`${o} MB down, ${i} MB up`})]},n))})},y=["Default","Empty","AllStates"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A usage row's bar: download, then upload, against the list's busiest row.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    down: 0,
    up: 0,
    label: 'Nothing transferred'
  }
}`,...a.parameters?.docs?.source},description:{story:"Nothing moved yet: just the empty track.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () =>
  // A grid, so the bars start in one column whatever the name's width.
  <div className="grid grid-cols-[max-content_320px] items-center gap-x-16 gap-y-12">
      {ROWS.map(({
      name,
      down,
      up
    }) => <Fragment key={name}>
          <span className="type-caption text-tertiary">{name}</span>
          <SplitBar down={down} up={up} max={MAX} label={\`\${down} MB down, \${up} MB up\`} />
        </Fragment>)}
    </div>
}`,...t.parameters?.docs?.source},description:{story:"A list's bars, scaled to one max so they compare at a glance.",...t.parameters?.docs?.description}}};export{t as AllStates,e as Default,a as Empty,y as __namedExportsOrder,h as default};
