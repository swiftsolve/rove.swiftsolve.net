import{G as m,j as n,r as g}from"./iframe-5fPjh3UC.js";import{i as u,a as l}from"./icon-options-Dj34RjqJ.js";import{P as p}from"./Icons-MWd5LUkt.js";import{B as c}from"./Button-D63glBgg.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-CJYtKkBI.js";import"./pressable-n_zMMF94.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,D={title:"Actions/Button",component:c,args:{children:"Run test",onClick:v()},argTypes:{variant:{control:"inline-radio",options:["solid","soft"]},tone:{control:"inline-radio",options:["neutral","accent","negative"]},size:{control:"inline-radio",options:["sm","md"]},icon:u},parameters:{docs:{toc:m},guidance:{use:["Solid for the page’s main action, negative to stop it: “Run test”, “Stop”.","Soft for everything else: “Scan again”, “Check now”.","Soft negative only on a red surface, like an error `Banner`’s Dismiss."],avoid:["Opening another view or an address: use `Link`.","An icon with no words: use `IconButton`.","Checking a field’s value, like Test: use `TextFieldAction`."],accessibility:{builtIn:['A native `<button>`, `type="button"` unless set.',"Disabled and loading stay focusable, ignore presses and tell screen readers.","Its icon and spinner are hidden from screen readers."],toHandle:["A label that says what happens, like “Run test”.","On a disabled button, a `Tooltip` that says why."]}}}},a={args:{variant:"solid",icon:l("PlayIcon")}},t={args:{variant:"solid",tone:"negative",icon:l("StopIcon"),children:"Stop"}},s={args:{variant:"soft"}},o={args:{variant:"soft",tone:"negative",children:"Dismiss"}},d={args:{variant:"solid",icon:l("PlayIcon"),isLoading:!0,loadingLabel:"Testing…"}},r={args:{variant:"solid",icon:l("PlayIcon"),isDisabled:!0}},i={render:()=>n.jsx("div",{className:"grid grid-cols-[repeat(4,max-content)] items-center justify-items-start gap-12",children:[{variant:"solid"},{variant:"solid",tone:"negative"},{variant:"soft"},{variant:"soft",tone:"negative"},{variant:"soft",size:"md"}].map(e=>n.jsxs(g.Fragment,{children:[n.jsx(c,{...e,children:"Label"}),n.jsx(c,{...e,icon:p,children:"With icon"}),n.jsx(c,{...e,icon:p,isLoading:!0,children:"Loading"}),n.jsx(c,{...e,icon:p,isDisabled:!0,children:"Disabled"})]},JSON.stringify(e)))})},x=["Solid","SolidNegative","Soft","SoftNegative","Loading","Disabled","AllStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon')
  }
}`,...a.parameters?.docs?.source},description:{story:"A page's main action.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    tone: 'negative',
    icon: iconArg('StopIcon'),
    children: 'Stop'
  }
}`,...t.parameters?.docs?.source},description:{story:"Stopping what the main action started.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft'
  }
}`,...s.parameters?.docs?.source},description:{story:"Everything else.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    tone: 'negative',
    children: 'Dismiss'
  }
}`,...o.parameters?.docs?.source},description:{story:"On a red surface, like an error Banner's Dismiss and Retry.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isLoading: true,
    loadingLabel: 'Testing…'
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isDisabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Every variant in every state.",...i.parameters?.docs?.description}}};export{i as AllStates,r as Disabled,d as Loading,s as Soft,o as SoftNegative,a as Solid,t as SolidNegative,x as __namedExportsOrder,D as default};
