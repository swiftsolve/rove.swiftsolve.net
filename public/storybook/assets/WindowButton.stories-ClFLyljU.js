import{W as c}from"./WindowButton-x0Ok5Zjn.js";import"./iframe-uU3-Cqgp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./Icons-CDau3BXJ.js";const{expect:s,fn:p}=__STORYBOOK_MODULE_TEST__,b={title:"App frame/TitleBar/WindowButton",component:c,args:{action:"minimize",onClick:p()},argTypes:{action:{control:"inline-radio",options:["minimize","close"]}}},e={},t={args:{action:"close"}},o={args:{action:"close"},tags:["!autodocs"],play:async({args:n,canvas:r,userEvent:i})=>{const a=r.getByRole("button",{name:"Close"});await s(a).toHaveAttribute("tabindex","-1"),await i.click(a),await s(n.onClick).toHaveBeenCalledOnce()}},y=["Minimize","Close","Pressing"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Hover for its tint.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    action: 'close'
  }
}`,...t.parameters?.docs?.source},description:{story:"Turns red on hover.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"A click runs it; like the OS's own, it stays out of the tab order.",...o.parameters?.docs?.description}}};export{t as Close,e as Minimize,o as Pressing,y as __namedExportsOrder,b as default};
