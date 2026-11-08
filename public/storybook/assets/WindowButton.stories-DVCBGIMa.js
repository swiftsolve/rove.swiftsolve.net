import{W as c}from"./TitleBar-VzgwyIKF.js";import"./iframe-Cbz0lyHD.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./Icons-DOPIngfy.js";import"./StatusDot-C47mHOfn.js";import"./layers-D5UzyUFr.js";import"./status-EdzG58Fr.js";const{expect:s,fn:p}=__STORYBOOK_MODULE_TEST__,w={title:"App frame/TitleBar/WindowButton",component:c,args:{action:"minimize",onClick:p()},argTypes:{action:{control:"inline-radio",options:["minimize","close"]}}},t={},e={args:{action:"close"}},o={args:{action:"close"},tags:["!autodocs"],play:async({args:n,canvas:r,userEvent:i})=>{const a=r.getByRole("button",{name:"Close"});await s(a).toHaveAttribute("tabindex","-1"),await i.click(a),await s(n.onClick).toHaveBeenCalledOnce()}},C=["Minimize","Close","Pressing"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Hover for its tint.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    action: 'close'
  }
}`,...e.parameters?.docs?.source},description:{story:"Turns red on hover.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    action: 'close'
  },
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Close'
    });
    await expect(button).toHaveAttribute('tabindex', '-1');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...o.parameters?.docs?.source},description:{story:"A click runs it; like the OS's own, it stays out of the tab order.",...o.parameters?.docs?.description}}};export{e as Close,t as Minimize,o as Pressing,C as __namedExportsOrder,w as default};
