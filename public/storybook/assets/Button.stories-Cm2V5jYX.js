import{j as n,r as m}from"./iframe-BFCGvnoX.js";import{i as g,a as l}from"./icon-options-CYtFWFnn.js";import{P as p}from"./Icons-BMD2BtZT.js";import{B as c}from"./Button-BOqJQCU7.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-DtcT_dLf.js";import"./pressable-n_zMMF94.js";import"./ButtonSpinner-BedQ1TJ5.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,L={title:"Actions/Button",component:c,args:{children:"Run test",onClick:u()},argTypes:{variant:{control:"inline-radio",options:["solid","soft"]},tone:{control:"inline-radio",options:["neutral","accent","negative"]},size:{control:"inline-radio",options:["sm","md"]},icon:g}},e={args:{variant:"solid",icon:l("PlayIcon")}},o={args:{variant:"solid",tone:"negative",icon:l("StopIcon"),children:"Stop"}},r={args:{variant:"soft"}},t={args:{variant:"soft",tone:"negative",children:"Dismiss"}},d={args:{variant:"solid",icon:l("PlayIcon"),isLoading:!0,loadingLabel:"Testing…"}},s={args:{variant:"solid",icon:l("PlayIcon"),isDisabled:!0}},i={render:()=>n.jsx("div",{className:"grid grid-cols-[repeat(4,max-content)] items-center justify-items-start gap-12",children:[{variant:"solid"},{variant:"solid",tone:"negative"},{variant:"soft"},{variant:"soft",tone:"negative"},{variant:"soft",size:"md"}].map(a=>n.jsxs(m.Fragment,{children:[n.jsx(c,{...a,children:"Label"}),n.jsx(c,{...a,icon:p,children:"With icon"}),n.jsx(c,{...a,icon:p,isLoading:!0,children:"Loading"}),n.jsx(c,{...a,icon:p,isDisabled:!0,children:"Disabled"})]},JSON.stringify(a)))})},D=["Solid","SolidNegative","Soft","SoftNegative","Loading","Disabled","AllStates"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon')
  }
}`,...e.parameters?.docs?.source},description:{story:"A page's main action.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    tone: 'negative',
    icon: iconArg('StopIcon'),
    children: 'Stop'
  }
}`,...o.parameters?.docs?.source},description:{story:"Stopping what the main action started.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft'
  }
}`,...r.parameters?.docs?.source},description:{story:"Everything else.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    tone: 'negative',
    children: 'Dismiss'
  }
}`,...t.parameters?.docs?.source},description:{story:"On a red surface, like an error Banner's Dismiss and Retry.",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isLoading: true,
    loadingLabel: 'Testing…'
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isDisabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () =>
  // A grid, so each state's column lines up across sizes.
  <div className="grid grid-cols-[repeat(4,max-content)] items-center justify-items-start gap-12">
      {([{
      variant: 'solid'
    }, {
      variant: 'solid',
      tone: 'negative'
    }, {
      variant: 'soft'
    }, {
      variant: 'soft',
      tone: 'negative'
    }, {
      variant: 'soft',
      size: 'md'
    }] as const).map(appearance => <Fragment key={JSON.stringify(appearance)}>
          <Button {...appearance}>Label</Button>
          <Button {...appearance} icon={PlayIcon}>
            With icon
          </Button>
          <Button {...appearance} icon={PlayIcon} isLoading>
            Loading
          </Button>
          <Button {...appearance} icon={PlayIcon} isDisabled>
            Disabled
          </Button>
        </Fragment>)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every variant in every state.",...i.parameters?.docs?.description}}};export{i as AllStates,s as Disabled,d as Loading,r as Soft,t as SoftNegative,e as Solid,o as SolidNegative,D as __namedExportsOrder,L as default};
