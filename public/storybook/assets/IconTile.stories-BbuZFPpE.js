import{G as w,j as e}from"./iframe-BmgoXhQU.js";import{D as I,V as t,W as f,b as C,U as k,I as z}from"./Icons-Dp4_7734.js";import{I as T,a}from"./IconTile-CB4mFX_p.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-9A1wEaLP.js";import"./pressable-n_zMMF94.js";import"./tint-D2V_N-nu.js";const{expect:b,fn:h}=__STORYBOOK_MODULE_TEST__,x=["sm","md","lg"],B=["var(--status-positive)","var(--status-good)","var(--status-warning)","var(--status-poor)","var(--status-negative)","var(--series-down)","var(--series-up)","neutral"],y=Object.fromEntries(Object.entries(z).filter(o=>typeof o[1]=="function").sort(([o],[s])=>o.localeCompare(s)).map(([o,s])=>[o,e.jsx(s,{size:16},o)])),H={title:"Data display/IconTile",component:T,args:{color:"var(--status-positive)",icon:"RouterIcon"},argTypes:{size:{control:"inline-radio",options:x},color:{control:"text"},icon:{control:"select",options:Object.keys(y),mapping:y}},parameters:{docs:{subtitle:"A tinted square holding an item’s icon, in the item’s colour.",toc:w},guidance:{whenToUse:["The icon that starts an item’s row: a device, a capability.","A tile that opens something on its own, as `IconTileButton`: Home’s capability strip."],whenNotToUse:["An icon-only action: use `IconButton`.","A whole row that opens something: use `ListRow`, the tile inside.","An event on a timeline: use `TimelineNode`."],accessibility:{builtIn:["The plain tile is a `<span>`; library icons in it are `aria-hidden`.","`IconTileButton` is a native `<button>` named by `label`.","Disabled, the button stays focusable and says so, but ignores presses."],toHandle:["Words beside a plain tile that say what the item is.","A button `label` with the item and its state: “Video Calls: Good”."]}}}},i={},r={args:{size:"lg",color:"var(--status-negative)",icon:e.jsx(f,{size:18})}},c={args:{color:"neutral",icon:e.jsx(k,{size:16})}},l={args:{size:"lg",color:"var(--series-down)",icon:e.jsx(C,{size:18})}},d={render:()=>e.jsx(a,{color:"var(--status-good)",label:"Video calls: Good",onClick:h(),icon:e.jsx(t,{size:16})})},p={render:()=>e.jsx(a,{color:"neutral",label:"Video calls: Testing",onClick:h(),isDisabled:!0,icon:e.jsx(t,{size:16})})},v=h(),u={tags:["!autodocs"],render:()=>e.jsx(a,{color:"var(--status-good)",label:"Video calls: Good",onClick:v,icon:e.jsx(t,{size:16})}),play:async({canvas:o,userEvent:s})=>{const n=o.getByRole("button",{name:"Video calls: Good"});await s.click(n),await b(v).toHaveBeenCalledOnce(),await s.keyboard("{Enter}"),await b(v).toHaveBeenCalledTimes(2)}},m={tags:["!autodocs"],render:()=>e.jsx(a,{color:"neutral",label:"Video calls: Testing",onClick:v,isDisabled:!0,icon:e.jsx(t,{size:16})}),play:async({canvas:o,userEvent:s})=>{const n=o.getByRole("button",{name:"Video calls: Testing"});await s.keyboard("{Tab}"),await b(n).toHaveFocus(),await b(n).toHaveAttribute("aria-disabled","true"),await s.keyboard("{Enter}"),await s.click(n),await b(v).not.toHaveBeenCalled()}},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsx("div",{className:"grid grid-cols-[repeat(8,max-content)] items-center gap-12",children:x.map(o=>B.map(s=>e.jsx(T,{size:o,color:s,icon:e.jsx(I,{size:16})},`${o}-${s}`)))}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx(a,{color:"var(--status-positive)",label:"Video calls: Excellent",onClick:h(),icon:e.jsx(t,{size:16})}),e.jsx(a,{color:"neutral",label:"Video calls: Testing",onClick:h(),isDisabled:!0,icon:e.jsx(t,{size:16})})]})]})},N=["Default","Disconnected","Neutral","Large","Button","ButtonDisabled","ButtonOpening","ButtonDisabledStaysInert","AllStates"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"A wash of the icon's own colour: a router in the device list.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    color: 'var(--status-negative)',
    icon: <WifiOffIcon size={18} />
  }
}`,...r.parameters?.docs?.source},description:{story:"An absent connection: the same wash, in the negative colour.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    icon: <UnknownDeviceIcon size={16} />
  }
}`,...c.parameters?.docs?.source},description:{story:"The sunken background, for something uncategorised or not yet rated.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    color: 'var(--series-down)',
    icon: <WifiIcon size={18} />
  }
}`,...l.parameters?.docs?.source},description:{story:"The connection strip's tile.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IconTileButton color="var(--status-good)" label="Video calls: Good" onClick={fn()} icon={<VideoCallIcon size={16} />} />
}`,...d.parameters?.docs?.source},description:{story:"Opens what it stands for: hover and keyboard focus deepen the tint and lift it, a touch larger.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IconTileButton color="neutral" label="Video calls: Testing" onClick={fn()} isDisabled icon={<VideoCallIcon size={16} />} />
}`,...p.parameters?.docs?.source},description:{story:"Inert while a test replaces what it opens.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <IconTileButton color="var(--status-good)" label="Video calls: Good" onClick={onOpenTile} icon={<VideoCallIcon size={16} />} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const tile = canvas.getByRole('button', {
      name: 'Video calls: Good'
    });
    await userEvent.click(tile);
    await expect(onOpenTile).toHaveBeenCalledOnce();
    await userEvent.keyboard('{Enter}');
    await expect(onOpenTile).toHaveBeenCalledTimes(2);
  }
}`,...u.parameters?.docs?.source},description:{story:"The button form opens on a click, and on Enter once it has focus.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <IconTileButton color="neutral" label="Video calls: Testing" onClick={onOpenTile} isDisabled icon={<VideoCallIcon size={16} />} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const tile = canvas.getByRole('button', {
      name: 'Video calls: Testing'
    });
    await userEvent.keyboard('{Tab}');
    await expect(tile).toHaveFocus();
    await expect(tile).toHaveAttribute('aria-disabled', 'true');
    await userEvent.keyboard('{Enter}');
    await userEvent.click(tile);
    await expect(onOpenTile).not.toHaveBeenCalled();
  }
}`,...m.parameters?.docs?.source},description:{story:"Disabled, it stays in the Tab order, announced as disabled, but Enter or a click does nothing.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {/* A grid, so each colour's column lines up across sizes. */}
      <div className="grid grid-cols-[repeat(8,max-content)] items-center gap-12">
        {SIZES.map(size => COLORS.map(color => <IconTile key={\`\${size}-\${color}\`} size={size} color={color} icon={<DeviceIcon size={16} />} />))}
      </div>
      <div className="flex items-center gap-12">
        <IconTileButton color="var(--status-positive)" label="Video calls: Excellent" onClick={fn()} icon={<VideoCallIcon size={16} />} />
        <IconTileButton color="neutral" label="Video calls: Testing" onClick={fn()} isDisabled icon={<VideoCallIcon size={16} />} />
      </div>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Every size in each colour the app uses, then the button form.",...g.parameters?.docs?.description}}};export{g as AllStates,d as Button,p as ButtonDisabled,m as ButtonDisabledStaysInert,u as ButtonOpening,i as Default,r as Disconnected,l as Large,c as Neutral,N as __namedExportsOrder,H as default};
