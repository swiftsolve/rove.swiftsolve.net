import{G as d,j as e}from"./iframe-C5Rm1Bqa.js";import{i as a,j as m,k as u,l as h,m as p,R as j}from"./Icons-B2fY1Kre.js";import{T as t}from"./TimelineNode-HVTdF5jD.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./tint-D2V_N-nu.js";const v=["var(--status-positive)","var(--status-warning)","var(--status-negative)","var(--accent-default)","neutral"];function s({title:o,subject:c,time:l="1:24 PM"}){return e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex items-baseline gap-10",children:[e.jsx("span",{className:"type-heading min-w-0 flex-1 leading-[inherit] text-primary",children:o}),e.jsx("span",{className:"type-body shrink-0 leading-[inherit] text-tertiary",children:l})]}),e.jsx("span",{className:"type-body text-secondary",children:c})]})}const b={title:"Data display/TimelineNode",component:t,args:{color:"var(--status-positive)",icon:e.jsx(j,{size:15}),children:e.jsx(s,{title:"Device back online",subject:"iPhone"})},argTypes:{color:{control:"select",options:v},icon:{control:!1},children:{control:!1}},render:o=>e.jsx("ol",{className:"w-[360px]",children:e.jsx(t,{...o})}),parameters:{docs:{subtitle:"One event on a timeline: a tinted marker, its lines, and a line to the next.",toc:d},guidance:{whenToUse:["One event in a timeline: “Device left the network”, “Service went down”.","A day’s events in a feed, one node each under its heading."],whenNotToUse:["An item that isn’t an event: use `IconTile` in its row.","A message about the whole page: use `Banner`."],accessibility:{builtIn:["An `<li>`: in a list, screen readers count the nodes.","The marker is `aria-hidden`; the lines carry the event."],toHandle:['A `<ul role="list">` around the nodes.',"Lines that say what happened, not only colour or icon.","A `<time>` for when it happened."]}}}},i={},n={args:{color:"neutral",icon:e.jsx(a,{size:15}),children:e.jsx(s,{title:"Device left",subject:"iPhone"})}},r={render:()=>e.jsxs("ol",{className:"w-[360px]",children:[e.jsx(t,{color:"var(--status-negative)",icon:e.jsx(m,{size:15}),children:e.jsx(s,{title:"Service went down",subject:"Netflix",time:"3:10 PM"})}),e.jsx(t,{color:"var(--status-warning)",icon:e.jsx(u,{size:15}),children:e.jsx(s,{title:"New access point",subject:"Guest Wi‑Fi",time:"2:02 PM"})}),e.jsx(t,{color:"neutral",icon:e.jsx(a,{size:15}),children:e.jsx(s,{title:"Device left",subject:"iPad",time:"1:47 PM"})}),e.jsx(t,{color:"var(--status-positive)",icon:e.jsx(h,{size:15}),children:e.jsx(s,{title:"6 services running",subject:"All services healthy",time:"1:30 PM"})}),e.jsx(t,{color:"var(--accent-default)",icon:e.jsx(p,{size:15}),children:e.jsx(s,{title:"First scan",subject:"12 devices",time:"1:24 PM"})})]})},T=["Default","Neutral","Timeline"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"A recovery: the marker washed in the positive colour.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    icon: <ArrowLeftIcon size={15} />,
    children: <Lines title="Device left" subject="iPhone" />
  }
}`,...n.parameters?.docs?.source},description:{story:"A departure: a hollow ring, quiet rather than alarming.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ol className="w-[360px]">
      <TimelineNode color="var(--status-negative)" icon={<ArrowDownIcon size={15} />}>
        <Lines title="Service went down" subject="Netflix" time="3:10 PM" />
      </TimelineNode>
      <TimelineNode color="var(--status-warning)" icon={<RouterIcon size={15} />}>
        <Lines title="New access point" subject="Guest Wi‑Fi" time="2:02 PM" />
      </TimelineNode>
      <TimelineNode color="neutral" icon={<ArrowLeftIcon size={15} />}>
        <Lines title="Device left" subject="iPad" time="1:47 PM" />
      </TimelineNode>
      <TimelineNode color="var(--status-positive)" icon={<CheckIcon size={15} />}>
        <Lines title="6 services running" subject="All services healthy" time="1:30 PM" />
      </TimelineNode>
      <TimelineNode color="var(--accent-default)" icon={<SearchIcon size={15} />}>
        <Lines title="First scan" subject="12 devices" time="1:24 PM" />
      </TimelineNode>
    </ol>
}`,...r.parameters?.docs?.source},description:{story:"A day of events: the line runs from each marker to the next and ends at the last.",...r.parameters?.docs?.description}}};export{i as Default,n as Neutral,r as Timeline,T as __namedExportsOrder,b as default};
