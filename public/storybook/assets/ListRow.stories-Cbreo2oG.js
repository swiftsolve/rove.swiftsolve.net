import{j as e,G as k}from"./iframe-4-CnYKse.js";import{B as R}from"./BarMeter-BkmPk0eY.js";import{C as y,a as v,b as f}from"./Card-DdKhFLL6.js";import{I as b}from"./IconTile-BeVzWU1I.js";import{H as C,C as I}from"./HdStreamIcon-Bjv4tVmC.js";import{a as A,V as h,q as E}from"./Icons-BKicTCjk.js";import{a as D,c as j}from"./cn-CdwUFd5Z.js";import{p as S,S as H}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";import"./StretchedLink-BNow6Mxp.js";import"./tint-D2V_N-nu.js";const N=j("group/row flex items-center gap-12 rounded-sm text-left","-mx-8 w-[calc(100%+16px)] px-8 py-(--row-padding-y)","transition-[background] duration-(--duration-fast) ease-in-out","focus-visible:outline-offset-(--focus-inset)","usable:hover:bg-fill-hover",H),L=j("shrink-0 text-tertiary opacity-30","transition-opacity duration-(--duration-fast) ease-in-out","group-usable/row:group-hover/row:opacity-70 group-focus-visible/row:opacity-70");function r({onClick:a,isDisabled:o=!1,className:t,children:s,...x}){return e.jsxs("button",{...x,type:"button",className:D(N,t),...S({isDisabled:o,onClick:a}),children:[e.jsx("span",{className:"flex min-w-0 flex-1 items-center gap-12",children:s}),e.jsx(A,{size:16,className:L})]})}try{r.displayName="ListRow",r.__docgenInfo={description:"A whole-row button in a card's list that opens something, with a trailing chevron.",displayName:"ListRow",filePath:"/tmp/tmp.O6mlx7QJhd/rove/src/ui/list-row/ListRow.tsx",methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"What the row opens.",name:"onClick",required:!0,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement>"}},isDisabled:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:`Inert for now (results that are being replaced): faded like any disabled
control, no hover, no action. It keeps its place in the Tab order.`,name:"isDisabled",required:!1,tags:{},type:{name:"boolean"}},children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"The row's content: an icon tile, a title and its description. Anything\nright-aligned (a meter) goes last, after a text column that takes `flex-1`.",name:"children",required:!0,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const{expect:i,fn:g}=__STORYBOOK_MODULE_TEST__;function m({title:a,description:o}){return e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsx("span",{className:"type-body-default text-primary truncate",children:a}),e.jsx("span",{className:"type-body-small text-tertiary truncate",children:o})]})}function w({value:a,color:o,label:t,isDimmed:s}){return e.jsxs(e.Fragment,{children:[e.jsx(R,{value:a,color:o,isDimmed:s}),e.jsx("span",{className:"sr-only",children:t})]})}const J={title:"Data display/ListRow",component:r,args:{onClick:g(),children:e.jsxs(e.Fragment,{children:[e.jsx(b,{color:"var(--status-positive)",icon:e.jsx(h,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(w,{value:4,color:"var(--status-positive)",label:"Excellent"})]})},argTypes:{children:{control:!1}},render:a=>e.jsxs(y,{className:"w-[400px]",children:[e.jsx(v,{title:"Capabilities"}),e.jsx(f,{children:e.jsx("ul",{role:"list",className:"flex flex-col",children:e.jsx("li",{children:e.jsx(r,{...a})})})})]}),parameters:{docs:{toc:k},guidance:{use:["A card’s list row that opens a view: a capability, “About Rove”.","An `IconTile` first if the item has one; About’s row has none."],avoid:["A label and value that open nothing: use `DataRow`.","A whole card that opens: use `Card` with `onOpen`.","A row holding a bar or other block content: use `StretchedLink`."],accessibility:{builtIn:["A native `<button>` named by its text; the chevron is hidden.","Disabled, it stays focusable and says so (`aria-disabled`), but ignores presses."],toHandle:['A list around the rows: `<ul role="list">`, an `<li>` each.',"Words for a meter: an `sr-only` rating (“Excellent”) beside it.","Spans, not divs, inside: a button holds only inline content."]}}}},l={},c={args:{children:e.jsx(m,{title:"About Rove",description:"Version, platform, and source."})}},n={args:{isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(b,{color:"neutral",icon:e.jsx(h,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(w,{value:4,color:"var(--status-positive)",label:"Excellent",isDimmed:!0})]})}},d={tags:["!autodocs"],play:async({args:a,canvas:o,userEvent:t})=>{const s=o.getByRole("button",{name:/Video calls/});await t.click(s),await i(a.onClick).toHaveBeenCalledOnce(),await i(s).toHaveFocus(),await t.keyboard("{Enter}"),await t.keyboard(" "),await i(a.onClick).toHaveBeenCalledTimes(3)}},p={tags:["!autodocs"],args:n.args,play:async({args:a,canvas:o,userEvent:t})=>{const s=o.getByRole("button",{name:/Video calls/});await t.keyboard("{Tab}"),await i(s).toHaveFocus(),await i(s).toHaveAttribute("aria-disabled","true"),await t.keyboard("{Enter}"),await t.click(s),await i(a.onClick).not.toHaveBeenCalled()}},B=[{title:"Video calls",description:"Zoom, Teams and FaceTime",Icon:h,value:4,color:"var(--status-positive)",label:"Excellent"},{title:"4K streaming",description:"Netflix and YouTube at 2160p",Icon:C,value:3,color:"var(--status-good)",label:"Good"},{title:"Online gaming",description:"Low, steady latency",Icon:E,value:2,color:"var(--status-warning)",label:"Fair"},{title:"Cloud gaming",description:"GeForce Now and Xbox Cloud",Icon:I,value:1,color:"var(--status-poor)",label:"Poor"}],u={render:()=>e.jsxs(y,{className:"w-[400px]",children:[e.jsx(v,{title:"Capabilities"}),e.jsx(f,{children:e.jsxs("ul",{role:"list",className:"flex flex-col",children:[B.map(({title:a,description:o,Icon:t,value:s,color:x,label:T})=>e.jsx("li",{children:e.jsxs(r,{onClick:g(),children:[e.jsx(b,{color:x,icon:e.jsx(t,{size:17})}),e.jsx(m,{title:a,description:o}),e.jsx(w,{value:s,color:x,label:T})]})},a)),e.jsx("li",{children:e.jsxs(r,{onClick:g(),isDisabled:!0,children:[e.jsx(b,{color:"neutral",icon:e.jsx(C,{size:17})}),e.jsx(m,{title:"HD streaming",description:"Testing…"}),e.jsx(w,{value:3,color:"var(--status-good)",label:"Good",isDimmed:!0})]})})]})})]})},K=["Default","TextOnly","Disabled","Opening","DisabledStaysInert","AllStates"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"A capability and its rating, last so it sits on the right.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RowText title="About Rove" description="Version, platform, and source." />
  }
}`,...c.parameters?.docs?.source},description:{story:"Just the words and the chevron: the About row in Settings.",...c.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <>
        <IconTile color="neutral" icon={<VideoCallIcon size={17} />} />
        <RowText title="Video calls" description="Zoom, Teams and FaceTime" />
        <Rating value={4} color="var(--status-positive)" label="Excellent" isDimmed />
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:"Inert while a test replaces its rating: the whole row faded, a muted tile and dimmed bars, no hover.",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const row = canvas.getByRole('button', {
      name: /Video calls/
    });
    await userEvent.click(row);
    await expect(args.onClick).toHaveBeenCalledOnce();
    await expect(row).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  }
}`,...d.parameters?.docs?.source},description:{story:"A click opens it, and so do Enter and Space once it has focus.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: Disabled.args,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const row = canvas.getByRole('button', {
      name: /Video calls/
    });
    await userEvent.keyboard('{Tab}');
    await expect(row).toHaveFocus();
    await expect(row).toHaveAttribute('aria-disabled', 'true');
    await userEvent.keyboard('{Enter}');
    await userEvent.click(row);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source},description:{story:"Disabled, it stays in the Tab order, announced as disabled, but Enter or a click does nothing.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
      <CardHeader title="Capabilities" />
      <CardBody>
        <ul role="list" className="flex flex-col">
          {CAPABILITIES.map(({
          title,
          description,
          Icon,
          value,
          color,
          label
        }) => <li key={title}>
              <ListRow onClick={fn()}>
                <IconTile color={color} icon={<Icon size={17} />} />
                <RowText title={title} description={description} />
                <Rating value={value} color={color} label={label} />
              </ListRow>
            </li>)}
          <li>
            <ListRow onClick={fn()} isDisabled>
              <IconTile color="neutral" icon={<HdStreamIcon size={17} />} />
              <RowText title="HD streaming" description="Testing…" />
              <Rating value={3} color="var(--status-good)" label="Good" isDimmed />
            </ListRow>
          </li>
        </ul>
      </CardBody>
    </Card>
}`,...u.parameters?.docs?.source},description:{story:"A list of rows at each rating, then one disabled.",...u.parameters?.docs?.description}}};export{u as AllStates,l as Default,n as Disabled,p as DisabledStaysInert,d as Opening,c as TextOnly,K as __namedExportsOrder,J as default};
