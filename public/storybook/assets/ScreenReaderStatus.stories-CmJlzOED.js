import{G as c,j as n,r as i}from"./iframe-C463jPec.js";import{B as u}from"./Button-C2uDeNPN.js";import{S as r}from"./ScreenReaderStatus-gapCBMj7.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-UVhDb_3L.js";import"./pressable-n_zMMF94.js";const{expect:o,userEvent:l,within:d}=__STORYBOOK_MODULE_TEST__,E={title:"Accessibility/ScreenReaderStatus",component:r,args:{children:"Testing download…"},parameters:{docs:{toc:c},guidance:{use:["A run’s steps and result, like the speed test’s.","An outcome the screen shows silently: “You’re on the latest version.”"],avoid:["A page’s status: use `PageHeader`’s `status`, already announced.","An error the user must see: use `Banner`, which announces it."],accessibility:{builtIn:['`role="status"`: a polite live region.',"Hidden on screen, still read by screen readers."],toHandle:["Keep it mounted; pass empty text when there’s nothing to say.","Text that makes sense heard alone.","New text only when the status changes, not on every tick."]}}}},t={};function p(){const[a,e]=i.useState("");return n.jsxs("div",{className:"flex items-center gap-12",children:[n.jsx(u,{onClick:()=>e("Check complete"),children:"Run check"}),n.jsx(r,{children:a})]})}const s={tags:["!autodocs"],render:()=>n.jsx(p,{}),play:async({canvasElement:a})=>{const e=d(a);await o(e.getByRole("status")).toBeEmptyDOMElement(),await l.click(e.getByRole("button",{name:"Run check"})),await o(e.getByRole("status")).toHaveTextContent("Check complete")}},R=["Default","AnnouncesAChange"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Nothing shows; a screen reader reads the text out as it changes.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <Announcer />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status')).toBeEmptyDOMElement();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Run check'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Check complete');
  }
}`,...s.parameters?.docs?.source},description:{story:"Mounted empty, it announces the text a button sets.",...s.parameters?.docs?.description}}};export{s as AnnouncesAChange,t as Default,R as __namedExportsOrder,E as default};
