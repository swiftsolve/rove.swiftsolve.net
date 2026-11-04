import{G as d,j as e}from"./iframe-BmgoXhQU.js";import{i as m,a as l}from"./icon-options-7Zxu_T4o.js";import{R as p,P as u,M as h,C as g}from"./Icons-Dp4_7734.js";import{I as o}from"./IconButton-DYcJw0R8.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-9A1wEaLP.js";import"./ButtonSpinner-CMgYTCoo.js";import"./Tooltip-BS_moT-e.js";import"./layers-D5UzyUFr.js";import"./usePositioner-DaWUI7b0.js";import"./useBaseUiId-CMBO8PiV.js";import"./useOpenChangeComplete-CbUdO_ql.js";import"./useTimeout-Cs1VpnJX.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-u9PdWn-n.js";import"./DirectionContext-hKkma9Zk.js";import"./pressable-n_zMMF94.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,E={title:"Actions/IconButton",component:o,args:{label:"Refresh",icon:l("RefreshIcon"),onClick:b()},argTypes:{variant:{control:"inline-radio",options:["soft","ghost"]},iconSize:{control:"inline-radio",options:[16,14]},tooltipSide:{control:"inline-radio",options:["top","bottom","left","right"]},icon:m},parameters:{docs:{subtitle:"A square button with an icon instead of words, named by its tooltip.",toc:d},guidance:{whenToUse:["An action an icon says on its own, like Refresh.","A help button, with the hint in `tooltip`.",'An action where a chip is too heavy, `variant="ghost"`: a `Dialog`’s close.'],whenNotToUse:["An action that needs words: use `Button`.","Several actions behind one icon: use `Menu`.","An item’s tile that opens it: use `IconTileButton`."],accessibility:{builtIn:["A native `<button>`, named by `label`. The icon is hidden.","Shows `label` as a tooltip on hover and keyboard focus.","A longer `tooltip` is read as its description.","Disabled and loading stay focusable and ignore presses."],toHandle:["A `label` that says what happens, like “Close”.","An icon that means that action at a glance.","On a disabled button, a `tooltip` that says why."]}}}},t={},s={args:{label:"Close",icon:l("CloseIcon"),variant:"ghost"}},n={args:{label:"Run",icon:l("PlayIcon"),iconSize:14}},a={args:{label:"Help",icon:l("HelpIcon"),tooltip:"Latency is the round trip to each service, every minute."}},c={args:{isLoading:!0}},r={args:{isDisabled:!0,tooltip:"Already checking."}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(o,{label:"Refresh",icon:p}),e.jsx(o,{label:"Run",icon:u,iconSize:14}),e.jsx(o,{label:"Refresh",icon:p,isLoading:!0}),e.jsx(o,{label:"Refresh",icon:p,isDisabled:!0}),e.jsx(o,{label:"Options",icon:h}),e.jsx(o,{label:"Close",icon:g,variant:"ghost"})]})},z=["Default","Ghost","SmallIcon","WithHint","Loading","Disabled","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"A neutral inset chip: refresh, help, share.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Close',
    icon: iconArg('CloseIcon'),
    variant: 'ghost'
  }
}`,...s.parameters?.docs?.source},description:{story:"No fill until hovered: a dialog's close.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Run',
    icon: iconArg('PlayIcon'),
    iconSize: 14
  }
}`,...n.parameters?.docs?.source},description:{story:"An icon that reads large at 16 drops to 14.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help',
    icon: iconArg('HelpIcon'),
    tooltip: 'Latency is the round trip to each service, every minute.'
  }
}`,...a.parameters?.docs?.source},description:{story:"The tooltip says more than the label.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    tooltip: 'Already checking.'
  }
}`,...r.parameters?.docs?.source},description:{story:"Still focusable, so its tooltip can say why.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <IconButton label="Refresh" icon={RefreshIcon} />
      <IconButton label="Run" icon={PlayIcon} iconSize={14} />
      <IconButton label="Refresh" icon={RefreshIcon} isLoading />
      <IconButton label="Refresh" icon={RefreshIcon} isDisabled />
      <IconButton label="Options" icon={MoreVerticalIcon} />
      <IconButton label="Close" icon={CloseIcon} variant="ghost" />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every state.",...i.parameters?.docs?.description}}};export{i as AllStates,t as Default,r as Disabled,s as Ghost,c as Loading,n as SmallIcon,a as WithHint,z as __namedExportsOrder,E as default};
