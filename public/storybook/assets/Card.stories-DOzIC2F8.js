import{j as e}from"./iframe-B0v85q2s.js";import{B as D}from"./Badge-DZ1tQB7M.js";import{I as v}from"./IconButton-DsJaYw47.js";import{D as C,a as o,b as T}from"./DataList-Bv8YBFIX.js";import{b as O,R as f,c as H,T as F,A as P}from"./Icons-BhIK1_hX.js";import{T as E}from"./Toggle-CyyrnEtl.js";import{c as B,d as y,b as s,a as r,C as n}from"./Card-D6P_H1kq.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-D1carl3E.js";import"./StatusDot-CT-0Sw8x.js";import"./pressable-n_zMMF94.js";import"./ButtonSpinner-B10IqNUm.js";import"./Tooltip-DXSVwWKi.js";import"./layers-D5UzyUFr.js";import"./usePositioner-DgUsctsl.js";import"./useBaseUiId-DBHE3ZOX.js";import"./useOpenChangeComplete-CjGrPzsn.js";import"./useTimeout-C7Ijqfjp.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DeIr2FMf.js";import"./DirectionContext-CwFyC6Oz.js";import"./useControlled-DHAdSSan.js";import"./FormContext-dhbmUPo2.js";import"./useButton-DrRmyTO6.js";import"./useAriaLabelledBy-Bp0QOu0Z.js";import"./useValueChanged-CBWbagAG.js";import"./StretchedLink-BIBDvPM1.js";const{expect:i,fn:g}=__STORYBOOK_MODULE_TEST__,he={title:"Containers/Card/Card",component:n,subcomponents:{CardHeader:r,CardBody:s,CardFooter:y,CardList:B},args:{as:"section"},argTypes:{as:{control:"inline-radio",options:["section","div","li"]},onOpen:{control:!1},children:{control:!1}},decorators:[(a,{parameters:t})=>e.jsx("div",{className:t.isTwoColumns?"w-[740px]":"w-[360px]",children:e.jsx(a,{})})]},c={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(O,{size:16}),actions:e.jsx(D,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(C,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"Updated 2 min ago"})})]})},d={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(v,{label:"Refresh",icon:f,onClick:g()})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]})},l={render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(j,{title:"Check automatically"}),e.jsx(j,{title:"Include betas"})]}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"You're up to date."})})]})},p={render:a=>e.jsx(S,{...a})},m={render:()=>e.jsx(A,{})},N=g();function L(a){const t=a.getBoundingClientRect();return document.elementFromPoint(t.left+t.width/2,t.top+t.height/2)}const x={tags:["!autodocs"],args:{onOpen:g()},render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{title:"DNS",actions:e.jsx(v,{label:"Refresh",icon:f,onClick:N})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]}),play:async({args:a,canvas:t,userEvent:b})=>{const k=t.getByRole("link",{name:"DNS"}),I=L(t.getByText("Lookups answer in 14 ms on average."));await i(I).toBe(k),await b.click(k),await i(a.onOpen).toHaveBeenCalledOnce();const w=t.getByRole("button",{name:"Refresh"}),R=L(w);await i(R!==null&&w.contains(R)).toBe(!0),await b.click(w),await i(N).toHaveBeenCalledOnce(),await i(a.onOpen).toHaveBeenCalledOnce()}},h={render:()=>e.jsx(B,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"px-12 py-10 text-sm text-primary",children:a},a))})};function j({title:a}){return e.jsxs("div",{className:"flex items-center justify-between gap-12 py-(--row-padding-y) text-sm text-primary",children:[a,e.jsx(E,{isChecked:!0,onChange:g(),label:a})]})}function S(a){return e.jsxs(n,{...a,children:[e.jsx(r,{title:"Router",icon:e.jsx(H,{size:16})}),e.jsx(s,{layout:"flush",children:e.jsxs(T,{children:[e.jsxs(C,{density:"compact",children:[e.jsx(o,{label:"Latency",value:"4 ms"}),e.jsx(o,{label:"Jitter",value:"1 ms"})]}),e.jsxs(C,{density:"compact",children:[e.jsx(o,{label:"Gateway",value:"192.168.1.1"}),e.jsx(o,{label:"Interface",value:"en0"})]})]})})]})}function A(){return e.jsxs(n,{onOpen:g(),children:[e.jsx(r,{title:"Usage",icon:e.jsx(F,{size:16})}),e.jsx(s,{children:e.jsxs("span",{className:"inline-flex items-center gap-6 text-md text-primary","aria-hidden":!0,children:[e.jsx(P,{size:12}),"4.9 GB"]})})]})}const u={parameters:{isTwoColumns:!0},render:()=>e.jsxs("div",{className:"grid grid-cols-2 items-start gap-12",children:[e.jsxs(n,{children:[e.jsx(r,{title:"Wi‑Fi",icon:e.jsx(O,{size:16}),actions:e.jsx(D,{tone:"positive",children:"VPN"})}),e.jsx(s,{children:e.jsxs(C,{children:[e.jsx(o,{label:"Address",value:"192.168.1.20"}),e.jsx(o,{label:"Gateway",value:"192.168.1.1"})]})}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"Updated 2 min ago"})})]}),e.jsxs(n,{children:[e.jsx(r,{title:"DNS",actions:e.jsx(v,{label:"Refresh",icon:f})}),e.jsx(s,{children:e.jsx("p",{className:"text-sm text-secondary",children:"Lookups answer in 14 ms on average."})})]}),e.jsx(B,{label:"Devices",children:["MacBook Pro","Living room TV","Pixel 8"].map(a=>e.jsx("li",{className:"px-12 py-10 text-sm text-primary",children:a},a))}),e.jsxs(n,{children:[e.jsx(r,{title:"Updates"}),e.jsxs(s,{layout:"rows",children:[e.jsx(j,{title:"Check automatically"}),e.jsx(j,{title:"Include betas"})]}),e.jsx(y,{children:e.jsx("span",{className:"text-xs text-tertiary",children:"You're up to date."})})]}),e.jsx(S,{}),e.jsx(A,{})]})},ue=["WithEverything","HeaderActions","RowsBody","FlushBody","Openable","OpeningAndHeaderAction","List","AllStates"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"A header with an icon and a badge, a body and a footer band.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="DNS" actions={<IconButton label="Refresh" icon={RefreshIcon} onClick={fn()} />} />
      <CardBody>
        <p className="text-sm text-secondary">Lookups answer in 14 ms on average.</p>
      </CardBody>
    </Card>
}`,...d.parameters?.docs?.source},description:{story:"A control at the end of the header; the row keeps its 44px height.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"With `onOpen` the whole card is a link: its header ends in a caret, and it lifts on hover and presses in.",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"A click anywhere on the card opens it, while a control in its header still takes its own click.",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CardList label="Devices">
      {['MacBook Pro', 'Living room TV', 'Pixel 8'].map(name => <li key={name} className="px-12 py-10 text-sm text-primary">
          {name}
        </li>)}
    </CardList>
}`,...h.parameters?.docs?.source},description:{story:"CardList: a list that is one card, with a hairline between its rows.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Every form together.",...u.parameters?.docs?.description}}};export{u as AllStates,p as FlushBody,d as HeaderActions,h as List,m as Openable,x as OpeningAndHeaderAction,l as RowsBody,c as WithEverything,ue as __namedExportsOrder,he as default};
