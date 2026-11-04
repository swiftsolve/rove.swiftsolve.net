import{G as u,j as e}from"./iframe-C-UDFtrD.js";import{S as c}from"./StatusDot-DgqvN-m5.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const l={none:"Online",calm:"Connected",live:"Live",busy:"Scanning…"},y={title:"Status and feedback/StatusDot",component:c,args:{tone:"positive"},argTypes:{tone:{control:"inline-radio",options:["current","positive"]},pulse:{control:"inline-radio",options:[void 0,"calm","live","busy"]}},parameters:{docs:{toc:u},guidance:{use:["Beside words that state a status: a device’s Online or Offline.","Pulsing for a live or busy state: the title bar, a running scan."],avoid:["A flag beside a title: use `Badge`.","Live data in a card header: use `LiveBadge`."],accessibility:{builtIn:["Hidden from screen readers (`aria-hidden`)."],toHandle:["Words beside it that say the status on their own."]}}},render:s=>e.jsxs("span",{className:"inline-flex items-center gap-6 type-caption text-secondary",children:[e.jsx(c,{...s}),l[s.pulse??"none"]]})},r={},a={args:{pulse:"calm"}},t={args:{pulse:"live"}},n={args:{pulse:"busy"}},o={args:{tone:"current",pulse:"calm"},render:s=>e.jsxs("span",{className:"inline-flex items-center gap-6 type-caption text-warning",children:[e.jsx(c,{...s}),"Degraded"]})},i={render:()=>e.jsx("div",{className:"flex flex-col gap-12",children:[["positive","text-secondary"],["current","text-positive"],["current","text-warning"],["current","text-negative"]].map(([s,d])=>e.jsx("div",{className:`flex flex-wrap items-center gap-20 type-caption ${d}`,children:[void 0,"calm","live","busy"].map(p=>e.jsxs("span",{className:"inline-flex items-center gap-6",children:[e.jsx(c,{tone:s,pulse:p}),l[p??"none"]]},p??"none"))},d))})},f=["Default","Calm","Live","Busy","Current","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Still: a device that answered the last scan.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'calm'
  }
}`,...a.parameters?.docs?.source},description:{story:"A steady state.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'live'
  }
}`,...t.parameters?.docs?.source},description:{story:"Data streaming in.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"In its words' colour: here, amber words.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {([['positive', 'text-secondary'], ['current', 'text-positive'], ['current', 'text-warning'], ['current', 'text-negative']] as const).map(([tone, words]) => <div key={words} className={\`flex flex-wrap items-center gap-20 type-caption \${words}\`}>
          {([undefined, 'calm', 'live', 'busy'] as const).map(pulse => <span key={pulse ?? 'none'} className="inline-flex items-center gap-6">
              <StatusDot tone={tone} pulse={pulse} />
              {WORDS[pulse ?? 'none']}
            </span>)}
        </div>)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every pulse: green beside quiet words, then in the words' own colour.",...i.parameters?.docs?.description}}};export{i as AllStates,n as Busy,a as Calm,o as Current,r as Default,t as Live,f as __namedExportsOrder,y as default};
