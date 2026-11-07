import{G as u,j as e}from"./iframe-CC20Qc84.js";import{S as c}from"./StatusDot-BRX100HU.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";const l={none:"Online",calm:"Connected",live:"Live",busy:"Scanning…"},v={title:"Status and feedback/StatusDot",component:c,args:{tone:"positive"},argTypes:{tone:{control:"inline-radio",options:["current","positive","accent"]},pulse:{control:"inline-radio",options:[void 0,"calm","live","busy"]}},parameters:{docs:{subtitle:"A small coloured dot beside the words of a status.",toc:u},guidance:{whenToUse:["A status in the words beside it: a device’s Online or Offline.","A live or busy state, pulsing: the title bar, a running scan."],whenNotToUse:["A flag beside a title: use `Badge`.","Live data in a card header: use `LiveBadge`."],accessibility:{builtIn:["Hidden from screen readers (`aria-hidden`)."],toHandle:["Words beside it that say the status on their own."]}}},render:s=>e.jsxs("span",{className:"type-caption inline-flex items-center gap-6 text-secondary",children:[e.jsx(c,{...s}),l[s.pulse??"none"]]})},t={},a={args:{pulse:"calm"}},r={args:{pulse:"live"}},n={args:{tone:"accent",pulse:"busy"}},o={args:{tone:"current",pulse:"calm"},render:s=>e.jsxs("span",{className:"type-caption inline-flex items-center gap-6 text-warning",children:[e.jsx(c,{...s}),"Degraded"]})},i={render:()=>e.jsx("div",{className:"flex flex-col gap-12",children:[["positive","text-secondary"],["accent","text-secondary"],["current","text-positive"],["current","text-warning"],["current","text-negative"]].map(([s,p])=>e.jsx("div",{className:`type-caption flex flex-wrap items-center gap-20 ${p}`,children:[void 0,"calm","live","busy"].map(d=>e.jsxs("span",{className:"inline-flex items-center gap-6",children:[e.jsx(c,{tone:s,pulse:d}),l[d??"none"]]},d??"none"))},s+p))})},f=["Default","Calm","Live","Busy","Current","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Still: a device that answered the last scan.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'calm'
  }
}`,...a.parameters?.docs?.source},description:{story:"A steady state.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'live'
  }
}`,...r.parameters?.docs?.source},description:{story:"Data streaming in.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'accent',
    pulse: 'busy'
  }
}`,...n.parameters?.docs?.source},description:{story:"Work under way, in the accent: a scan is activity, not health.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'current',
    pulse: 'calm'
  },
  render: args => <span className="type-caption inline-flex items-center gap-6 text-warning">
      <StatusDot {...args} />
      Degraded
    </span>
}`,...o.parameters?.docs?.source},description:{story:"In its words' colour: here, amber words.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {([['positive', 'text-secondary'], ['accent', 'text-secondary'], ['current', 'text-positive'], ['current', 'text-warning'], ['current', 'text-negative']] as const).map(([tone, words]) => <div key={tone + words} className={\`type-caption flex flex-wrap items-center gap-20 \${words}\`}>
          {([undefined, 'calm', 'live', 'busy'] as const).map(pulse => <span key={pulse ?? 'none'} className="inline-flex items-center gap-6">
              <StatusDot tone={tone} pulse={pulse} />
              {WORDS[pulse ?? 'none']}
            </span>)}
        </div>)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every pulse: green, then the accent, beside quiet words, then in the words' own colour.",...i.parameters?.docs?.description}}};export{i as AllStates,n as Busy,a as Calm,o as Current,t as Default,r as Live,f as __namedExportsOrder,v as default};
