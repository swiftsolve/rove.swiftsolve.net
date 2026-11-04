import{G as w,j as e,r as u}from"./iframe-C463jPec.js";import{T as o}from"./Toggle-BlIx1aWi.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./pressable-n_zMMF94.js";import"./useControlled-B8_BgmVz.js";import"./useBaseUiId-Bxot9Uxq.js";import"./visuallyHidden-BsIGJQ4u.js";import"./FormContext-DjTQm2Qf.js";import"./useButton-BoCS5Ebq.js";import"./useAriaLabelledBy-DeLt5Xov.js";import"./useValueChanged-BCC9mWnQ.js";const{expect:r,fn:b}=__STORYBOOK_MODULE_TEST__,R={title:"Inputs/Toggle",component:o,args:{label:"Start at login",isChecked:!0,onChange:b()},argTypes:{isChecked:{control:!1}},parameters:{docs:{toc:w},guidance:{use:["A setting that’s on or off, like “Check for updates automatically”.","A change that applies at once, with no save.","In a setting row, beside its title and description."],avoid:["Picking one of a few options: use `SegmentedControl`.","An action that runs once, like “Check now”: use `Button`.","A status the user can’t change: use `Badge` or `StatusDot`."],accessibility:{builtIn:['A native `<button>` with `role="switch"`: a click or Space flips it.',"Screen readers hear its `label` and whether it’s on.","Disabled stays focusable, ignores flips and sets `aria-disabled`."],toHandle:["A `label` that repeats the setting’s title.","`aria-describedby` pointing at the row’s description.","On a disabled switch, a `Tooltip` that says why."]}}},render:a=>e.jsx(f,{...a})},d={},g={args:{isChecked:!1}},p={args:{isDisabled:!0}},h={args:{isChecked:!1,isDisabled:!0},play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("switch",{name:"Start at login"});await n.click(t),await r(t).not.toBeChecked(),await r(a.onChange).not.toHaveBeenCalled()}},i={args:{isChecked:!1},tags:["!autodocs"],play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("switch",{name:"Start at login"});await n.click(t),await r(t).toBeChecked(),await r(a.onChange).toHaveBeenLastCalledWith(!0),await n.keyboard(" "),await r(t).not.toBeChecked(),await r(a.onChange).toHaveBeenLastCalledWith(!1)}},c={args:{label:"Notify when a service goes down",isChecked:!1},render:a=>e.jsx(x,{...a})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(o,{isChecked:!0,label:"On",onChange:()=>{}}),e.jsx(o,{isChecked:!1,label:"Off",onChange:()=>{}}),e.jsx(o,{isChecked:!0,label:"Disabled on",isDisabled:!0,onChange:()=>{}}),e.jsx(o,{isChecked:!1,label:"Disabled off",isDisabled:!0,onChange:()=>{}})]})};function f({isChecked:a,onChange:s,...n}){const[t,C]=u.useState(a);return e.jsx(o,{...n,isChecked:t,onChange:m=>{C(m),s(m)}})}function x(a){const s=u.useId();return e.jsxs("div",{className:"flex w-[360px] items-center justify-between gap-12",children:[e.jsxs("div",{className:"flex min-w-0 flex-col gap-4",children:[e.jsx("span",{className:"text-md font-medium text-primary",children:"Service alerts"}),e.jsx("span",{id:s,className:"text-xs leading-caption text-tertiary",children:"A notification when a service stops answering."})]}),e.jsx(f,{...a,"aria-describedby":s})]})}const _=["On","Off","DisabledOn","DisabledOff","Flipping","InSettingRow","AllStates"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: false
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: false,
    isDisabled: true
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const toggle = canvas.getByRole('switch', {
      name: 'Start at login'
    });
    await userEvent.click(toggle);
    await expect(toggle).not.toBeChecked();
    await expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: false
  },
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const toggle = canvas.getByRole('switch', {
      name: 'Start at login'
    });
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await expect(args.onChange).toHaveBeenLastCalledWith(true);
    await userEvent.keyboard(' ');
    await expect(toggle).not.toBeChecked();
    await expect(args.onChange).toHaveBeenLastCalledWith(false);
  }
}`,...i.parameters?.docs?.source},description:{story:"A click flips it, and so does Space once it has focus.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notify when a service goes down',
    isChecked: false
  },
  render: args => <SettingRow {...args} />
}`,...c.parameters?.docs?.source},description:{story:"In a setting row: the text beside it explains the setting.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-12">
      <Toggle isChecked label="On" onChange={() => {}} />
      <Toggle isChecked={false} label="Off" onChange={() => {}} />
      <Toggle isChecked label="Disabled on" isDisabled onChange={() => {}} />
      <Toggle isChecked={false} label="Disabled off" isDisabled onChange={() => {}} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every state together.",...l.parameters?.docs?.description}}};export{l as AllStates,h as DisabledOff,p as DisabledOn,i as Flipping,c as InSettingRow,g as Off,d as On,_ as __namedExportsOrder,R as default};
