import{G as u,j as a}from"./iframe-CyvQ3Qzf.js";import{B as x}from"./BarMeter-gK09ClfZ.js";import{C as d,a as c,b as p}from"./Card-DnLLstO0.js";import{D as i,a as e,b as h}from"./DataList-CrPk2V-O.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./Icons-BfRyCav2.js";import"./StretchedLink-DGXdOqlR.js";const m=a.jsxs(a.Fragment,{children:[a.jsx(e,{label:"Download",value:"512 Mbps"}),a.jsx(e,{label:"Upload",value:"48 Mbps"}),a.jsx(e,{label:"Latency",value:"14 ms"}),a.jsxs(e,{label:"Signal",align:"center",children:[a.jsx(x,{value:3,size:"sm",color:"var(--status-good)"}),a.jsx("span",{className:"sr-only",children:"Good"})]})]}),S={title:"Data display/DataList",component:i,args:{children:m},argTypes:{density:{control:"inline-radio",options:["default","compact"]},children:{control:!1}},render:s=>a.jsxs(d,{className:"w-[320px]",children:[a.jsx(c,{title:"Connection"}),a.jsx(p,{children:a.jsx(i,{...s})})]}),parameters:{docs:{toc:u},guidance:{use:["Labelled facts in a card: “Gateway”, “Band”, “Link speed”.","Several topics in one card: a `DataList` each, in a `DataListStack`.","A missing value that keeps its row: `NoValue` as the children."],avoid:["A card’s headline figure: use `Readout`.","Rows that open something: use `ListRow`."],accessibility:{builtIn:["A `<dl>`: each row a `<dt>` label and a `<dd>` value.","An empty row isn’t rendered, so no label is read alone."],toHandle:["Words for a value that isn’t text, like a meter’s `aria-label`."]}}}},t={},r={args:{density:"compact"}},l={args:{children:a.jsxs(a.Fragment,{children:[a.jsx(e,{label:"Address",value:"192.168.1.20"}),a.jsx(e,{label:"IPv6",value:null}),a.jsx(e,{label:"Gateway",value:"192.168.1.1"})]})}},n={render:()=>a.jsxs(d,{className:"w-[320px]",children:[a.jsx(c,{title:"Connection details"}),a.jsx(p,{layout:"flush",children:a.jsxs(h,{children:[a.jsxs(i,{children:[a.jsx(e,{label:"Network",value:"Home 5G"}),a.jsx(e,{label:"Band",value:"5 GHz"}),a.jsx(e,{label:"Channel",value:"36"})]}),a.jsxs(i,{children:[a.jsx(e,{label:"Address",value:"192.168.1.20"}),a.jsx(e,{label:"Gateway",value:"192.168.1.1"}),a.jsx(e,{label:"DNS",value:"1.1.1.1"})]})]})})]})},o={render:()=>a.jsx("div",{className:"grid grid-cols-2 items-start gap-12",children:["default","compact"].map(s=>a.jsxs(d,{className:"w-[320px]",children:[a.jsx(c,{title:s}),a.jsx(p,{children:a.jsx(i,{density:s,children:m})})]},s))})},L=["Default","Compact","MissingValue","Stack","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:'Signal\'s meter has no text baseline, so its row centres it (`align="center"`).',...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  }
}`,...r.parameters?.docs?.source},description:{story:"A list repeated down a page.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <DataRow label="Address" value="192.168.1.20" />
        <DataRow label="IPv6" value={null} />
        <DataRow label="Gateway" value="192.168.1.1" />
      </>
  }
}`,...l.parameters?.docs?.source},description:{story:"A row with no value renders nothing, so a list can name every field it might have.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[320px]">
      <CardHeader title="Connection details" />
      <CardBody layout="flush">
        <DataListStack>
          <DataList>
            <DataRow label="Network" value="Home 5G" />
            <DataRow label="Band" value="5 GHz" />
            <DataRow label="Channel" value="36" />
          </DataList>
          <DataList>
            <DataRow label="Address" value="192.168.1.20" />
            <DataRow label="Gateway" value="192.168.1.1" />
            <DataRow label="DNS" value="1.1.1.1" />
          </DataList>
        </DataListStack>
      </CardBody>
    </Card>
}`,...n.parameters?.docs?.source},description:{story:"Lists grouped by topic, a hairline between them.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 items-start gap-12">
      {(['default', 'compact'] as const).map(density => <Card key={density} className="w-[320px]">
          <CardHeader title={density} />
          <CardBody>
            <DataList density={density}>{ROWS}</DataList>
          </CardBody>
        </Card>)}
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Every density side by side.",...o.parameters?.docs?.description}}};export{o as AllStates,r as Compact,t as Default,l as MissingValue,n as Stack,L as __namedExportsOrder,S as default};
