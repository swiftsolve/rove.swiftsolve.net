import{j as n,r}from"./iframe-DUVig4Wa.js";import{B as i}from"./Button-Bfanhvar.js";import{S as c}from"./ScreenReaderStatus-DKWvO6qg.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";import"./ButtonSpinner-DllW7uQ-.js";import"./pressable-n_zMMF94.js";const{expect:o,userEvent:u,within:m}=__STORYBOOK_MODULE_TEST__,R={title:"Accessibility/ScreenReaderStatus",component:c,args:{children:"Testing download…"}},t={};function p(){const[a,e]=r.useState("");return n.jsxs("div",{className:"flex items-center gap-12",children:[n.jsx(i,{onClick:()=>e("Check complete"),children:"Run check"}),n.jsx(c,{children:a})]})}const s={tags:["!autodocs"],render:()=>n.jsx(p,{}),play:async({canvasElement:a})=>{const e=m(a);await o(e.getByRole("status")).toBeEmptyDOMElement(),await u.click(e.getByRole("button",{name:"Run check"})),await o(e.getByRole("status")).toHaveTextContent("Check complete")}},v=["Default","AnnouncesAChange"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Nothing shows; a screen reader reads the text out as it changes.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Mounted empty, it announces the text a button sets.",...s.parameters?.docs?.description}}};export{s as AnnouncesAChange,t as Default,v as __namedExportsOrder,R as default};
