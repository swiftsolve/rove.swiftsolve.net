import{G as g,j as n,r as m}from"./iframe-RWCjgjma.js";import{i as u,a as l}from"./icon-options-BJDD2Eoc.js";import{P as p}from"./Icons-bkJlC8wb.js";import{B as c}from"./Button-h0k1_ueK.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-CQ-b8E7M.js";import"./pressable-n_zMMF94.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,D={title:"Actions/Button",component:c,args:{children:"Run test",onClick:v()},argTypes:{variant:{control:"inline-radio",options:["solid","soft"]},tone:{control:"inline-radio",options:["neutral","accent","negative"]},size:{control:"inline-radio",options:["sm","md"]},icon:u},parameters:{docs:{toc:g},guidance:{use:["An action on this page: running a test, adding a device, retrying.",'Solid for the page’s main action, with `tone="negative"` to stop what it started.',"Soft for everything else, like a card’s Reset.",'Soft with `tone="negative"` on a red surface, like an error Banner’s Dismiss.','A form’s submit button, with `type="submit"`.'],avoid:["Opening another view or an address: use `Link`.","An icon with no words: use `IconButton`.","Picking one of a few options: use `SegmentedControl`.","Turning a setting on or off: use `Toggle`."],accessibility:{builtIn:['A native `<button>`, `type="button"` unless set: Enter and Space press it.',"A focus ring on keyboard focus.","Disabled and loading stay focusable, so a tooltip can say why. Both ignore every press, a submit included, and tell screen readers (`aria-disabled`, `aria-busy`).","The icon is hidden from screen readers. The label names the button."],youHandle:["A label that says what happens: “Run test”, not “OK”.","On a disabled button, a tooltip that says why.","A `loadingLabel` when the wait needs words."]}}}},a={args:{variant:"solid",icon:l("PlayIcon")}},t={args:{variant:"solid",tone:"negative",icon:l("StopIcon"),children:"Stop"}},o={args:{variant:"soft"}},s={args:{variant:"soft",tone:"negative",children:"Dismiss"}},d={args:{variant:"solid",icon:l("PlayIcon"),isLoading:!0,loadingLabel:"Testing…"}},i={args:{variant:"solid",icon:l("PlayIcon"),isDisabled:!0}},r={render:()=>n.jsx("div",{className:"grid grid-cols-[repeat(4,max-content)] items-center justify-items-start gap-12",children:[{variant:"solid"},{variant:"solid",tone:"negative"},{variant:"soft"},{variant:"soft",tone:"negative"},{variant:"soft",size:"md"}].map(e=>n.jsxs(m.Fragment,{children:[n.jsx(c,{...e,children:"Label"}),n.jsx(c,{...e,icon:p,children:"With icon"}),n.jsx(c,{...e,icon:p,isLoading:!0,children:"Loading"}),n.jsx(c,{...e,icon:p,isDisabled:!0,children:"Disabled"})]},JSON.stringify(e)))})},I=["Solid","SolidNegative","Soft","SoftNegative","Loading","Disabled","AllStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Stopping what the main action started.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft'
  }
}`,...o.parameters?.docs?.source},description:{story:"Everything else.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    tone: 'negative',
    children: 'Dismiss'
  }
}`,...s.parameters?.docs?.source},description:{story:"On a red surface, like an error Banner's Dismiss and Retry.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isLoading: true,
    loadingLabel: 'Testing…'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isDisabled: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Every variant in every state.",...r.parameters?.docs?.description}}};export{r as AllStates,i as Disabled,d as Loading,o as Soft,s as SoftNegative,a as Solid,t as SolidNegative,I as __namedExportsOrder,D as default};
