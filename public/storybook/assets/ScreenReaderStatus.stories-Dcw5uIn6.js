import{G as c,j as n,r as i}from"./iframe-BXzSuZzq.js";import{B as u}from"./Button-CRZASjQT.js";import{S as r}from"./ScreenReaderStatus-yebkBg8f.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-Y8io_0x-.js";import"./pressable-n_zMMF94.js";const{expect:o,userEvent:d,within:l}=__STORYBOOK_MODULE_TEST__,k={title:"Accessibility/ScreenReaderStatus",component:r,args:{children:"Testing download…"},parameters:{docs:{toc:c},guidance:{use:["Progress the screen shows without words: “Testing download…”.","An outcome to announce once it’s in, like an update check’s result.","A status that changes while focus stays where it is."],avoid:["A page’s status shown on screen too: use `PageHeader`’s `status`, already announced.","A field’s error or hint: use `TextField`’s `feedback`.","A failure the user must see: use `Banner`.","Hidden words that never change: a plain `sr-only` span."],accessibility:{builtIn:['`role="status"`: a polite live region, read without interrupting.',"Hidden on screen, still in the accessibility tree."],youHandle:["Keep it mounted, with empty text when there’s nothing to say.","Short text that makes sense heard alone.","New text only when the status changes, not on every tick."]}}}},t={};function p(){const[a,e]=i.useState("");return n.jsxs("div",{className:"flex items-center gap-12",children:[n.jsx(u,{onClick:()=>e("Check complete"),children:"Run check"}),n.jsx(r,{children:a})]})}const s={tags:["!autodocs"],render:()=>n.jsx(p,{}),play:async({canvasElement:a})=>{const e=l(a);await o(e.getByRole("status")).toBeEmptyDOMElement(),await d.click(e.getByRole("button",{name:"Run check"})),await o(e.getByRole("status")).toHaveTextContent("Check complete")}},E=["Default","AnnouncesAChange"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Nothing shows; a screen reader reads the text out as it changes.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Mounted empty, it announces the text a button sets.",...s.parameters?.docs?.description}}};export{s as AnnouncesAChange,t as Default,E as __namedExportsOrder,k as default};
