import{G as y,j as e}from"./iframe-k6P9JMny.js";import{i as f,a as p}from"./icon-options-Ihh_3OnQ.js";import{R as m,P as I,M as v,C as w}from"./Icons-D7hrrHAf.js";import{I as o}from"./IconButton-CK_CtSJe.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./ButtonSpinner-DIv4hQpw.js";import"./Tooltip-BGFymMEa.js";import"./layers-D5UzyUFr.js";import"./usePositioner-NKV-whhd.js";import"./useBaseUiId-fDgGL0-t.js";import"./useOpenChangeComplete-BE1Ed7gW.js";import"./useTimeout-DsvIGTap.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DyvOqLdE.js";import"./DirectionContext-DmsExjg6.js";import"./pressable-n_zMMF94.js";const{expect:h,fn:A}=__STORYBOOK_MODULE_TEST__,U={title:"Actions/IconButton",component:o,args:{label:"Refresh",icon:p("RefreshIcon"),onClick:A()},argTypes:{variant:{control:"inline-radio",options:["soft","ghost"]},iconSize:{control:"inline-radio",options:[16,14]},tooltipSide:{control:"inline-radio",options:["top","bottom","left","right"]},icon:f},parameters:{docs:{subtitle:"A square button with an icon instead of words, named by its tooltip.",toc:y},guidance:{whenToUse:["An action an icon says on its own, like Refresh.","A help button, with the hint in `tooltip`.",'An action where a chip is too heavy, `variant="ghost"`: a `Dialog`’s close.'],whenNotToUse:["An action that needs words: use `Button`.","Several actions behind one icon: use `Menu`.","An item’s tile that opens it: use `IconTileButton`."],accessibility:{builtIn:["A native `<button>`, named by `label`. The icon is hidden.","Shows `label` as a tooltip on hover and keyboard focus.","A longer `tooltip` is read as its description.","Disabled and loading stay focusable and ignore presses."],toHandle:["A `label` that says what happens, like “Close”.","An icon that means that action at a glance.","On a disabled button, a `tooltip` that says why."]}}}},t={},a={args:{label:"Close",icon:p("CloseIcon"),variant:"ghost"}},s={args:{label:"Run",icon:p("PlayIcon"),iconSize:14}},n={args:{label:"About latency",icon:p("InfoIcon"),tooltip:"Latency is the round trip to each service, every minute."}},l={args:{isLoading:!0}},r={args:{isDisabled:!0,tooltip:"Already checking."}},i={tags:["!autodocs"],play:async({args:b,canvas:g,userEvent:d})=>{const u=g.getByRole("button",{name:"Refresh"});await d.keyboard("{Tab}"),await h(u).toHaveFocus(),await d.keyboard("{Enter}"),await d.click(u),await h(b.onClick).toHaveBeenCalledTimes(2)}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(o,{label:"Refresh",icon:m}),e.jsx(o,{label:"Run",icon:I,iconSize:14}),e.jsx(o,{label:"Refresh",icon:m,isLoading:!0}),e.jsx(o,{label:"Refresh",icon:m,isDisabled:!0}),e.jsx(o,{label:"Options",icon:v}),e.jsx(o,{label:"Close",icon:w,variant:"ghost"})]})},W=["Default","Ghost","SmallIcon","WithHint","Loading","Disabled","PressingWithKeyboard","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"A neutral inset chip: refresh, help, share.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Close',
    icon: iconArg('CloseIcon'),
    variant: 'ghost'
  }
}`,...a.parameters?.docs?.source},description:{story:"No fill until hovered: a dialog's close.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Run',
    icon: iconArg('PlayIcon'),
    iconSize: 14
  }
}`,...s.parameters?.docs?.source},description:{story:"An icon that reads large at 16 drops to 14.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'About latency',
    icon: iconArg('InfoIcon'),
    tooltip: 'Latency is the round trip to each service, every minute.'
  }
}`,...n.parameters?.docs?.source},description:{story:"The tooltip says more than the label.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    tooltip: 'Already checking.'
  }
}`,...r.parameters?.docs?.source},description:{story:"Still focusable, so its tooltip can say why.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Refresh'
    });
    await userEvent.keyboard('{Tab}');
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...i.parameters?.docs?.source},description:{story:"Named by its label, it runs from the keyboard as from a click.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <IconButton label="Refresh" icon={RefreshIcon} />
      <IconButton label="Run" icon={PlayIcon} iconSize={14} />
      <IconButton label="Refresh" icon={RefreshIcon} isLoading />
      <IconButton label="Refresh" icon={RefreshIcon} isDisabled />
      <IconButton label="Options" icon={MoreVerticalIcon} />
      <IconButton label="Close" icon={CloseIcon} variant="ghost" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Every state.",...c.parameters?.docs?.description}}};export{c as AllStates,t as Default,r as Disabled,a as Ghost,l as Loading,i as PressingWithKeyboard,s as SmallIcon,n as WithHint,W as __namedExportsOrder,U as default};
