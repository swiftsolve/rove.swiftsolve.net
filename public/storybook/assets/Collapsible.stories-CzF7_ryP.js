import{G as w,j as e,r as y}from"./iframe-DhSdnrfP.js";import{C}from"./Card-DmfNz6kp.js";import{D as v,a as u}from"./DataRow-BUEIcy78.js";import{s as f}from"./Icons-D6LElisS.js";import{C as m,a as h,b}from"./CollapsibleTrigger-wvmzivfL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StretchedLink-Nypr_EkZ.js";import"./cn-CYafEIXe.js";import"./useBaseUiId-4SRfb2lw.js";import"./useControlled-CP5J9cUj.js";import"./useOpenChangeComplete-BlQwA_Bk.js";import"./useTimeout-CTaLl54s.js";import"./stateAttributesMapping-DqawBeMT.js";import"./useButton-CGONS0ay.js";const{expect:s,fn:O}=__STORYBOOK_MODULE_TEST__,T=["group flex w-full items-center justify-between gap-12 text-left","h-(--card-header-height) px-(--card-header-padding-x) type-heading text-primary","transition-[background] duration-(--duration-fast) ease-in-out hover:bg-overlay-hover focus-visible:bg-overlay-hover"].join(" "),j=["shrink-0 text-tertiary transition-transform duration-(--duration-normal) ease-out","group-data-panel-open:transform-[rotate(180deg)]"].join(" "),F="bg-inset px-(--card-body-padding) py-(--card-header-padding-y)";function k(){return e.jsxs(e.Fragment,{children:[e.jsxs(h,{className:T,children:["Connection details",e.jsx(f,{size:14,className:j})]}),e.jsx(m,{children:e.jsxs(v,{density:"compact",className:F,children:[e.jsx(u,{label:"IP address",value:"192.168.1.20"}),e.jsx(u,{label:"Gateway",value:"192.168.1.1"}),e.jsx(u,{label:"Public IP",value:"203.0.113.57"})]})})]})}function p({isOpen:a,onOpenChange:c,...r}){const[t,x]=y.useState(a);return e.jsx(C,{as:"div",className:"w-[360px]",children:e.jsx(b,{...r,isOpen:t,onOpenChange:g=>{x(g),c(g)}})})}const K={title:"Containers/Collapsible",component:b,subcomponents:{CollapsibleTrigger:h,CollapsiblePanel:m},args:{isOpen:!1,onOpenChange:O(),hasFocusFrame:!1,children:k()},argTypes:{as:{control:"inline-radio",options:["div","li"]},children:{control:!1}},parameters:{docs:{subtitle:"A panel that shows and hides under its trigger.",toc:w},guidance:{whenToUse:["Details most people don’t need, like Home’s connection card.","A group’s rows on request, like an app’s hosts."],whenNotToUse:["Content everyone needs: show it in the `Card`.","Details big enough for their own page: use a `Card` with `onOpen`.","A few actions behind a button: use `Menu`."],accessibility:{builtIn:["The trigger is a native `<button>` with `aria-expanded`.","A closed panel leaves the page and the accessibility tree."],toHandle:["A trigger name that says what it shows: “Connection details”.","The trigger’s look: hover, focus and any chevron.","With `hasFocusFrame`, the header’s hover look on focus too."]}}},render:a=>e.jsx(p,{...a},String(a.isOpen))},l={},d={args:{isOpen:!0}},o={args:{hasFocusFrame:!0,isOpen:!0,className:"rounded-[inherit]"}},n={tags:["!autodocs"],play:async({args:a,canvas:c,userEvent:r})=>{const t=c.getByRole("button",{name:"Connection details"});await r.keyboard("{Tab}"),await s(t).toHaveFocus(),await r.keyboard("{Enter}"),await s(t).toHaveAttribute("aria-expanded","true"),await s(c.getByText("192.168.1.20")).toBeVisible(),await r.keyboard(" "),await s(t).toHaveAttribute("aria-expanded","false"),await r.click(t),await s(t).toHaveAttribute("aria-expanded","true"),await s(a.onOpenChange).toHaveBeenCalledTimes(3)}},i={render:a=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsx(p,{...a}),e.jsx(p,{...a,isOpen:!0}),e.jsx(p,{...a,isOpen:!0,hasFocusFrame:!0,className:"rounded-[inherit]"})]})},M=["Closed","Open","FocusFrame","Toggling","AllStates"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hasFocusFrame: true,
    isOpen: true,
    className: 'rounded-[inherit]'
  }
}`,...o.parameters?.docs?.source},description:{story:"Keyboard focus rings the whole collapsible, for a trigger that spans a card's header. Tab to it.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Connection details'
    });
    await userEvent.keyboard('{Tab}');
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('192.168.1.20')).toBeVisible();
    await userEvent.keyboard(' ');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(args.onOpenChange).toHaveBeenCalledTimes(3);
  }
}`,...n.parameters?.docs?.source},description:{story:"Enter and Space toggle it from the keyboard, as a click does.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-12">
      <ControlledCollapsible {...args} />
      <ControlledCollapsible {...args} isOpen />
      <ControlledCollapsible {...args} isOpen hasFocusFrame className="rounded-[inherit]" />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Closed, open and framed together.",...i.parameters?.docs?.description}}};export{i as AllStates,l as Closed,o as FocusFrame,d as Open,n as Toggling,M as __namedExportsOrder,K as default};
