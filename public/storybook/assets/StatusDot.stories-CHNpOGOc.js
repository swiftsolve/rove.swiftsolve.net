import{G as m,j as s}from"./iframe-B4_x51PC.js";import{u as g}from"./use-second-ticks-DEKpihQg.js";import{S as p}from"./StatusDot-CiQ1e3Ba.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-BikPFUNl.js";const l={none:"Online",calm:"Connected",live:"Live",busy:"Scanning…"};function u(e){const d=g(),t=e.pulse==="live"?d:void 0;return s.jsx(p,{...e},t)}const b={title:"Status and feedback/StatusDot",component:p,args:{tone:"positive"},argTypes:{tone:{control:"inline-radio",options:["current","positive","accent"]},pulse:{control:"inline-radio",options:[void 0,"calm","live","busy"]}},parameters:{docs:{subtitle:"A small coloured dot beside the words of a status.",toc:m},guidance:{whenToUse:["A status in the words beside it: a device’s Online or Offline.","A live or busy state, pulsing: the title bar, a running scan."],whenNotToUse:["A flag beside a title: use `Badge`.","Live data in a card header: use `LiveBadge`."],accessibility:{builtIn:["Hidden from screen readers (`aria-hidden`)."],toHandle:["Words beside it that say the status on their own."]}}},render:e=>s.jsxs("span",{className:"type-caption inline-flex items-center gap-6 text-secondary",children:[s.jsx(u,{...e}),l[e.pulse??"none"]]})},r={},a={args:{pulse:"calm"}},n={args:{pulse:"live"}},o={args:{tone:"accent",pulse:"busy"}},i={args:{tone:"current",pulse:"calm"},render:e=>s.jsxs("span",{className:"type-caption inline-flex items-center gap-6 text-warning",children:[s.jsx(p,{...e}),"Degraded"]})},c={render:()=>s.jsx("div",{className:"flex flex-col gap-12",children:[["positive","text-secondary"],["accent","text-secondary"],["current","text-positive"],["current","text-warning"],["current","text-negative"]].map(([e,d])=>s.jsx("div",{className:`type-caption flex flex-wrap items-center gap-20 ${d}`,children:[void 0,"calm","live","busy"].map(t=>s.jsxs("span",{className:"inline-flex items-center gap-6",children:[s.jsx(u,{tone:e,pulse:t}),l[t??"none"]]},t??"none"))},e+d))})},S=["Default","Calm","Live","Busy","Current","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Still: a device that answered the last scan.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'calm'
  }
}`,...a.parameters?.docs?.source},description:{story:"A steady state: a slow, shallow breath.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: 'live'
  }
}`,...n.parameters?.docs?.source},description:{story:"Data streaming in: one quicker, deeper breath per update, here once a second.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'accent',
    pulse: 'busy'
  }
}`,...o.parameters?.docs?.source},description:{story:"Work under way, in the accent, with a quick deep throb: a scan is activity, not health.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'current',
    pulse: 'calm'
  },
  render: args => <span className="type-caption inline-flex items-center gap-6 text-warning">
      <StatusDot {...args} />
      Degraded
    </span>
}`,...i.parameters?.docs?.source},description:{story:"In its words' colour: here, amber words.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {([['positive', 'text-secondary'], ['accent', 'text-secondary'], ['current', 'text-positive'], ['current', 'text-warning'], ['current', 'text-negative']] as const).map(([tone, words]) => <div key={tone + words} className={\`type-caption flex flex-wrap items-center gap-20 \${words}\`}>
          {([undefined, 'calm', 'live', 'busy'] as const).map(pulse => <span key={pulse ?? 'none'} className="inline-flex items-center gap-6">
              <TickingStatusDot tone={tone} pulse={pulse} />
              {WORDS[pulse ?? 'none']}
            </span>)}
        </div>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Every pulse: green, then the accent, beside quiet words, then in the words' own colour.",...c.parameters?.docs?.description}}};export{c as AllStates,o as Busy,a as Calm,i as Current,r as Default,n as Live,S as __namedExportsOrder,b as default};
