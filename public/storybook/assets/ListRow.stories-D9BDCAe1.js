import{j as e}from"./iframe-B0v85q2s.js";import{B as k}from"./BarMeter-DP1yyL8J.js";import{C as h,a as v,b as f}from"./Card-D6P_H1kq.js";import{I as w}from"./IconTile-BNNnFT2V.js";import{H as j,C as R}from"./HdStreamIcon-Cg3h89Dk.js";import{a as I,V as y,p as E}from"./Icons-BhIK1_hX.js";import{a as S,c as C}from"./cn-D1carl3E.js";import{p as D,S as H}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";import"./StretchedLink-BIBDvPM1.js";import"./tint-D2V_N-nu.js";import"./CustomIcon-BJrSifLh.js";const N=C("group/row flex items-center gap-12 rounded-sm text-left","-mx-8 w-[calc(100%+16px)] px-8 py-(--row-padding-y)","transition-[background] duration-(--duration-fast) ease-in-out","focus-visible:outline-offset-(--focus-inset)","usable:hover:bg-fill-hover",H),L=C("shrink-0 text-tertiary opacity-30","transition-opacity duration-(--duration-fast) ease-in-out","group-usable/row:group-hover/row:opacity-70 group-focus-visible/row:opacity-70");function n({onClick:a,isDisabled:o=!1,className:t,children:s,...x}){return e.jsxs("button",{...x,type:"button",className:S(N,t),...D({isDisabled:o,onClick:a}),children:[e.jsx("span",{className:"flex min-w-0 flex-1 items-center gap-12",children:s}),e.jsx(I,{size:16,className:L})]})}try{n.displayName="ListRow",n.__docgenInfo={description:"A whole-row button in a card's list that opens something, with a trailing chevron.",displayName:"ListRow",filePath:"/tmp/tmp.W6liwoAjW9/rove/src/ui/list-row/ListRow.tsx",methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"What the row opens.",name:"onClick",required:!0,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement>"}},isDisabled:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:`Inert for now (results that are being replaced): faded like any disabled
control, no hover, no action. It keeps its place in the Tab order.`,name:"isDisabled",required:!1,tags:{},type:{name:"boolean"}},children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"The row's content: an icon tile, a title and its description. Anything\nright-aligned (a meter) goes last, after a text column that takes `flex-1`.",name:"children",required:!0,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const{expect:i,fn:b}=__STORYBOOK_MODULE_TEST__;function m({title:a,description:o}){return e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsx("span",{className:"type-body-default text-primary truncate",children:a}),e.jsx("span",{className:"type-body-small text-tertiary truncate",children:o})]})}function g({value:a,color:o,label:t,isDimmed:s}){return e.jsxs(e.Fragment,{children:[e.jsx(k,{value:a,color:o,isDimmed:s}),e.jsx("span",{className:"sr-only",children:t})]})}const K={title:"Data display/ListRow",component:n,args:{onClick:b(),children:e.jsxs(e.Fragment,{children:[e.jsx(w,{color:"var(--status-positive)",icon:e.jsx(y,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(g,{value:4,color:"var(--status-positive)",label:"Excellent"})]})},argTypes:{children:{control:!1}},render:a=>e.jsxs(h,{className:"w-[400px]",children:[e.jsx(v,{title:"Capabilities"}),e.jsx(f,{children:e.jsx("ul",{role:"list",className:"flex flex-col",children:e.jsx("li",{children:e.jsx(n,{...a})})})})]})},l={},c={args:{children:e.jsx(m,{title:"About Rove",description:"Version, platform, and source."})}},r={args:{isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(w,{color:"neutral",icon:e.jsx(y,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(g,{value:4,color:"var(--status-positive)",label:"Excellent",isDimmed:!0})]})}},d={tags:["!autodocs"],play:async({args:a,canvas:o,userEvent:t})=>{const s=o.getByRole("button",{name:/Video calls/});await t.click(s),await i(a.onClick).toHaveBeenCalledOnce(),await i(s).toHaveFocus(),await t.keyboard("{Enter}"),await t.keyboard(" "),await i(a.onClick).toHaveBeenCalledTimes(3)}},p={tags:["!autodocs"],args:r.args,play:async({args:a,canvas:o,userEvent:t})=>{const s=o.getByRole("button",{name:/Video calls/});await t.keyboard("{Tab}"),await i(s).toHaveFocus(),await i(s).toHaveAttribute("aria-disabled","true"),await t.keyboard("{Enter}"),await t.click(s),await i(a.onClick).not.toHaveBeenCalled()}},A=[{title:"Video calls",description:"Zoom, Teams and FaceTime",Icon:y,value:4,color:"var(--status-positive)",label:"Excellent"},{title:"4K streaming",description:"Netflix and YouTube at 2160p",Icon:j,value:3,color:"var(--status-good)",label:"Good"},{title:"Online gaming",description:"Low, steady latency",Icon:E,value:2,color:"var(--status-warning)",label:"Fair"},{title:"Cloud gaming",description:"GeForce Now and Xbox Cloud",Icon:R,value:1,color:"var(--status-poor)",label:"Poor"}],u={render:()=>e.jsxs(h,{className:"w-[400px]",children:[e.jsx(v,{title:"Capabilities"}),e.jsx(f,{children:e.jsxs("ul",{role:"list",className:"flex flex-col",children:[A.map(({title:a,description:o,Icon:t,value:s,color:x,label:T})=>e.jsx("li",{children:e.jsxs(n,{onClick:b(),children:[e.jsx(w,{color:x,icon:e.jsx(t,{size:17})}),e.jsx(m,{title:a,description:o}),e.jsx(g,{value:s,color:x,label:T})]})},a)),e.jsx("li",{children:e.jsxs(n,{onClick:b(),isDisabled:!0,children:[e.jsx(w,{color:"neutral",icon:e.jsx(j,{size:17})}),e.jsx(m,{title:"HD streaming",description:"Testing…"}),e.jsx(g,{value:3,color:"var(--status-good)",label:"Good",isDimmed:!0})]})})]})})]})},Y=["Default","TextOnly","Disabled","Opening","DisabledStaysInert","AllStates"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"A capability and its rating, last so it sits on the right.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RowText title="About Rove" description="Version, platform, and source." />
  }
}`,...c.parameters?.docs?.source},description:{story:"Just the words and the chevron: the About row in Settings.",...c.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <>
        <IconTile color="neutral" icon={<VideoCallIcon size={17} />} />
        <RowText title="Video calls" description="Zoom, Teams and FaceTime" />
        <Rating value={4} color="var(--status-positive)" label="Excellent" isDimmed />
      </>
  }
}`,...r.parameters?.docs?.source},description:{story:`Inert while a test replaces its rating: the whole row faded, a muted tile
and dimmed bars, no hover.`,...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"A list of rows at each rating, then one disabled.",...u.parameters?.docs?.description}}};export{u as AllStates,l as Default,r as Disabled,p as DisabledStaysInert,d as Opening,c as TextOnly,Y as __namedExportsOrder,K as default};
