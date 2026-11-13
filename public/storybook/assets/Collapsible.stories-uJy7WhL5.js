import{G as w,j as e,r as C}from"./iframe-BNpRpaso.js";import{C as y}from"./Card-DJO_GYqx.js";import{D as v,a as u}from"./DataRow-KulICs62.js";import{s as f}from"./Icons-B2sj8j4v.js";import{C as h,a as m,b}from"./CollapsibleTrigger-C8QHdxvc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./StretchedLink-DcDe-JsP.js";import"./cn-B7OrgygE.js";import"./useBaseUiId-3EXk2NH1.js";import"./useControlled-4OLiGiZD.js";import"./useOpenChangeComplete-Cr_Xspjj.js";import"./useTimeout-C4DH9Z8V.js";import"./stateAttributesMapping-DqawBeMT.js";import"./useButton-B2jxgGCm.js";const{expect:r,fn:T}=__STORYBOOK_MODULE_TEST__,O=["group flex w-full items-center justify-between gap-12 text-left","h-(--card-header-height) px-(--card-header-padding-x) type-heading text-primary","transition-[background] duration-(--duration-fast) ease-in-out hover:bg-overlay-hover focus-visible:bg-overlay-hover"].join(" "),j=["shrink-0 text-tertiary transition-transform duration-(--duration-normal) ease-out","group-data-panel-open:transform-[rotate(180deg)]"].join(" "),k="bg-inset px-(--card-body-padding) py-(--card-header-padding-y)";function F(){return e.jsxs(e.Fragment,{children:[e.jsxs(m,{className:O,children:["Connection details",e.jsx(f,{size:14,className:j})]}),e.jsx(h,{children:e.jsxs(v,{density:"compact",className:k,children:[e.jsx(u,{label:"IP address",value:"192.168.1.20"}),e.jsx(u,{label:"Gateway",value:"192.168.1.1"}),e.jsx(u,{label:"Public IP",value:"203.0.113.57"})]})})]})}function p({isOpen:a,onOpenChange:l,...s}){const[t,x]=C.useState(a);return e.jsx(y,{as:"div",className:"w-[360px]",children:e.jsx(b,{...s,isOpen:t,onOpenChange:g=>{x(g),l(g)}})})}const K={title:"Containers/Collapsible",component:b,subcomponents:{CollapsibleTrigger:m,CollapsiblePanel:h},args:{isOpen:!1,onOpenChange:T(),hasFocusFrame:!1,children:F()},argTypes:{as:{control:"inline-radio",options:["div","li"]},children:{control:!1}},parameters:{docs:{subtitle:"A panel that shows and hides under its trigger.",toc:w},guidance:{whenToUse:["Details most people don’t need, like Home’s connection card.","A group’s rows on request, like an app’s hosts."],whenNotToUse:["Content everyone needs: show it in the `Card`.","Details big enough for their own page: use a `Card` with `onOpen`.","A few actions behind a button: use `Menu`."],accessibility:{builtIn:["The trigger is a native `<button>` with `aria-expanded`.","A closed panel leaves the page and the accessibility tree."],toHandle:["A trigger name that says what it shows: “Connection details”.","The trigger’s look: hover, focus and any chevron.","With `hasFocusFrame`, the header’s hover look on focus too."]}},partGuidance:{CollapsibleTrigger:{whenToUse:["The control that opens and closes the panel: a card’s header, a group’s row."],whenNotToUse:["Going to another page: use `Link`."],accessibility:{builtIn:["A native `<button>` with `aria-expanded`, tied to the panel it controls."],toHandle:["A name that says what it shows: “Connection details”.","Its look: hover, focus and any chevron."]}},CollapsiblePanel:{whenToUse:["What the trigger shows and hides, right after it."],whenNotToUse:["Content everyone needs: show it in the `Card`."],accessibility:{builtIn:["Closed, it leaves the page and the accessibility tree."],toHandle:["Content that makes sense read straight after the trigger."]}}}},render:a=>e.jsx(p,{...a},String(a.isOpen))},c={},d={args:{isOpen:!0}},o={args:{hasFocusFrame:!0,isOpen:!0,className:"rounded-[inherit]"}},n={tags:["!autodocs"],play:async({args:a,canvas:l,userEvent:s})=>{const t=l.getByRole("button",{name:"Connection details"});await s.keyboard("{Tab}"),await r(t).toHaveFocus(),await s.keyboard("{Enter}"),await r(t).toHaveAttribute("aria-expanded","true"),await r(l.getByText("192.168.1.20")).toBeVisible(),await s.keyboard(" "),await r(t).toHaveAttribute("aria-expanded","false"),await s.click(t),await r(t).toHaveAttribute("aria-expanded","true"),await r(a.onOpenChange).toHaveBeenCalledTimes(3)}},i={render:a=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsx(p,{...a}),e.jsx(p,{...a,isOpen:!0}),e.jsx(p,{...a,isOpen:!0,hasFocusFrame:!0,className:"rounded-[inherit]"})]})},M=["Closed","Open","FocusFrame","Toggling","AllStates"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Closed, open and framed together.",...i.parameters?.docs?.description}}};export{i as AllStates,c as Closed,o as FocusFrame,d as Open,n as Toggling,M as __namedExportsOrder,K as default};
