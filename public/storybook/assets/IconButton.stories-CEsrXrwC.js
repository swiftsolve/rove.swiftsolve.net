import{G as d,j as e}from"./iframe-RWCjgjma.js";import{i as m,a as l}from"./icon-options-BJDD2Eoc.js";import{R as p,P as u,M as h,C as g}from"./Icons-bkJlC8wb.js";import{I as o}from"./IconButton-08aiGydL.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-CQ-b8E7M.js";import"./Tooltip-CvsY3PuX.js";import"./layers-D5UzyUFr.js";import"./usePositioner-BlCIaKDQ.js";import"./useBaseUiId-Dn29YJQo.js";import"./useOpenChangeComplete-dlW0hiCF.js";import"./useTimeout-D5anX_Ze.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CFrsFuXv.js";import"./DirectionContext-B-lzyrpY.js";import"./pressable-n_zMMF94.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,H={title:"Actions/IconButton",component:o,args:{label:"Refresh",icon:l("RefreshIcon"),onClick:b()},argTypes:{variant:{control:"inline-radio",options:["soft","ghost"]},iconSize:{control:"inline-radio",options:[16,14]},tooltipSide:{control:"inline-radio",options:["top","bottom","left","right"]},icon:m},parameters:{docs:{toc:d},guidance:{use:["A frequent action an icon says on its own: refresh, help, close.","Soft, the default, as a chip in a header or a toolbar.",'`variant="ghost"` where a chip would be heavy, like a dialog’s close.',"A help button, with the hint in `tooltip`.","`iconSize={14}` for an icon that reads large, like Play. 16 otherwise."],avoid:["An action that needs words: use `Button`.","Several actions behind one icon: use `Menu`.","Opening another view: use `Link`.","An item’s tile that opens it: use `IconTileButton`."],accessibility:{builtIn:['A native `<button>`, `type="button"` unless set: Enter and Space press it.',"`label` names it and is its tooltip. The icon is hidden from screen readers.","The tooltip opens on hover and keyboard focus. A `tooltip` that says more is read as its description.","A focus ring on keyboard focus.","Disabled and loading stay focusable, ignore every press and tell screen readers (`aria-disabled`, `aria-busy`)."],youHandle:["A `label` that says what happens: “Close”, not “X”.","An icon that means that action at a glance.","On a disabled button, a `tooltip` that says why."]}}}},s={},t={args:{label:"Close",icon:l("CloseIcon"),variant:"ghost"}},a={args:{label:"Run",icon:l("PlayIcon"),iconSize:14}},r={args:{label:"Help",icon:l("HelpIcon"),tooltip:"Latency is the round trip to each service, every minute."}},c={args:{isLoading:!0}},n={args:{isDisabled:!0,tooltip:"Already checking."}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(o,{label:"Refresh",icon:p}),e.jsx(o,{label:"Run",icon:u,iconSize:14}),e.jsx(o,{label:"Refresh",icon:p,isLoading:!0}),e.jsx(o,{label:"Refresh",icon:p,isDisabled:!0}),e.jsx(o,{label:"Options",icon:h}),e.jsx(o,{label:"Close",icon:g,variant:"ghost"})]})},z=["Default","Ghost","SmallIcon","WithHint","Loading","Disabled","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"A neutral inset chip: refresh, help, share.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Close',
    icon: iconArg('CloseIcon'),
    variant: 'ghost'
  }
}`,...t.parameters?.docs?.source},description:{story:"No fill until hovered: a dialog's close.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Run',
    icon: iconArg('PlayIcon'),
    iconSize: 14
  }
}`,...a.parameters?.docs?.source},description:{story:"An icon that reads large at 16 drops to 14.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help',
    icon: iconArg('HelpIcon'),
    tooltip: 'Latency is the round trip to each service, every minute.'
  }
}`,...r.parameters?.docs?.source},description:{story:"The tooltip says more than the label.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    tooltip: 'Already checking.'
  }
}`,...n.parameters?.docs?.source},description:{story:"Still focusable, so its tooltip can say why.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <IconButton label="Refresh" icon={RefreshIcon} />
      <IconButton label="Run" icon={PlayIcon} iconSize={14} />
      <IconButton label="Refresh" icon={RefreshIcon} isLoading />
      <IconButton label="Refresh" icon={RefreshIcon} isDisabled />
      <IconButton label="Options" icon={MoreVerticalIcon} />
      <IconButton label="Close" icon={CloseIcon} variant="ghost" />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every state.",...i.parameters?.docs?.description}}};export{i as AllStates,s as Default,n as Disabled,t as Ghost,c as Loading,a as SmallIcon,r as WithHint,z as __namedExportsOrder,H as default};
