import{j as e,r as f}from"./iframe-DsDnSxDE.js";import{T as r}from"./Toggle-DsKxw8rg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./useControlled-CP-H_h8s.js";import"./useBaseUiId-Buv4mlsn.js";import"./visuallyHidden-BsIGJQ4u.js";import"./useLabelableId-BzivAggy.js";import"./useButton-DRv0I_sb.js";import"./useAriaLabelledBy-BxrT2M_N.js";import"./useValueChanged-ujgZhV9m.js";const{expect:o,fn:x}=__STORYBOOK_MODULE_TEST__,R={title:"Inputs/Toggle",component:r,args:{label:"Start at login",isChecked:!0,onChange:x()},argTypes:{isChecked:{control:!1}},render:a=>e.jsx(u,{...a})},d={},g={args:{isChecked:!1}},p={args:{isDisabled:!0}},m={args:{isChecked:!1,isDisabled:!0},play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("switch",{name:"Start at login"});await n.click(t),await o(t).not.toBeChecked(),await o(a.onChange).not.toHaveBeenCalled()}},i={args:{isChecked:!1},tags:["!autodocs"],play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("switch",{name:"Start at login"});await n.click(t),await o(t).toBeChecked(),await o(a.onChange).toHaveBeenLastCalledWith(!0),await n.keyboard(" "),await o(t).not.toBeChecked(),await o(a.onChange).toHaveBeenLastCalledWith(!1)}},c={args:{label:"Notify when a service goes down",isChecked:!1},render:a=>e.jsx(w,{...a})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-12",children:[e.jsx(r,{isChecked:!0,label:"On",onChange:()=>{}}),e.jsx(r,{isChecked:!1,label:"Off",onChange:()=>{}}),e.jsx(r,{isChecked:!0,label:"Disabled on",isDisabled:!0,onChange:()=>{}}),e.jsx(r,{isChecked:!1,label:"Disabled off",isDisabled:!0,onChange:()=>{}})]})};function u({isChecked:a,onChange:s,...n}){const[t,C]=f.useState(a);return e.jsx(r,{...n,isChecked:t,onChange:h=>{C(h),s(h)}})}function w(a){const s=f.useId();return e.jsxs("div",{className:"flex w-[360px] items-center justify-between gap-12",children:[e.jsxs("div",{className:"flex min-w-0 flex-col gap-4",children:[e.jsx("span",{className:"text-md font-medium text-primary",children:"Service alerts"}),e.jsx("span",{id:s,className:"text-xs leading-caption text-tertiary",children:"A notification when a service stops answering."})]}),e.jsx(u,{...a,"aria-describedby":s})]})}const _=["On","Off","DisabledOn","DisabledOff","Flipping","InSettingRow","AllStates"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: false
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Every state together.",...l.parameters?.docs?.description}}};export{l as AllStates,m as DisabledOff,p as DisabledOn,i as Flipping,c as InSettingRow,g as Off,d as On,_ as __namedExportsOrder,R as default};
