import{G as f,j as e}from"./iframe-D8Y4MoOU.js";import{B as I}from"./BarMeter-DEX_2NzP.js";import{C as v,a as y,b as j}from"./Card-BcUezJSW.js";import{I as u}from"./IconTile-BYAf5g1R.js";import{H as C,C as k}from"./HdStreamIcon-9SJokNhP.js";import{V as g,h as R}from"./Icons-DOjHuZZa.js";import{L as x}from"./ListRow-Dfa3PFYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-9A1wEaLP.js";import"./StretchedLink-TAqVw7Bv.js";import"./pressable-n_zMMF94.js";import"./tint-D2V_N-nu.js";const{expect:i,fn:w}=__STORYBOOK_MODULE_TEST__;function m({title:a,description:o}){return e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsx("span",{className:"type-body-default text-primary truncate",children:a}),e.jsx("span",{className:"type-body-small text-tertiary truncate",children:o})]})}function b({value:a,color:o,label:t,isDimmed:s}){return e.jsxs(e.Fragment,{children:[e.jsx(I,{value:a,color:o,isDimmed:s}),e.jsx("span",{className:"sr-only",children:t})]})}const z={title:"Data display/ListRow",component:x,args:{onClick:w(),children:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"var(--status-positive)",icon:e.jsx(g,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(b,{value:4,color:"var(--status-positive)",label:"Excellent"})]})},argTypes:{children:{control:!1}},render:a=>e.jsxs(v,{className:"w-[400px]",children:[e.jsx(y,{title:"Capabilities"}),e.jsx(j,{children:e.jsx("ul",{role:"list",className:"flex flex-col",children:e.jsx("li",{children:e.jsx(x,{...a})})})})]}),parameters:{docs:{subtitle:"A whole row that opens something, ending in a chevron.",toc:f},guidance:{whenToUse:["A card’s row that opens a view, an `IconTile` first if the item has one: a capability, “About Rove”."],whenNotToUse:["A label and value that open nothing: use `DataRow`.","A whole card that opens: use `Card` with `onOpen`.","A row holding a bar or other block content: use `StretchedLink`."],accessibility:{builtIn:["A native `<button>` named by its text; the chevron is hidden.","Disabled, it stays focusable and says so (`aria-disabled`), but ignores presses."],toHandle:['A list around the rows: `<ul role="list">`, an `<li>` each.',"Words for a meter: an `sr-only` rating (“Excellent”) beside it.","Spans, not divs, inside: a button holds only inline content."]}}}},r={},l={args:{children:e.jsx(m,{title:"About Rove",description:"Version, platform, and source."})}},n={args:{isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"neutral",icon:e.jsx(g,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(b,{value:4,color:"var(--status-positive)",label:"Excellent",isDimmed:!0})]})}},c={tags:["!autodocs"],play:async({args:a,canvas:o,userEvent:t})=>{const s=o.getByRole("button",{name:/Video calls/});await t.click(s),await i(a.onClick).toHaveBeenCalledOnce(),await i(s).toHaveFocus(),await t.keyboard("{Enter}"),await t.keyboard(" "),await i(a.onClick).toHaveBeenCalledTimes(3)}},d={tags:["!autodocs"],args:n.args,play:async({args:a,canvas:o,userEvent:t})=>{const s=o.getByRole("button",{name:/Video calls/});await t.keyboard("{Tab}"),await i(s).toHaveFocus(),await i(s).toHaveAttribute("aria-disabled","true"),await t.keyboard("{Enter}"),await t.click(s),await i(a.onClick).not.toHaveBeenCalled()}},A=[{title:"Video calls",description:"Zoom, Teams and FaceTime",Icon:g,value:4,color:"var(--status-positive)",label:"Excellent"},{title:"4K streaming",description:"Netflix and YouTube at 2160p",Icon:C,value:3,color:"var(--status-good)",label:"Good"},{title:"Online gaming",description:"Low, steady latency",Icon:R,value:2,color:"var(--status-warning)",label:"Fair"},{title:"Cloud gaming",description:"GeForce Now and Xbox Cloud",Icon:k,value:1,color:"var(--status-poor)",label:"Poor"}],p={render:()=>e.jsxs(v,{className:"w-[400px]",children:[e.jsx(y,{title:"Capabilities"}),e.jsx(j,{children:e.jsxs("ul",{role:"list",className:"flex flex-col",children:[A.map(({title:a,description:o,Icon:t,value:s,color:h,label:T})=>e.jsx("li",{children:e.jsxs(x,{onClick:w(),children:[e.jsx(u,{color:h,icon:e.jsx(t,{size:17})}),e.jsx(m,{title:a,description:o}),e.jsx(b,{value:s,color:h,label:T})]})},a)),e.jsx("li",{children:e.jsxs(x,{onClick:w(),isDisabled:!0,children:[e.jsx(u,{color:"neutral",icon:e.jsx(C,{size:17})}),e.jsx(m,{title:"HD streaming",description:"Testing…"}),e.jsx(b,{value:3,color:"var(--status-good)",label:"Good",isDimmed:!0})]})})]})})]})},U=["Default","TextOnly","Disabled","Opening","DisabledStaysInert","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A capability and its rating, last so it sits on the right.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RowText title="About Rove" description="Version, platform, and source." />
  }
}`,...l.parameters?.docs?.source},description:{story:"Just the words and the chevron: the About row in Settings.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <>
        <IconTile color="neutral" icon={<VideoCallIcon size={17} />} />
        <RowText title="Video calls" description="Zoom, Teams and FaceTime" />
        <Rating value={4} color="var(--status-positive)" label="Excellent" isDimmed />
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:"Inert while a test replaces its rating: the whole row faded, a muted tile and dimmed bars, no hover.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"A click opens it, and so do Enter and Space once it has focus.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Disabled, it stays in the Tab order, announced as disabled, but Enter or a click does nothing.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"A list of rows at each rating, then one disabled.",...p.parameters?.docs?.description}}};export{p as AllStates,r as Default,n as Disabled,d as DisabledStaysInert,c as Opening,l as TextOnly,U as __namedExportsOrder,z as default};
