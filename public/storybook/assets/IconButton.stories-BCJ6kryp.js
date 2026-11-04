import{G as d,j as e}from"./iframe-B9LZtMC-.js";import{i as m,a as l}from"./icon-options-BgxzVYnp.js";import{R as p,P as u,M as h,C as g}from"./Icons-CpsnkE9_.js";import{I as o}from"./IconButton-CjKRKArK.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-DUOuXWRV.js";import"./Tooltip-D5kdexAS.js";import"./layers-D5UzyUFr.js";import"./usePositioner-B4-e_mQz.js";import"./useBaseUiId-cupIs61Q.js";import"./useOpenChangeComplete-COtuKJPs.js";import"./useTimeout-aJtGztx6.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-BRXOoZpr.js";import"./DirectionContext-CcMPKayw.js";import"./pressable-n_zMMF94.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,E={title:"Actions/IconButton",component:o,args:{label:"Refresh",icon:l("RefreshIcon"),onClick:b()},argTypes:{variant:{control:"inline-radio",options:["soft","ghost"]},iconSize:{control:"inline-radio",options:[16,14]},tooltipSide:{control:"inline-radio",options:["top","bottom","left","right"]},icon:m},parameters:{docs:{toc:d},guidance:{use:["An action an icon says on its own, like Refresh.","A help button, with the hint in `tooltip`.",'`variant="ghost"` where a chip is too heavy, like a `Dialog`’s close.'],avoid:["An action that needs words: use `Button`.","Several actions behind one icon: use `Menu`.","An item’s tile that opens it: use `IconTileButton`."],accessibility:{builtIn:["A native `<button>`, named by `label`. The icon is hidden.","Shows `label` as a tooltip on hover and keyboard focus.","A longer `tooltip` is read as its description.","Disabled and loading stay focusable and ignore presses."],toHandle:["A `label` that says what happens, like “Close”.","An icon that means that action at a glance.","On a disabled button, a `tooltip` that says why."]}}}},s={},t={args:{label:"Close",icon:l("CloseIcon"),variant:"ghost"}},a={args:{label:"Run",icon:l("PlayIcon"),iconSize:14}},n={args:{label:"Help",icon:l("HelpIcon"),tooltip:"Latency is the round trip to each service, every minute."}},c={args:{isLoading:!0}},r={args:{isDisabled:!0,tooltip:"Already checking."}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(o,{label:"Refresh",icon:p}),e.jsx(o,{label:"Run",icon:u,iconSize:14}),e.jsx(o,{label:"Refresh",icon:p,isLoading:!0}),e.jsx(o,{label:"Refresh",icon:p,isDisabled:!0}),e.jsx(o,{label:"Options",icon:h}),e.jsx(o,{label:"Close",icon:g,variant:"ghost"})]})},z=["Default","Ghost","SmallIcon","WithHint","Loading","Disabled","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"A neutral inset chip: refresh, help, share.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"An icon that reads large at 16 drops to 14.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help',
    icon: iconArg('HelpIcon'),
    tooltip: 'Latency is the round trip to each service, every minute.'
  }
}`,...n.parameters?.docs?.source},description:{story:"The tooltip says more than the label.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Every state.",...i.parameters?.docs?.description}}};export{i as AllStates,s as Default,r as Disabled,t as Ghost,c as Loading,a as SmallIcon,n as WithHint,z as __namedExportsOrder,E as default};
