import{G as C,j as e,r as u}from"./iframe-ri4gvyQZ.js";import{B as d}from"./Button-BH-UweSJ.js";import{D as m,P as v,a as y}from"./PortalProvider-Dc289RzD.js";import{e as w}from"./Icons-dgRyGxiB.js";import{T as j}from"./TextField-B6bOE63q.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BzTqUi4H.js";import"./ButtonSpinner-nfwDy3K7.js";import"./pressable-n_zMMF94.js";import"./IconButton-C3mXsbJs.js";import"./Tooltip-Bx9qdtFi.js";import"./layers-D5UzyUFr.js";import"./usePositioner-DoKas5YZ.js";import"./useBaseUiId-DgdWqlUH.js";import"./useOpenChangeComplete-Br_cVoDf.js";import"./useTimeout-04eOEcAP.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-BMSCR20C.js";import"./DirectionContext-D7bn-NCR.js";import"./useScrollLock-Bq81uPtm.js";import"./composite-CiX3UvrF.js";import"./useRegisterFieldControl-Brwa3cOs.js";import"./useValueChanged-CBQ8Ft8J.js";import"./FieldItemContext-D58d6TKP.js";const{expect:p,fn:B,waitFor:f}=__STORYBOOK_MODULE_TEST__,Z={title:"Overlays/Dialog",component:m,args:{title:"Add a service",description:"Track a service by URL or IP address.",children:e.jsx("p",{className:"type-body-small text-secondary",children:"Rove checks it every minute."}),cancelLabel:"Cancel",actions:e.jsx(d,{variant:"solid",children:"Add"}),onClose:B()},argTypes:{children:{control:!1},actions:{control:!1}},render:t=>e.jsx(T,{...t}),parameters:{layout:"padded",docs:{subtitle:"A window over the page: a title, a body, and actions at the foot.",story:{inline:!1,iframeHeight:340},toc:C},guidance:{whenToUse:["A short task before going on: Add a service.","One thing up close: the Share Wi‑Fi QR code.","A prompt the user can put off: Update available."],whenNotToUse:["A hint on hover or focus: use `Tooltip`.","A failure on the page: use `Banner`.","A few actions on one item: use `Menu`."],accessibility:{builtIn:["A modal `dialog`, named by its title and described by `description`.","Focus stays inside; the page behind is hidden from screen readers.","Escape closes it, and focus returns to the control that opened it."],toHandle:["`autoFocus` on a form’s first field, as Add a service does.","A live region (`aria-live`) around a body that changes while open, as Share Wi‑Fi does."]}}}},a={},r={args:{title:"Clear history?",description:"Every speed test result is deleted.",children:void 0,actions:e.jsx(d,{variant:"solid",tone:"negative",children:"Clear"})}},n={args:{canClose:!1,actions:e.jsx(d,{variant:"solid",isLoading:!0,loadingLabel:"Adding…",children:"Add"})}},i={render:t=>e.jsx(b,{...t})},c={tags:["!autodocs"],args:{children:e.jsx(j,{label:"Address",value:"",onChange:()=>{},autoFocus:!0})},render:t=>e.jsx(b,{...t}),play:async({args:t,canvas:o,userEvent:s})=>{const l=o.getByRole("button",{name:"Add service"});await s.click(l),await f(()=>p(o.getByRole("textbox",{name:"Address"})).toHaveFocus()),await s.keyboard("{Escape}"),await f(()=>p(o.queryByRole("dialog")).not.toBeInTheDocument()),await p(t.onClose).toHaveBeenCalledOnce(),await p(l).toHaveFocus()}},x="relative h-[300px] overflow-hidden rounded-lg";function T(t){const[o,s]=u.useState(null);return e.jsx("div",{ref:s,className:x,children:e.jsx(v,{container:o,children:o&&e.jsx(y,{isOpen:!0,children:e.jsx(m,{...t})})})})}function b({onClose:t,...o}){const[s,l]=u.useState(null),[A,g]=u.useState(!1),h=()=>{g(!1),t()};return e.jsxs("div",{ref:l,className:`${x} flex items-center justify-center`,children:[e.jsx(d,{variant:"solid",icon:w,onClick:()=>g(!0),children:"Add service"}),e.jsx(v,{container:s,children:e.jsx(y,{isOpen:A,children:e.jsx(m,{...o,onClose:h,actions:e.jsx(d,{variant:"solid",onClick:h,children:"Add"})})})})]})}const ee=["Open","Confirmation","Busy","WithTrigger","EscapeCloses"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"Title, description, a recessed body, and Cancel beside the main action.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Clear history?',
    description: 'Every speed test result is deleted.',
    children: undefined,
    actions: <Button variant="solid" tone="negative">
        Clear
      </Button>
  }
}`,...r.parameters?.docs?.source},description:{story:"Only a header and actions: a confirmation.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    canClose: false,
    actions: <Button variant="solid" isLoading loadingLabel="Adding…">
        Add
      </Button>
  }
}`,...n.parameters?.docs?.source},description:{story:"While something runs that closing would abandon, every way out is off.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <DialogWithTrigger {...args} />
}`,...i.parameters?.docs?.source},description:{story:"A button opens it; Escape, Close, Cancel, Add or the backdrop closes it, and focus goes back to the button.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  // As in the app's add dialog, the field takes focus. On the close button,
  // the first Escape would close its tooltip instead.
  // eslint-disable-next-line jsx-a11y-x/no-autofocus -- as in the app's add dialog.
  args: {
    children: <TextField label="Address" value="" onChange={() => {}} autoFocus />
  },
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
}`,...c.parameters?.docs?.source},description:{story:"Opening puts focus on the field; Escape closes it and gives focus back to the button.",...c.parameters?.docs?.description}}};export{n as Busy,r as Confirmation,c as EscapeCloses,a as Open,i as WithTrigger,ee as __namedExportsOrder,Z as default};
