import{j as o}from"./iframe-8xFwRzl8.js";import{i as d,a as l}from"./icon-options-BBj6K2DQ.js";import{R as p,P as m,M as u,C as g}from"./Icons-DFyr0JWQ.js";import{I as e}from"./IconButton-gzroZ6zX.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-D1carl3E.js";import"./pressable-n_zMMF94.js";import"./ButtonSpinner-BhRtaQDR.js";import"./Tooltip-NsoS7yJp.js";import"./layers-D5UzyUFr.js";import"./usePositioner-CVBGkvCK.js";import"./useBaseUiId-DG5Fkur3.js";import"./useOpenChangeComplete-D6p8M7Y8.js";import"./useTimeout-Cf86OgMz.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-Bn0uP3OG.js";import"./DirectionContext-Dx4gUMCK.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,P={title:"Actions/IconButton",component:e,args:{label:"Refresh",icon:l("RefreshIcon"),onClick:h()},argTypes:{variant:{control:"inline-radio",options:["soft","ghost"]},iconSize:{control:"inline-radio",options:[16,14]},tooltipSide:{control:"inline-radio",options:["top","bottom","left","right"]},icon:d}},r={},s={args:{label:"Close",icon:l("CloseIcon"),variant:"ghost"}},t={args:{label:"Run",icon:l("PlayIcon"),iconSize:14}},n={args:{label:"Help",icon:l("HelpIcon"),tooltip:"Latency is the round trip to each service, every minute."}},c={args:{isLoading:!0}},a={args:{isDisabled:!0,tooltip:"Already checking."}},i={render:()=>o.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[o.jsx(e,{label:"Refresh",icon:p}),o.jsx(e,{label:"Run",icon:m,iconSize:14}),o.jsx(e,{label:"Refresh",icon:p,isLoading:!0}),o.jsx(e,{label:"Refresh",icon:p,isDisabled:!0}),o.jsx(e,{label:"Options",icon:u}),o.jsx(e,{label:"Close",icon:g,variant:"ghost"})]})},T=["Default","Ghost","SmallIcon","WithHint","Loading","Disabled","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A neutral inset chip: refresh, help, share.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Close',
    icon: iconArg('CloseIcon'),
    variant: 'ghost'
  }
}`,...s.parameters?.docs?.source},description:{story:"No fill until hovered: a dialog's close.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Run',
    icon: iconArg('PlayIcon'),
    iconSize: 14
  }
}`,...t.parameters?.docs?.source},description:{story:"An icon that reads large at 16 drops to 14.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help',
    icon: iconArg('HelpIcon'),
    tooltip: 'Latency is the round trip to each service, every minute.'
  }
}`,...n.parameters?.docs?.source},description:{story:"The tooltip says more than the label.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    tooltip: 'Already checking.'
  }
}`,...a.parameters?.docs?.source},description:{story:"Still focusable, so its tooltip can say why.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <IconButton label="Refresh" icon={RefreshIcon} />
      <IconButton label="Run" icon={PlayIcon} iconSize={14} />
      <IconButton label="Refresh" icon={RefreshIcon} isLoading />
      <IconButton label="Refresh" icon={RefreshIcon} isDisabled />
      <IconButton label="Options" icon={MoreVerticalIcon} />
      <IconButton label="Close" icon={CloseIcon} variant="ghost" />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every state.",...i.parameters?.docs?.description}}};export{i as AllStates,r as Default,a as Disabled,s as Ghost,c as Loading,t as SmallIcon,n as WithHint,T as __namedExportsOrder,P as default};
