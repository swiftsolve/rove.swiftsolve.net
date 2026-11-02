import{r as m,j as t}from"./iframe-DsDnSxDE.js";import{a as x}from"./index-M33yfidE.js";import{c as y}from"./cn-D3eiRh-a.js";import"./preload-helper-PPVm8Dsz.js";const w=.18,M=.05;function V(e){const[o,s]=m.useState(e),a=m.useRef(e);return m.useEffect(()=>{let n=0;const f=()=>{const g=e-a.current;if(Math.abs(g)<M){a.current=e,s(e);return}a.current+=g*w,s(a.current),n=requestAnimationFrame(f)};return n=requestAnimationFrame(f),()=>cancelAnimationFrame(n)},[e]),o}const N=x("num",{variants:{status:{positive:"text-positive",warning:"text-warning",negative:"text-negative"}}});function r({value:e,status:o,format:s,className:a}){const n=V(e);return t.jsx("span",{className:y(N({status:o}),a),children:s(n)})}try{r.displayName="MetricValue",r.__docgenInfo={description:`A numeric readout that eases toward its latest value each poll (up or down),
matching the Traffic readouts. On first paint it shows the value outright
— the ease only kicks in when a subsequent poll changes the number.`,displayName:"MetricValue",filePath:"/tmp/tmp.SZB0KCdZhq/rove/src/ui/metric-value/MetricValue.tsx",methods:[],props:{value:{defaultValue:null,declarations:[{fileName:"rove/src/ui/metric-value/MetricValue.tsx",name:"TypeLiteral"}],description:"The latest value; the figure eases toward it.",name:"value",required:!0,tags:{},type:{name:"number"}},status:{defaultValue:null,declarations:[{fileName:"rove/src/ui/metric-value/MetricValue.tsx",name:"TypeLiteral"}],description:"How healthy the value is, in the status text colours.",name:"status",required:!1,tags:{},type:{name:"enum",raw:"MetricStatus",value:[{value:'"positive"'},{value:'"warning"'},{value:'"negative"'}]}},format:{defaultValue:null,declarations:[{fileName:"rove/src/ui/metric-value/MetricValue.tsx",name:"TypeLiteral"}],description:"Turns the number, mid-ease too, into its text: `(n) => n.toFixed(1)`.",name:"format",required:!0,tags:{},type:{name:"(n: number) => string"}},className:{defaultValue:null,declarations:[{fileName:"rove/src/ui/metric-value/MetricValue.tsx",name:"TypeLiteral"}],description:"Its place in a layout: a column's width and alignment (`min-w-[46px] text-right`). It takes its size and colour from the text around it.",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const i=e=>`${Math.round(e)} ms`,T={title:"Data display/MetricValue",component:r,args:{value:42,format:i},argTypes:{status:{control:"inline-radio",options:[void 0,"positive","warning","negative"]},format:{control:!1}},decorators:[e=>t.jsx("span",{className:"type-number-default text-primary",children:t.jsx(e,{})})]},u={},p={args:{status:"positive"}},d={args:{value:180,status:"warning"}},v={args:{value:900,status:"negative"}},h=[24,38,180,62,900,31];function S(e){return e<=50?"positive":e<=200?"warning":"negative"}function j(){const[e,o]=m.useState(0);m.useEffect(()=>{const a=setInterval(()=>o(n=>(n+1)%h.length),2e3);return()=>clearInterval(a)},[]);const s=h[e]??0;return t.jsx("span",{className:"type-number-display metric-value",children:t.jsx(r,{value:s,status:S(s),format:i})})}const c={render:()=>t.jsx(j,{})},l={render:()=>t.jsxs("div",{className:"flex flex-wrap items-baseline gap-20",children:[t.jsx(r,{value:42,format:i}),t.jsx(r,{value:42,status:"positive",format:i}),t.jsx(r,{value:180,status:"warning",format:i}),t.jsx(r,{value:900,status:"negative",format:i})]})},q=["Default","Positive","Warning","Negative","Easing","AllStates"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source},description:{story:"No status: the value hasn't earned a colour. Change `value` to watch it ease.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'positive'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 180,
    status: 'warning'
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 900,
    status: 'negative'
  }
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <PollingMetric />
}`,...c.parameters?.docs?.source},description:{story:"A new poll every two seconds: it eases to each value, up or down.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-baseline gap-20">
      <MetricValue value={42} format={formatMs} />
      <MetricValue value={42} status="positive" format={formatMs} />
      <MetricValue value={180} status="warning" format={formatMs} />
      <MetricValue value={900} status="negative" format={formatMs} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every status.",...l.parameters?.docs?.description}}};export{l as AllStates,u as Default,c as Easing,v as Negative,p as Positive,d as Warning,q as __namedExportsOrder,T as default};
