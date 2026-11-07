import{G as w,j as e,r as l}from"./iframe-B6Nm_bvV.js";import{B as p}from"./Button-DQXn8N0p.js";import{D as m,P as y,a as x}from"./PortalProvider-BpYW-B72.js";import{e as j}from"./Icons-DX5TdU8A.js";import{T as f}from"./TextField-DMfrp9er.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./ButtonSpinner-CZjmT6hJ.js";import"./pressable-n_zMMF94.js";import"./IconButton-D1_2hBif.js";import"./Tooltip-w6PtDc-B.js";import"./layers-D5UzyUFr.js";import"./usePositioner-BOd2nxud.js";import"./useBaseUiId-BKvTaIk_.js";import"./useOpenChangeComplete-UsvvPTzu.js";import"./useTimeout-C6mfHCqy.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-C1c48LyK.js";import"./DirectionContext-gdohFybR.js";import"./useScrollLock-DdnSgLXC.js";import"./composite-DmdTEIfa.js";import"./useRegisterFieldControl-C65_kKar.js";import"./useValueChanged-j8JVFfIC.js";import"./FieldItemContext---dhB0or.js";const{expect:u,fn:T,waitFor:v}=__STORYBOOK_MODULE_TEST__,ee={title:"Overlays/Dialog",component:m,args:{title:"Add a service",description:"Track a service by URL or IP address.",children:e.jsx(B,{}),cancelLabel:"Cancel",actions:e.jsx(p,{variant:"solid",children:"Add"}),onClose:T()},argTypes:{children:{control:!1},actions:{control:!1}},render:t=>e.jsx(E,{...t}),parameters:{layout:"padded",docs:{subtitle:"A window over the page: a title, a body, and actions at the foot.",story:{inline:!1,iframeHeight:460},toc:w},guidance:{whenToUse:["A short task before going on: Add a service.","One thing up close: the Share Wi‑Fi QR code.","A prompt the user can put off: Update available."],whenNotToUse:["A hint on hover or focus: use `Tooltip`.","A failure on the page: use `Banner`.","A few actions on one item: use `Menu`."],accessibility:{builtIn:["A modal `dialog`, named by its title and described by `description`.","Focus moves in, onto the panel when no field takes it, and stays inside; the page behind is hidden from screen readers.","Escape closes it, and focus returns to the control that opened it."],toHandle:["`autoFocus` on a form’s first field, as Add a service does.","A live region (`aria-live`) around a body that changes while open, as Share Wi‑Fi does."]}}}},r={},n={args:{title:"Clear history?",description:"Every speed test result is deleted.",children:void 0,actions:e.jsx(p,{variant:"solid",tone:"negative",children:"Clear"})}},i={args:{canClose:!1,actions:e.jsx(p,{variant:"solid",isLoading:!0,loadingLabel:"Adding…",children:"Add"})}},c={render:t=>e.jsx(A,{...t})},d={tags:["!autodocs"],render:t=>e.jsx(A,{...t}),play:async({args:t,canvas:o,userEvent:s})=>{const a=o.getByRole("button",{name:"Add service"});await s.click(a),await v(()=>u(o.getByRole("textbox",{name:"Address"})).toHaveFocus()),await s.keyboard("{Escape}"),await v(()=>u(o.queryByRole("dialog")).not.toBeInTheDocument()),await u(t.onClose).toHaveBeenCalledOnce(),await u(a).toHaveFocus()}};function B(){const[t,o]=l.useState(""),[s,a]=l.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(f,{label:"Address",value:t,onChange:o,placeholder:"example.com or 192.168.1.1",feedback:"Tested when you add it.",autoFocus:!0}),e.jsx(f,{className:"mt-16",label:"Name",value:s,onChange:a,placeholder:"Auto-detected from the address"})]})}const b="relative h-[420px] overflow-hidden rounded-lg";function E(t){const[o,s]=l.useState(null);return e.jsx("div",{ref:s,className:b,children:e.jsx(y,{container:o,children:o&&e.jsx(x,{isOpen:!0,children:e.jsx(m,{...t})})})})}function A({onClose:t,...o}){const[s,a]=l.useState(null),[C,g]=l.useState(!1),h=()=>{g(!1),t()};return e.jsxs("div",{ref:a,className:`${b} flex items-center justify-center`,children:[e.jsx(p,{variant:"solid",icon:j,onClick:()=>g(!0),children:"Add service"}),e.jsx(y,{container:s,children:e.jsx(x,{isOpen:C,children:e.jsx(m,{...o,onClose:h,actions:e.jsx(p,{variant:"solid",onClick:h,children:"Add"})})})})]})}const te=["Open","Confirmation","Busy","WithTrigger","EscapeCloses"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Title, description, a recessed body of fields, and Cancel beside the main action. The first field takes focus.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Clear history?',
    description: 'Every speed test result is deleted.',
    children: undefined,
    actions: <Button variant="solid" tone="negative">
        Clear
      </Button>
  }
}`,...n.parameters?.docs?.source},description:{story:"Only a header and actions: a confirmation. With no field, the panel takes focus, and Tab goes on to its buttons.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    canClose: false,
    actions: <Button variant="solid" isLoading loadingLabel="Adding…">
        Add
      </Button>
  }
}`,...i.parameters?.docs?.source},description:{story:"While something runs that closing would abandon, every way out is off.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <DialogWithTrigger {...args} />
}`,...c.parameters?.docs?.source},description:{story:"A button opens it; Escape, Close, Cancel, Add or the backdrop closes it, and focus goes back to the button.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => <DialogWithTrigger {...args} />,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Add service'
    });
    await userEvent.click(trigger);
    await waitFor(() => expect(canvas.getByRole('textbox', {
      name: 'Address'
    })).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(args.onClose).toHaveBeenCalledOnce();
    await expect(trigger).toHaveFocus();
  }
}`,...d.parameters?.docs?.source},description:{story:"Opening puts focus on the field; Escape closes it and gives focus back to the button.",...d.parameters?.docs?.description}}};export{i as Busy,n as Confirmation,d as EscapeCloses,r as Open,c as WithTrigger,te as __namedExportsOrder,ee as default};
