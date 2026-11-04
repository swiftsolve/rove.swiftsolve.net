import{G as u,j as a}from"./iframe-BXzSuZzq.js";import{B as h}from"./BarMeter-DAYGGc-m.js";import{C as d,a as c,b as p}from"./Card-LMX6dGm2.js";import{D as i,a as e,b as w}from"./DataList-C426_QS4.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./Icons-DVtCSASZ.js";import"./StretchedLink-CJnZPKb3.js";const m=a.jsxs(a.Fragment,{children:[a.jsx(e,{label:"Download",value:"512 Mbps"}),a.jsx(e,{label:"Upload",value:"48 Mbps"}),a.jsx(e,{label:"Latency",value:"14 ms"}),a.jsxs(e,{label:"Signal",align:"center",children:[a.jsx(h,{value:3,size:"sm",color:"var(--status-good)"}),a.jsx("span",{className:"sr-only",children:"Good"})]})]}),f={title:"Data display/DataList",component:i,args:{children:m},argTypes:{density:{control:"inline-radio",options:["default","compact"]},children:{control:!1}},render:s=>a.jsxs(d,{className:"w-[320px]",children:[a.jsx(c,{title:"Connection"}),a.jsx(p,{children:a.jsx(i,{...s})})]}),parameters:{docs:{toc:u},guidance:{use:["Labelled facts in a card: an address, a band, a speed.","Each fact a `DataRow`: its label on the left, its value on the right.","`compact` for a short list, or one repeated down a page.","Several topics in one card: a `DataList` each, in a `DataListStack`.","A row with no value and no children isn’t drawn, so a list can name every field it might have.",'A value that isn’t text (a meter, a badge) in the row’s children, with `align="center"`.',"A missing value that still needs its row: `NoValue` as the children."],avoid:["A card’s headline figure: use `Readout`.","Rows that open something: use `ListRow`.","A list of items, each its own row: use `CardList`."],accessibility:{builtIn:["A `<dl>`: each row a `<dt>` label and a `<dd>` value, read as a pair.","A row with nothing to show leaves no empty pair behind."],youHandle:["Words for a visual value: an `sr-only` word beside a `BarMeter`.","Short labels that name the value: “Gateway”, not “Your gateway’s address”."]}}}},t={},r={args:{density:"compact"}},n={args:{children:a.jsxs(a.Fragment,{children:[a.jsx(e,{label:"Address",value:"192.168.1.20"}),a.jsx(e,{label:"IPv6",value:null}),a.jsx(e,{label:"Gateway",value:"192.168.1.1"})]})}},o={render:()=>a.jsxs(d,{className:"w-[320px]",children:[a.jsx(c,{title:"Connection details"}),a.jsx(p,{layout:"flush",children:a.jsxs(w,{children:[a.jsxs(i,{children:[a.jsx(e,{label:"Network",value:"Home 5G"}),a.jsx(e,{label:"Band",value:"5 GHz"}),a.jsx(e,{label:"Channel",value:"36"})]}),a.jsxs(i,{children:[a.jsx(e,{label:"Address",value:"192.168.1.20"}),a.jsx(e,{label:"Gateway",value:"192.168.1.1"}),a.jsx(e,{label:"DNS",value:"1.1.1.1"})]})]})})]})},l={render:()=>a.jsx("div",{className:"grid grid-cols-2 items-start gap-12",children:["default","compact"].map(s=>a.jsxs(d,{className:"w-[320px]",children:[a.jsx(c,{title:s}),a.jsx(p,{children:a.jsx(i,{density:s,children:m})})]},s))})},S=["Default","Compact","MissingValue","Stack","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:'Signal\'s meter has no text baseline, so its row centres it (`align="center"`).',...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  }
}`,...r.parameters?.docs?.source},description:{story:"A list repeated down a page.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <DataRow label="Address" value="192.168.1.20" />
        <DataRow label="IPv6" value={null} />
        <DataRow label="Gateway" value="192.168.1.1" />
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:"A row with no value renders nothing, so a list can name every field it might have.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Lists grouped by topic, a hairline between them.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 items-start gap-12">
      {(['default', 'compact'] as const).map(density => <Card key={density} className="w-[320px]">
          <CardHeader title={density} />
          <CardBody>
            <DataList density={density}>{ROWS}</DataList>
          </CardBody>
        </Card>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every density side by side.",...l.parameters?.docs?.description}}};export{l as AllStates,r as Compact,t as Default,n as MissingValue,o as Stack,S as __namedExportsOrder,f as default};
