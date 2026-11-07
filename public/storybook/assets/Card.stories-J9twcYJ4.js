import{G as I,j as e}from"./iframe-EjlvvmZ3.js";import{B as O}from"./Badge-PTPIKNqn.js";import{I as b}from"./IconButton-tBnaCrAc.js";import{D as C,a as o,b as H}from"./DataList-Dp70O9bw.js";import{g as D,R as v,k as F,n as U,j as P}from"./Icons-D-vbWO7A.js";import{T as E}from"./Toggle-D8IsOnD8.js";import{c as f,d as u,b as s,a as r,C as n}from"./Card-jdYVMGUb.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./StatusDot-CJXMnV0Q.js";import"./ButtonSpinner-BD0_FMMx.js";import"./Tooltip-BEHJIwEW.js";import"./layers-D5UzyUFr.js";import"./usePositioner-D6NVmnrj.js";import"./useBaseUiId-BnNJi-AB.js";import"./useOpenChangeComplete-iyYtQ0RQ.js";import"./useTimeout-DhCQoAJn.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-C_j9hqFn.js";import"./DirectionContext-CKFY2xEw.js";import"./pressable-n_zMMF94.js";import"./useControlled-EReZvPxm.js";import"./useRegisterFieldControl-D6N9aEWG.js";import"./useButton-DyKlcgMw.js";import"./useAriaLabelledBy-5zMbqLWI.js";import"./useValueChanged-AqsmyK8k.js";import"./StretchedLink-CV6L7Stz.js";const{expect:i,fn:g}=__STORYBOOK_MODULE_TEST__,xe={title:"Containers/Card/Card",component:n,subcomponents:{CardHeader:r,CardBody:s,CardFooter:u,CardList:f},args:{as:"section"},argTypes:{as:{control:"inline-radio",options:["section","div","li"]},onOpen:{control:!1},children:{control:!1}},parameters:{docs:{subtitle:"The panel that groups content: a header, a body and an optional footer.",toc:I},guidance:{whenToUse:["Related facts or settings under one title, like DNS or Updates.","A Home summary that opens its page, with `onOpen`: Usage.","A list that is one card, as `CardList`: the tracked services."],whenNotToUse:["An error about the whole page: use `Banner`.","Nothing to list yet: use `EmptyState`.","A row in a card that opens a page: use `ListRow`."],accessibility:{builtIn:["A `section` card is a region named by its header’s title.","With `onOpen`, one link covers the card, first in Tab order.","`CardList` is a list named by its `label`."],toHandle:["A `CardHeader` on a `section` card, or your own `aria-labelledby`.","A `linkLabel` when the title doesn’t say what the card shows.","Body controls on an openable card raised above its link (`relative z-2`)."]}}},decorators:[(a,{parameters:t})=>e.jsx("div",{className:t.isTwoColumns?"w-[740px]":"w-[360px]",children:e.jsx(a,{})})]},d={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(D,{size:16}),actions:e.jsx(O,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(C,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(u,{children:e.jsx("span",{className:"type-caption text-tertiary",children:"Updated 2 min ago"})})]})},c={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(b,{label:"Refresh",icon:v,onClick:g()})}),e.jsx(s,{children:e.jsx("p",{className:"type-body text-secondary",children:"Lookups answer in 14 ms on average."})})]})},l={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(j,{title:"Check automatically"}),e.jsx(j,{title:"Include betas"})]}),e.jsx(u,{children:e.jsx("span",{className:"type-caption text-tertiary",children:"You're up to date."})})]})},p={render:a=>e.jsx(S,{...a})},m={render:()=>e.jsx(A,{})},N=g();function L(a){const t=a.getBoundingClientRect();return document.elementFromPoint(t.left+t.width/2,t.top+t.height/2)}const h={tags:["!autodocs"],args:{onOpen:g()},render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(b,{label:"Refresh",icon:v,onClick:N})}),e.jsx(s,{children:e.jsx("p",{className:"type-body text-secondary",children:"Lookups answer in 14 ms on average."})})]}),play:async({args:a,canvas:t,userEvent:B})=>{const k=t.getByRole("link",{name:"DNS"}),T=L(t.getByText("Lookups answer in 14 ms on average."));await i(T).toBe(k),await B.click(k),await i(a.onOpen).toHaveBeenCalledOnce();const w=t.getByRole("button",{name:"Refresh"}),R=L(w);await i(R!==null&&w.contains(R)).toBe(!0),await B.click(w),await i(N).toHaveBeenCalledOnce(),await i(a.onOpen).toHaveBeenCalledOnce()}},y={render:()=>e.jsx(f,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"type-body px-12 py-10 text-primary",children:a},a))})};function j({title:a}){return e.jsxs("div",{className:"type-body flex items-center justify-between gap-12 py-(--row-padding-y) text-primary",children:[a,e.jsx(E,{isChecked:!0,onChange:g(),label:a})]})}function S(a){return e.jsxs(n,{...a,children:[e.jsx(r,{title:"Router",icon:e.jsx(F,{size:16})}),e.jsx(s,{layout:"flush",children:e.jsxs(H,{children:[e.jsxs(C,{density:"compact",children:[e.jsx(o,{label:"Latency",value:"4 ms"}),e.jsx(o,{label:"Jitter",value:"1 ms"})]}),e.jsxs(C,{density:"compact",children:[e.jsx(o,{label:"Gateway",value:"192.168.1.1"}),e.jsx(o,{label:"Interface",value:"en0"})]})]})})]})}function A(){return e.jsxs(n,{onOpen:g(),children:[e.jsx(r,{title:"Usage",icon:e.jsx(U,{size:16})}),e.jsx(s,{children:e.jsxs("span",{className:"type-body inline-flex items-center gap-6 text-primary","aria-hidden":!0,children:[e.jsx(P,{size:12}),"4.9 GB"]})})]})}const x={parameters:{isTwoColumns:!0},render:()=>e.jsxs("div",{className:"grid grid-cols-2 items-start gap-12",children:[e.jsxs(n,{children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(D,{size:16}),actions:e.jsx(O,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(C,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(u,{children:e.jsx("span",{className:"type-caption text-tertiary",children:"Updated 2 min ago"})})]}),e.jsxs(n,{children:[e.jsx(r,{title:"DNS",actions:e.jsx(b,{label:"Refresh",icon:v})}),e.jsx(s,{children:e.jsx("p",{className:"type-body text-secondary",children:"Lookups answer in 14 ms on average."})})]}),e.jsx(f,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"type-body px-12 py-10 text-primary",children:a},a))}),e.jsxs(n,{children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(j,{title:"Check automatically"}),e.jsx(j,{title:"Include betas"})]}),e.jsx(u,{children:e.jsx("span",{className:"type-caption text-tertiary",children:"You're up to date."})})]}),e.jsx(S,{}),e.jsx(A,{})]})},ue=["WithEverything","HeaderActions","RowsBody","FlushBody","Openable","OpeningAndHeaderAction","List","AllStates"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="Wi‑Fi" icon={<WifiIcon size={16} />} actions={<Badge tone="positive">VPN</Badge>} />
      <CardBody>
        <DataList>
          <DataRow label="Address" value="192.168.1.20" />
          <DataRow label="Gateway" value="192.168.1.1" />
        </DataList>
      </CardBody>
      <CardFooter>
        <span className="type-caption text-tertiary">Updated 2 min ago</span>
      </CardFooter>
    </Card>
}`,...d.parameters?.docs?.source},description:{story:"A header with an icon and a badge, a body and a footer band.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} onClick={fn()} />} />
      <CardBody>
        <p className="type-body text-secondary">Lookups answer in 14 ms on average.</p>
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
        <span className="type-caption text-tertiary">You're up to date.</span>
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
        <p className="type-body text-secondary">Lookups answer in 14 ms on average.</p>
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
}`,...h.parameters?.docs?.source},description:{story:"A click anywhere on the card opens it, while a control in its header still takes its own click.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <CardList label="Devices">
      {['MacBook Pro', 'Living room TV', 'Pixel 8'].map(name => <li key={name} className="type-body px-12 py-10 text-primary">
          {name}
        </li>)}
    </CardList>
}`,...y.parameters?.docs?.source},description:{story:"CardList: a list that is one card, with a hairline between its rows.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <span className="type-caption text-tertiary">Updated 2 min ago</span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} />} />
        <CardBody>
          <p className="type-body text-secondary">Lookups answer in 14 ms on average.</p>
        </CardBody>
      </Card>
      <CardList label="Devices">
        {['MacBook Pro', 'Living room TV', 'Pixel 8'].map(name => <li key={name} className="type-body px-12 py-10 text-primary">
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
          <span className="type-caption text-tertiary">You're up to date.</span>
        </CardFooter>
      </Card>
      <RouterCard />
      <OpenableCard />
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Every form together.",...x.parameters?.docs?.description}}};export{x as AllStates,p as FlushBody,c as HeaderActions,y as List,m as Openable,h as OpeningAndHeaderAction,l as RowsBody,d as WithEverything,ue as __namedExportsOrder,xe as default};
