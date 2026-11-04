import{G as T,j as e}from"./iframe-RWCjgjma.js";import{B as A}from"./Badge-B9OTR6D1.js";import{I as f}from"./IconButton-08aiGydL.js";import{D as C,a as o,b as H}from"./DataList-BoeeClfq.js";import{b as D,R as v,c as F,T as P,A as E}from"./Icons-bkJlC8wb.js";import{T as U}from"./Toggle-Ce6U_f0Q.js";import{c as b,d as y,b as s,a as r,C as n}from"./Card-8UCvERhV.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./StatusDot-cezumTZo.js";import"./ButtonSpinner-CQ-b8E7M.js";import"./Tooltip-CvsY3PuX.js";import"./layers-D5UzyUFr.js";import"./usePositioner-BlCIaKDQ.js";import"./useBaseUiId-Dn29YJQo.js";import"./useOpenChangeComplete-dlW0hiCF.js";import"./useTimeout-D5anX_Ze.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CFrsFuXv.js";import"./DirectionContext-B-lzyrpY.js";import"./pressable-n_zMMF94.js";import"./useControlled-BYKmsrHL.js";import"./FormContext-C2VQEFjm.js";import"./useButton-CwGiK4Ez.js";import"./useAriaLabelledBy-DB8LkkNk.js";import"./useValueChanged-BTUmQRMJ.js";import"./StretchedLink-DOx6scAb.js";const{expect:i,fn:g}=__STORYBOOK_MODULE_TEST__,ue={title:"Containers/Card/Card",component:n,subcomponents:{CardHeader:r,CardBody:s,CardFooter:y,CardList:b},args:{as:"section"},argTypes:{as:{control:"inline-radio",options:["section","div","li"]},onOpen:{control:!1},children:{control:!1}},parameters:{docs:{toc:T},guidance:{use:["A panel of related facts or controls: Wi‑Fi details, DNS, a group of settings.","A summary that opens its own view, with `onOpen`.",'`CardBody layout="rows"` for setting rows, `"flush"` for a `DataListStack`.',"A `CardFooter` for a footnote or status (“Updated 2 min ago”).","`CardList` for a list that is one card."],avoid:["A message about the whole page, like an error: use `Banner`.","Nothing to show yet: use `EmptyState`.","Details shown only on request: a `Collapsible` inside the card.","A row in a card’s list that opens a view: use `ListRow`."],accessibility:{builtIn:["A `section` card is a region named by its header’s title.","Openable: one link over the whole card, named by its title, first in Tab order. Header actions still take their own clicks.","A focus ring just inside the card while its link has keyboard focus.","The header’s icon is hidden from screen readers.","`CardList` is a list, named by its `label`."],youHandle:["A title that names the card. A `section` needs a `CardHeader`.","A `linkLabel` when the title doesn’t say enough, or there’s no header.","On an openable card, raising your own controls above its link (`relative z-2`).","A `CardList` `label` that names its rows (“Devices”)."]}}},decorators:[(a,{parameters:t})=>e.jsx("div",{className:t.isTwoColumns?"w-[740px]":"w-[360px]",children:e.jsx(a,{})})]},d={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(D,{size:16}),actions:e.jsx(A,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(C,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"Updated 2 min ago"})})]})},c={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(f,{label:"Refresh",icon:v,onClick:g()})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]})},l={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(w,{title:"Check automatically"}),e.jsx(w,{title:"Include betas"})]}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"You're up to date."})})]})},p={render:a=>e.jsx(O,{...a})},m={render:()=>e.jsx(S,{})},N=g();function L(a){const t=a.getBoundingClientRect();return document.elementFromPoint(t.left+t.width/2,t.top+t.height/2)}const h={tags:["!autodocs"],args:{onOpen:g()},render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(f,{label:"Refresh",icon:v,onClick:N})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]}),play:async({args:a,canvas:t,userEvent:B})=>{const k=t.getByRole("link",{name:"DNS"}),I=L(t.getByText("Lookups answer in 14 ms on average."));await i(I).toBe(k),await B.click(k),await i(a.onOpen).toHaveBeenCalledOnce();const j=t.getByRole("button",{name:"Refresh"}),R=L(j);await i(R!==null&&j.contains(R)).toBe(!0),await B.click(j),await i(N).toHaveBeenCalledOnce(),await i(a.onOpen).toHaveBeenCalledOnce()}},x={render:()=>e.jsx(b,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"px-12 py-10 text-sm text-primary",children:a},a))})};function w({title:a}){return e.jsxs("div",{className:"flex items-center justify-between gap-12 py-(--row-padding-y) text-sm text-primary",children:[a,e.jsx(U,{isChecked:!0,onChange:g(),label:a})]})}function O(a){return e.jsxs(n,{...a,children:[e.jsx(r,{title:"Router",icon:e.jsx(F,{size:16})}),e.jsx(s,{layout:"flush",children:e.jsxs(H,{children:[e.jsxs(C,{density:"compact",children:[e.jsx(o,{label:"Latency",value:"4 ms"}),e.jsx(o,{label:"Jitter",value:"1 ms"})]}),e.jsxs(C,{density:"compact",children:[e.jsx(o,{label:"Gateway",value:"192.168.1.1"}),e.jsx(o,{label:"Interface",value:"en0"})]})]})})]})}function S(){return e.jsxs(n,{onOpen:g(),children:[e.jsx(r,{title:"Usage",icon:e.jsx(P,{size:16})}),e.jsx(s,{children:e.jsxs("span",{className:"inline-flex items-center gap-6 text-md text-primary","aria-hidden":!0,children:[e.jsx(E,{size:12}),"4.9 GB"]})})]})}const u={parameters:{isTwoColumns:!0},render:()=>e.jsxs("div",{className:"grid grid-cols-2 items-start gap-12",children:[e.jsxs(n,{children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(D,{size:16}),actions:e.jsx(A,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(C,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"Updated 2 min ago"})})]}),e.jsxs(n,{children:[e.jsx(r,{title:"DNS",actions:e.jsx(f,{label:"Refresh",icon:v})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]}),e.jsx(b,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"px-12 py-10 text-sm text-primary",children:a},a))}),e.jsxs(n,{children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(w,{title:"Check automatically"}),e.jsx(w,{title:"Include betas"})]}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"You're up to date."})})]}),e.jsx(O,{}),e.jsx(S,{})]})},ye=["WithEverything","HeaderActions","RowsBody","FlushBody","Openable","OpeningAndHeaderAction","List","AllStates"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"A header with an icon and a badge, a body and a footer band.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} onClick={fn()} />} />
      <CardBody>
        <p className="text-sm text-secondary">Lookups answer in 14 ms on average.</p>
      </CardBody>
    </Card>
}`,...c.parameters?.docs?.source},description:{story:"A control at the end of the header; the row keeps its 44px height.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Rows that carry their own vertical padding sit in a `rows` body; a footer below gets 12px of air.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <RouterCard {...args} />
}`,...p.parameters?.docs?.source},description:{story:"A `flush` body for a DataListStack, whose hairlines run to the card's sides.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <OpenableCard />
}`,...m.parameters?.docs?.source},description:{story:"With `onOpen` the whole card is a link: its header ends in a caret, and it lifts on hover and presses in.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    onOpen: fn()
  },
  render: args => <Card {...args}>
      <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} onClick={onRefresh} />} />
      <CardBody>
        <p className="text-sm text-secondary">Lookups answer in 14 ms on average.</p>
      </CardBody>
    </Card>,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const link = canvas.getByRole('link', {
      name: 'DNS'
    });
    // The link lies over the body, so a click on its text lands on the link.
    const overBody = hitAt(canvas.getByText('Lookups answer in 14 ms on average.'));
    await expect(overBody).toBe(link);
    await userEvent.click(link);
    await expect(args.onOpen).toHaveBeenCalledOnce();

    // The header's control is raised above the link, so it takes its own click.
    const refresh = canvas.getByRole('button', {
      name: 'Refresh'
    });
    const overRefresh = hitAt(refresh);
    await expect(overRefresh !== null && refresh.contains(overRefresh)).toBe(true);
    await userEvent.click(refresh);
    await expect(onRefresh).toHaveBeenCalledOnce();
    await expect(args.onOpen).toHaveBeenCalledOnce();
  }
}`,...h.parameters?.docs?.source},description:{story:"A click anywhere on the card opens it, while a control in its header still takes its own click.",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <CardList label="Devices">
      {['MacBook Pro', 'Living room TV', 'Pixel 8'].map(name => <li key={name} className="px-12 py-10 text-sm text-primary">
          {name}
        </li>)}
    </CardList>
}`,...x.parameters?.docs?.source},description:{story:"CardList: a list that is one card, with a hairline between its rows.",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Every form together.",...u.parameters?.docs?.description}}};export{u as AllStates,p as FlushBody,c as HeaderActions,x as List,m as Openable,h as OpeningAndHeaderAction,l as RowsBody,d as WithEverything,ye as __namedExportsOrder,ue as default};
