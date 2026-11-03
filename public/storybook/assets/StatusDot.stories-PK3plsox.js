import{j as e}from"./iframe-BFCGvnoX.js";import{S as i}from"./StatusDot-DYl1h8ae.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-DtcT_dLf.js";const d={none:"Online",calm:"Connected",live:"Live",busy:"Scanning…"},y={title:"Status and feedback/StatusDot",component:i,args:{tone:"positive"},argTypes:{tone:{control:"inline-radio",options:["current","positive"]},pulse:{control:"inline-radio",options:[void 0,"calm","live","busy"]}},render:s=>e.jsxs("span",{className:"inline-flex items-center gap-6 type-caption text-secondary",children:[e.jsx(i,{...s}),d[s.pulse??"none"]]})},r={},t={args:{pulse:"calm"}},a={args:{pulse:"live"}},n={args:{pulse:"busy"}},o={args:{tone:"current",pulse:"calm"},render:s=>e.jsxs("span",{className:"inline-flex items-center gap-6 type-caption text-warning",children:[e.jsx(i,{...s}),"Degraded"]})},c={render:()=>e.jsx("div",{className:"flex flex-col gap-12",children:[["positive","text-secondary"],["current","text-positive"],["current","text-warning"],["current","text-negative"]].map(([s,l])=>e.jsx("div",{className:`flex flex-wrap items-center gap-20 type-caption ${l}`,children:[void 0,"calm","live","busy"].map(p=>e.jsxs("span",{className:"inline-flex items-center gap-6",children:[e.jsx(i,{tone:s,pulse:p}),d[p??"none"]]},p??"none"))},l))})},v=["Default","Calm","Live","Busy","Current","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Still: a device that answered the last scan.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'calm'
  }
}`,...t.parameters?.docs?.source},description:{story:"A steady state.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'live'
  }
}`,...a.parameters?.docs?.source},description:{story:"Data streaming in.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'busy'
  }
}`,...n.parameters?.docs?.source},description:{story:"Work under way.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'current',
    pulse: 'calm'
  },
  render: args => <span className="inline-flex items-center gap-6 type-caption text-warning">
      <StatusDot {...args} />
      Degraded
    </span>
}`,...o.parameters?.docs?.source},description:{story:"In its words' colour: here, amber words.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {([['positive', 'text-secondary'], ['current', 'text-positive'], ['current', 'text-warning'], ['current', 'text-negative']] as const).map(([tone, words]) => <div key={words} className={\`flex flex-wrap items-center gap-20 type-caption \${words}\`}>
          {([undefined, 'calm', 'live', 'busy'] as const).map(pulse => <span key={pulse ?? 'none'} className="inline-flex items-center gap-6">
              <StatusDot tone={tone} pulse={pulse} />
              {WORDS[pulse ?? 'none']}
            </span>)}
        </div>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Every pulse: green beside quiet words, then in the words' own colour.",...c.parameters?.docs?.description}}};export{c as AllStates,n as Busy,t as Calm,o as Current,r as Default,a as Live,v as __namedExportsOrder,y as default};
