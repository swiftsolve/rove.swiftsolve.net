import{G as T,j as e}from"./iframe-C9ueuCTX.js";import{C as h,a as y,b as C}from"./Card-Dwg904fE.js";import{I as u}from"./IconTile-DJTqTN5E.js";import{U as f,C as I,H as k}from"./UltraHdStreamIcon-wsK7QgBm.js";import{V as g,h as R}from"./Icons-BwklbjUn.js";import{L as x}from"./ListRow-BmfRHJF_.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./StretchedLink-BUnVXvaH.js";import"./pressable-n_zMMF94.js";import"./tint-D2V_N-nu.js";const{expect:i,fn:w}=__STORYBOOK_MODULE_TEST__;function m({title:t,description:o}){return e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col gap-2",children:[e.jsx("span",{className:"type-body truncate text-primary",children:t}),e.jsx("span",{className:"type-caption truncate text-tertiary",children:o})]})}function b({label:t,textColor:o,isMuted:a=!1}){return e.jsx("span",{className:`type-caption shrink-0 ${a?"text-tertiary":o}`,children:t})}const G={title:"Data display/ListRow",component:x,args:{onClick:w(),children:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"var(--status-positive)",icon:e.jsx(g,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(b,{label:"Excellent",textColor:"text-positive"})]})},argTypes:{children:{control:!1}},render:t=>e.jsxs(h,{className:"w-[400px]",children:[e.jsx(y,{title:"Capabilities"}),e.jsx(C,{children:e.jsx("ul",{role:"list",className:"flex flex-col",children:e.jsx("li",{children:e.jsx(x,{...t})})})})]}),parameters:{docs:{subtitle:"A whole row that opens something, ending in a chevron.",toc:T},guidance:{whenToUse:["A card’s row that opens a view, an `IconTile` first if the item has one: a capability, “About Rove”."],whenNotToUse:["A label and value that open nothing: use `DataRow`.","A whole card that opens: use `Card` with `onOpen`.","A row holding a bar or other block content: use `StretchedLink`."],accessibility:{builtIn:["A native `<button>` named by its text; the chevron is hidden.","Disabled, it stays focusable and says so (`aria-disabled`), but ignores presses."],toHandle:['A list around the rows: `<ul role="list">`, an `<li>` each.',"A rating in words, not colour alone: “Excellent”, in its level’s colour.","Spans, not divs, inside: a button holds only inline content."]}}}},r={},l={args:{children:e.jsx(m,{title:"About Rove",description:"Version, platform, and source."})}},n={args:{isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"neutral",icon:e.jsx(g,{size:17})}),e.jsx(m,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(b,{label:"Excellent",textColor:"text-positive",isMuted:!0})]})}},c={tags:["!autodocs"],play:async({args:t,canvas:o,userEvent:a})=>{const s=o.getByRole("button",{name:/Video calls/});await a.click(s),await i(t.onClick).toHaveBeenCalledOnce(),await i(s).toHaveFocus(),await a.keyboard("{Enter}"),await a.keyboard(" "),await i(t.onClick).toHaveBeenCalledTimes(3)}},d={tags:["!autodocs"],args:n.args,play:async({args:t,canvas:o,userEvent:a})=>{const s=o.getByRole("button",{name:/Video calls/});await a.keyboard("{Tab}"),await i(s).toHaveFocus(),await i(s).toHaveAttribute("aria-disabled","true"),await a.keyboard("{Enter}"),await a.click(s),await i(t.onClick).not.toHaveBeenCalled()}},A=[{title:"Video calls",description:"Zoom, Teams and FaceTime",Icon:g,color:"var(--status-positive)",textColor:"text-positive",label:"Excellent"},{title:"4K streaming",description:"Netflix and YouTube at 2160p",Icon:f,color:"var(--status-good)",textColor:"text-good",label:"Good"},{title:"Online gaming",description:"Low, steady latency",Icon:R,color:"var(--status-warning)",textColor:"text-warning",label:"Fair"},{title:"Cloud gaming",description:"GeForce Now and Xbox Cloud",Icon:I,color:"var(--status-poor)",textColor:"text-poor",label:"Poor"}],p={render:()=>e.jsxs(h,{className:"w-[400px]",children:[e.jsx(y,{title:"Capabilities"}),e.jsx(C,{children:e.jsxs("ul",{role:"list",className:"flex flex-col",children:[A.map(({title:t,description:o,Icon:a,color:s,textColor:v,label:j})=>e.jsx("li",{children:e.jsxs(x,{onClick:w(),children:[e.jsx(u,{color:s,icon:e.jsx(a,{size:17})}),e.jsx(m,{title:t,description:o}),e.jsx(b,{label:j,textColor:v})]})},t)),e.jsx("li",{children:e.jsxs(x,{onClick:w(),isDisabled:!0,children:[e.jsx(u,{color:"neutral",icon:e.jsx(k,{size:17})}),e.jsx(m,{title:"HD streaming",description:"Testing…"}),e.jsx(b,{label:"Good",textColor:"text-good",isMuted:!0})]})})]})})]})},z=["Default","TextOnly","Disabled","Opening","DisabledStaysInert","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A capability and its rating, last so it sits on the right.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RowText title="About Rove" description="Version, platform, and source." />
  }
}`,...l.parameters?.docs?.source},description:{story:"Just the words and the chevron: the About row in Settings.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <>
        <IconTile color="neutral" icon={<VideoCallIcon size={17} />} />
        <RowText title="Video calls" description="Zoom, Teams and FaceTime" />
        <Rating label="Excellent" textColor="text-positive" isMuted />
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:"Inert while a test replaces its rating: the whole row faded, a muted tile and a grey rating, no hover.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
          color,
          textColor,
          label
        }) => <li key={title}>
              <ListRow onClick={fn()}>
                <IconTile color={color} icon={<Icon size={17} />} />
                <RowText title={title} description={description} />
                <Rating label={label} textColor={textColor} />
              </ListRow>
            </li>)}
          <li>
            <ListRow onClick={fn()} isDisabled>
              <IconTile color="neutral" icon={<HdStreamIcon size={17} />} />
              <RowText title="HD streaming" description="Testing…" />
              <Rating label="Good" textColor="text-good" isMuted />
            </ListRow>
          </li>
        </ul>
      </CardBody>
    </Card>
}`,...p.parameters?.docs?.source},description:{story:"A list of rows at each rating, then one disabled.",...p.parameters?.docs?.description}}};export{p as AllStates,r as Default,n as Disabled,d as DisabledStaysInert,c as Opening,l as TextOnly,z as __namedExportsOrder,G as default};
