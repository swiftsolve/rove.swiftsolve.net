import{G as h,j as e,r as f}from"./iframe-s3Ea68Ac.js";import{i as w,a as t}from"./icon-options-OudlIzIx.js";import{P as b}from"./Icons-Chzgu33j.js";import{B as g}from"./Button-CYun2Kck.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./ButtonSpinner-B0p_GSAJ.js";import"./pressable-n_zMMF94.js";const{expect:v,fn:S}=__STORYBOOK_MODULE_TEST__,T={title:"Actions/Button",component:g,args:{children:"Run test",onClick:S()},argTypes:{variant:{control:"inline-radio",options:["solid","soft"]},tone:{control:"inline-radio",options:["neutral","accent","negative"]},size:{control:"inline-radio",options:["sm","md"]},icon:w},parameters:{docs:{subtitle:"A button with a word or two on it, for an action.",toc:h},guidance:{whenToUse:["The page’s main action, solid: “Run test”.","Stopping that action, solid negative: “Stop”.","Every other action, soft: “Scan again”, “Check now”.","An action on a red surface, soft negative: an error `Banner`’s Dismiss."],whenNotToUse:["Opening another view or an address: use `Link`.","An icon with no words: use `IconButton`.","Checking a field’s value, like Test: use `TextFieldAction`."],accessibility:{builtIn:['A native `<button>`, `type="button"` unless set.',"Disabled and loading stay focusable, ignore presses and tell screen readers.","Its icon and spinner are hidden from screen readers."],toHandle:["A label that says what happens, like “Run test”.","On a disabled button, a `Tooltip` that says why."]}}}},o={args:{variant:"solid",icon:t("PlayIcon")}},s={args:{variant:"solid",tone:"negative",icon:t("StopIcon"),children:"Stop"}},i={args:{variant:"soft"}},r={args:{variant:"soft",tone:"negative",children:"Dismiss"}},m={args:{variant:"solid",icon:t("PlayIcon"),isLoading:!0,loadingLabel:"Testing…"}},c={args:{variant:"solid",icon:t("PlayIcon"),isDisabled:!0}},d={args:{variant:"solid",icon:t("PlayIcon")},tags:["!autodocs"],play:async({args:n,canvas:y,userEvent:a})=>{const u=y.getByRole("button",{name:"Run test"});await a.click(u),await v(n.onClick).toHaveBeenCalledTimes(1),await a.keyboard("{Enter}"),await a.keyboard(" "),await v(n.onClick).toHaveBeenCalledTimes(3)}},l={args:{variant:"solid",icon:t("PlayIcon"),isDisabled:!0},tags:["!autodocs"],play:async({args:n,canvas:y,userEvent:a})=>{const u=y.getByRole("button",{name:"Run test"});await a.keyboard("{Tab}"),await v(u).toHaveFocus(),await a.keyboard("{Enter}"),await a.click(u),await v(n.onClick).not.toHaveBeenCalled()}},p={render:()=>e.jsx("div",{className:"grid grid-cols-[repeat(4,max-content)] items-center justify-items-start gap-12",children:[{variant:"solid"},{variant:"solid",tone:"negative"},{variant:"soft"},{variant:"soft",tone:"negative"},{variant:"soft",size:"md"}].map(n=>e.jsxs(f.Fragment,{children:[e.jsx(g,{...n,children:"Label"}),e.jsx(g,{...n,icon:b,children:"With icon"}),e.jsx(g,{...n,icon:b,isLoading:!0,children:"Loading"}),e.jsx(g,{...n,icon:b,isDisabled:!0,children:"Disabled"})]},JSON.stringify(n)))})},E=["Solid","SolidNegative","Soft","SoftNegative","Loading","Disabled","Pressing","PressingWhileDisabled","AllStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon')
  }
}`,...o.parameters?.docs?.source},description:{story:"A page's main action.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    tone: 'negative',
    icon: iconArg('StopIcon'),
    children: 'Stop'
  }
}`,...s.parameters?.docs?.source},description:{story:"Stopping what the main action started.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft'
  }
}`,...i.parameters?.docs?.source},description:{story:"Everything else.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    tone: 'negative',
    children: 'Dismiss'
  }
}`,...r.parameters?.docs?.source},description:{story:"On a red surface, like an error Banner's Dismiss and Retry.",...r.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isLoading: true,
    loadingLabel: 'Testing…'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isDisabled: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon')
  },
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Run test'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  }
}`,...d.parameters?.docs?.source},description:{story:"A click, Enter and Space each run the action once.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    icon: iconArg('PlayIcon'),
    isDisabled: true
  },
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Run test'
    });
    await userEvent.keyboard('{Tab}');
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...l.parameters?.docs?.source},description:{story:"Disabled, it still takes focus but ignores a press.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Every variant in every state.",...p.parameters?.docs?.description}}};export{p as AllStates,c as Disabled,m as Loading,d as Pressing,l as PressingWhileDisabled,i as Soft,r as SoftNegative,o as Solid,s as SolidNegative,E as __namedExportsOrder,T as default};
