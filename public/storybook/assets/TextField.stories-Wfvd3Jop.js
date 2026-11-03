import{j as e,r as b}from"./iframe-CHA-W8uN.js";import{T as t,a as u}from"./TextField-CkOJsn_6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-RggvoAkt.js";import"./ButtonSpinner-B391oOcO.js";import"./pressable-n_zMMF94.js";import"./useBaseUiId-BtLRZF7g.js";import"./useTimeout-ClPGntfN.js";import"./useLabelableId-UiO5Y6BH.js";import"./useValueChanged-DJXTy-XM.js";import"./FieldItemContext-CeQlOrQg.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CkCVHkej.js";const{expect:x,fn:C}=__STORYBOOK_MODULE_TEST__,h=C(),R={title:"Inputs/TextField",component:t,args:{label:"Address",value:"",onChange:C(),placeholder:"example.com or 192.168.1.1"},argTypes:{value:{control:!1},action:{control:!1},feedback:{control:"text"}},render:a=>e.jsx(A,{...a}),decorators:[a=>e.jsx("div",{className:"w-[320px]",children:e.jsx(a,{})})]},g={},T={args:{value:"example.com"}},i={args:{feedback:"Tested when you add it."}},d={args:{value:"not an address",isInvalid:!0,feedback:"Not an address."}},l={args:{feedback:"Tested when you add it."},render:a=>e.jsx(y,{...a})},c={tags:["!autodocs"],render:a=>e.jsx(y,{...a}),play:async({args:a,canvas:o,userEvent:s})=>{const n=o.getByRole("button",{name:"Test"});await s.click(n),await x(h).not.toHaveBeenCalled(),await s.type(o.getByRole("textbox",{name:"Address"}),"example.com"),await x(a.onChange).toHaveBeenLastCalledWith("example.com"),await x(n).not.toHaveAttribute("aria-disabled"),await s.click(n),await x(h).toHaveBeenCalledOnce()}},p={args:{value:"example.com",action:e.jsx(u,{onClick:h,isLoading:!0,loadingLabel:"Testing",children:"Test"})}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-16",children:[e.jsx(t,{label:"Empty",value:"",onChange:()=>{},placeholder:"example.com or 192.168.1.1"}),e.jsx(t,{label:"Filled",value:"example.com",onChange:()=>{},feedback:"Tested when you add it."}),e.jsx(t,{label:"Invalid",value:"not an address",onChange:()=>{},isInvalid:!0,feedback:"Not an address."}),e.jsx(t,{label:"Action",value:"",onChange:()=>{},placeholder:"example.com or 192.168.1.1",action:e.jsx(u,{onClick:()=>{},isDisabled:!0,children:"Test"})}),e.jsx(t,{label:"Action loading",value:"example.com",onChange:()=>{},action:e.jsx(u,{onClick:()=>{},isLoading:!0,loadingLabel:"Testing",children:"Test"})}),e.jsx(t,{label:"Action invalid",value:"not an address",onChange:()=>{},isInvalid:!0,feedback:"Not an address.",action:e.jsx(u,{onClick:()=>{},children:"Test"})})]})};function A({value:a,onChange:o,...s}){const[n,v]=b.useState(a);return e.jsx(t,{...s,value:n,onChange:r=>{v(r),o(r)}})}function y({value:a,onChange:o,...s}){const[n,v]=b.useState(a);return e.jsx(t,{...s,value:n,onChange:r=>{v(r),o(r)},action:e.jsx(u,{onClick:h,isDisabled:!n,children:"Test"})})}const W=["Empty","Filled","WithFeedback","Invalid","WithAction","TypingTurnsOnTest","ActionLoading","AllStates"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'example.com'
  }
}`,...T.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: 'Tested when you add it.'
  }
}`,...i.parameters?.docs?.source},description:{story:"A hint under the field, announced as it changes.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'not an address',
    isInvalid: true,
    feedback: 'Not an address.'
  }
}`,...d.parameters?.docs?.source},description:{story:"The value failed to parse: a red border, and the reason under it.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: 'Tested when you add it.'
  },
  render: args => <AddressField {...args} />
}`,...l.parameters?.docs?.source},description:{story:"A Test button inside the border, off until there's an address.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => <AddressField {...args} />,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const test = canvas.getByRole('button', {
      name: 'Test'
    });
    await userEvent.click(test);
    await expect(onTest).not.toHaveBeenCalled();
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'Address'
    }), 'example.com');
    await expect(args.onChange).toHaveBeenLastCalledWith('example.com');
    await expect(test).not.toHaveAttribute('aria-disabled');
    await userEvent.click(test);
    await expect(onTest).toHaveBeenCalledOnce();
  }
}`,...c.parameters?.docs?.source},description:{story:"Test does nothing until there's an address; typing one turns it on.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'example.com',
    action: <TextFieldAction onClick={onTest} isLoading loadingLabel="Testing">
        Test
      </TextFieldAction>
  }
}`,...p.parameters?.docs?.source},description:{story:"The action while it runs: only a spinner, named for screen readers.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <TextField label="Empty" value="" onChange={() => {}} placeholder="example.com or 192.168.1.1" />
      <TextField label="Filled" value="example.com" onChange={() => {}} feedback="Tested when you add it." />
      <TextField label="Invalid" value="not an address" onChange={() => {}} isInvalid feedback="Not an address." />
      <TextField label="Action" value="" onChange={() => {}} placeholder="example.com or 192.168.1.1" action={<TextFieldAction onClick={() => {}} isDisabled>
            Test
          </TextFieldAction>} />
      <TextField label="Action loading" value="example.com" onChange={() => {}} action={<TextFieldAction onClick={() => {}} isLoading loadingLabel="Testing">
            Test
          </TextFieldAction>} />
      <TextField label="Action invalid" value="not an address" onChange={() => {}} isInvalid feedback="Not an address." action={<TextFieldAction onClick={() => {}}>Test</TextFieldAction>} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Every state together.",...m.parameters?.docs?.description}}};export{p as ActionLoading,m as AllStates,g as Empty,T as Filled,d as Invalid,c as TypingTurnsOnTest,l as WithAction,i as WithFeedback,W as __namedExportsOrder,R as default};
