import{j as e}from"./iframe-CSCAubCP.js";import{B as C}from"./Badge-C62GyGaA.js";import{I as g}from"./IconButton-BtPtD0nx.js";import{D as h,a as o,b as N}from"./DataList-D15E0w5v.js";import{b as w,R as b,c as R,T as L,A as D}from"./Icons-BTn1bQ7T.js";import{T as S}from"./Toggle-DcQLR6D_.js";import{c as j,d as x,b as s,a as r,C as t}from"./Card-KRNISJsS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StatusDot-DI4XNCL6.js";import"./cn-D3eiRh-a.js";import"./ButtonSpinner-Y9eS8OPu.js";import"./Tooltip-B6Y9azeB.js";import"./usePositioner-hMofDDE6.js";import"./useBaseUiId-Bkd0Q6B5.js";import"./useOpenChangeComplete-C32RriR8.js";import"./useTimeout-or5GY4K2.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-ms5KKDBk.js";import"./DirectionContext-1mNMuGWY.js";import"./pressable-n_zMMF94.js";import"./useControlled-CSXTpupv.js";import"./useLabelableId-BwF01fc8.js";import"./useButton-ODzpQFQr.js";import"./useAriaLabelledBy-D0CXupFl.js";import"./useValueChanged-DEVsQIUf.js";import"./StretchedLink-59DDMgax.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,oe={title:"Containers/Card/Card",component:t,subcomponents:{CardHeader:r,CardBody:s,CardFooter:x,CardList:j},args:{as:"section"},argTypes:{as:{control:"inline-radio",options:["section","div","li"]},onOpen:{control:!1},children:{control:!1}},decorators:[(a,{parameters:B})=>e.jsx("div",{className:B.isTwoColumns?"w-[740px]":"w-[360px]",children:e.jsx(a,{})})]},n={render:a=>e.jsxs(t,{...a,children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(w,{size:16}),actions:e.jsx(C,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(h,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(x,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"Updated 2 min ago"})})]})},i={render:a=>e.jsxs(t,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(g,{label:"Refresh",icon:b,onClick:y()})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]})},d={render:a=>e.jsxs(t,{...a,children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(u,{title:"Check automatically"}),e.jsx(u,{title:"Include betas"})]}),e.jsx(x,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"You're up to date."})})]})},c={render:a=>e.jsx(v,{...a})},l={render:()=>e.jsx(f,{})},p={render:()=>e.jsx(j,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"px-12 py-10 text-sm text-primary",children:a},a))})};function u({title:a}){return e.jsxs("div",{className:"flex items-center justify-between gap-12 py-(--row-padding-y) text-sm text-primary",children:[a,e.jsx(S,{isChecked:!0,onChange:y(),label:a})]})}function v(a){return e.jsxs(t,{...a,children:[e.jsx(r,{title:"Router",icon:e.jsx(R,{size:16})}),e.jsx(s,{layout:"flush",children:e.jsxs(N,{children:[e.jsxs(h,{density:"compact",children:[e.jsx(o,{label:"Latency",value:"4 ms"}),e.jsx(o,{label:"Jitter",value:"1 ms"})]}),e.jsxs(h,{density:"compact",children:[e.jsx(o,{label:"Gateway",value:"192.168.1.1"}),e.jsx(o,{label:"Interface",value:"en0"})]})]})})]})}function f(){return e.jsxs(t,{onOpen:y(),children:[e.jsx(r,{title:"Usage",icon:e.jsx(L,{size:16})}),e.jsx(s,{children:e.jsxs("span",{className:"inline-flex items-center gap-6 text-md text-primary","aria-hidden":!0,children:[e.jsx(D,{size:12}),"4.9 GB"]})})]})}const m={parameters:{isTwoColumns:!0},render:()=>e.jsxs("div",{className:"grid grid-cols-2 items-start gap-12",children:[e.jsxs(t,{children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(w,{size:16}),actions:e.jsx(C,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(h,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(x,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"Updated 2 min ago"})})]}),e.jsxs(t,{children:[e.jsx(r,{title:"DNS",actions:e.jsx(g,{label:"Refresh",icon:b})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]}),e.jsx(j,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"px-12 py-10 text-sm text-primary",children:a},a))}),e.jsxs(t,{children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(u,{title:"Check automatically"}),e.jsx(u,{title:"Include betas"})]}),e.jsx(x,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"You're up to date."})})]}),e.jsx(v,{}),e.jsx(f,{})]})},ne=["WithEverything","HeaderActions","RowsBody","FlushBody","Openable","List","AllStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="Wi‑Fi" icon={<WifiIcon size={16} />} actions={<Badge tone="positive">VPN</Badge>} />
      <CardBody>
        <DataList>
          <DataRow label="Address" value="192.168.1.20" />
          <DataRow label="Gateway" value="192.168.1.1" />
        </DataList>
      </CardBody>
      <CardFooter>
        <span className="text-xs text-tertiary">Updated 2 min ago</span>
      </CardFooter>
    </Card>
}`,...n.parameters?.docs?.source},description:{story:"A header with an icon and a badge, a body and a footer band.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} onClick={fn()} />} />
      <CardBody>
        <p className="text-sm text-secondary">Lookups answer in 14 ms on average.</p>
      </CardBody>
    </Card>
}`,...i.parameters?.docs?.source},description:{story:"A control at the end of the header; the row keeps its 44px height.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="Updates" />
      <CardBody layout="rows">
        <SettingRow title="Check automatically" />
        <SettingRow title="Include betas" />
      </CardBody>
      <CardFooter>
        <span className="text-xs text-tertiary">You're up to date.</span>
      </CardFooter>
    </Card>
}`,...d.parameters?.docs?.source},description:{story:"Rows that carry their own vertical padding sit in a `rows` body; a footer below gets 12px of air.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <RouterCard {...args} />
}`,...c.parameters?.docs?.source},description:{story:"A `flush` body for a DataListStack, whose hairlines run to the card's sides.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <OpenableCard />
}`,...l.parameters?.docs?.source},description:{story:"With `onOpen` the whole card is a link: its header ends in a caret, and it lifts on hover and presses in.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CardList label="Devices">
      {['MacBook Pro', 'Living room TV', 'Pixel 8'].map(name => <li key={name} className="px-12 py-10 text-sm text-primary">
          {name}
        </li>)}
    </CardList>
}`,...p.parameters?.docs?.source},description:{story:"CardList: a list that is one card, with a hairline between its rows.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    isTwoColumns: true
  },
  render: () =>
  // Each card at its own height, not stretched to its row's tallest.
  <div className="grid grid-cols-2 items-start gap-12">
      <Card>
        <CardHeader title="Wi‑Fi" icon={<WifiIcon size={16} />} actions={<Badge tone="positive">VPN</Badge>} />
        <CardBody>
          <DataList>
            <DataRow label="Address" value="192.168.1.20" />
            <DataRow label="Gateway" value="192.168.1.1" />
          </DataList>
        </CardBody>
        <CardFooter>
          <span className="text-xs text-tertiary">Updated 2 min ago</span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} />} />
        <CardBody>
          <p className="text-sm text-secondary">Lookups answer in 14 ms on average.</p>
        </CardBody>
      </Card>
      <CardList label="Devices">
        {['MacBook Pro', 'Living room TV', 'Pixel 8'].map(name => <li key={name} className="px-12 py-10 text-sm text-primary">
            {name}
          </li>)}
      </CardList>
      <Card>
        <CardHeader title="Updates" />
        <CardBody layout="rows">
          <SettingRow title="Check automatically" />
          <SettingRow title="Include betas" />
        </CardBody>
        <CardFooter>
          <span className="text-xs text-tertiary">You're up to date.</span>
        </CardFooter>
      </Card>
      <RouterCard />
      <OpenableCard />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Every form together.",...m.parameters?.docs?.description}}};export{m as AllStates,c as FlushBody,i as HeaderActions,p as List,l as Openable,d as RowsBody,n as WithEverything,ne as __namedExportsOrder,oe as default};
