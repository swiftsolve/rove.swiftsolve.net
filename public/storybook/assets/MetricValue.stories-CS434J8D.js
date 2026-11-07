import{G as h,j as e,r as m}from"./iframe-DlKB44lI.js";import{M as t}from"./MetricValue-DVC75xuq.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./NoValue-CyHtY4UU.js";import"./status-EdzG58Fr.js";const s=a=>`${Math.round(a)} ms`,j={title:"Data display/MetricValue",component:t,args:{value:42,format:s},argTypes:{status:{control:"inline-radio",options:[void 0,"positive","warning","negative"]},format:{control:!1}},decorators:[a=>e.jsx("span",{className:"type-body text-primary",children:e.jsx(a,{})})],parameters:{docs:{subtitle:"A number that eases to each new value, at the size of its line.",toc:h},guidance:{whenToUse:["A number that changes each poll: latency, packet loss.","A value with a healthy range, coloured by `status`: latency.","A number inside text that sets its size: a data row’s value."],whenNotToUse:["A headline figure with its unit and label: use `Readout`.","A value that never changes: use `DataRow`’s `value`."],accessibility:{builtIn:["Snaps to each new value under reduced motion.","Plain text: screen readers read the number shown.","A null `format` draws `NoValue`, heard as “None”."],toHandle:["A label around it that says what it measures.","The status in words where it matters, not only colour.","A change worth announcing, through `ScreenReaderStatus`."]}}}},r={},i={args:{status:"positive"}},c={args:{value:180,status:"warning"}},u={args:{value:900,status:"negative"}},d=[24,38,180,62,900,31];function f(a){return a<=50?"positive":a<=200?"warning":"negative"}function w(){const[a,p]=m.useState(0);m.useEffect(()=>{const v=setInterval(()=>p(g=>(g+1)%d.length),2e3);return()=>clearInterval(v)},[]);const l=d[a]??0;return e.jsx("span",{className:"type-display metric-value",children:e.jsx(t,{value:l,status:f(l),format:s})})}const o={render:()=>e.jsx(w,{})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap items-baseline gap-20",children:[e.jsx(t,{value:42,format:s}),e.jsx(t,{value:42,status:"positive",format:s}),e.jsx(t,{value:180,status:"warning",format:s}),e.jsx(t,{value:900,status:"negative",format:s})]})},N=["Default","Positive","Warning","Negative","Easing","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"No status: the value hasn't earned a colour. Change `value` to watch it ease.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'positive'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 180,
    status: 'warning'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 900,
    status: 'negative'
  }
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PollingMetric />
}`,...o.parameters?.docs?.source},description:{story:"A new poll every two seconds: it eases to each value, up or down.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-baseline gap-20">
      <MetricValue value={42} format={formatMs} />
      <MetricValue value={42} status="positive" format={formatMs} />
      <MetricValue value={180} status="warning" format={formatMs} />
      <MetricValue value={900} status="negative" format={formatMs} />
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Every status.",...n.parameters?.docs?.description}}};export{n as AllStates,r as Default,o as Easing,u as Negative,i as Positive,c as Warning,N as __namedExportsOrder,j as default};
