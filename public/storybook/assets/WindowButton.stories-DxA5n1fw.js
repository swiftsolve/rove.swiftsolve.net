import{G as c}from"./iframe-BNpRpaso.js";import{W as d}from"./WindowButton-BZO5yjf_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./Icons-B2sj8j4v.js";const{expect:a,fn:l}=__STORYBOOK_MODULE_TEST__,y={title:"App frame/TitleBar/WindowButton",component:d,args:{action:"minimize",onClick:l()},argTypes:{action:{control:"inline-radio",options:["minimize","close"]}},parameters:{docs:{toc:c},guidance:{whenToUse:["Minimise and close, at the end of a frameless window’s title bar."],whenNotToUse:["An icon action anywhere else: use `IconButton`."],accessibility:{builtIn:["Named “Minimize” or “Close” by its `action`.","Out of the Tab order, like a native title bar’s."],toHandle:["Nothing beyond `action`: it sets the name and icon."]}}}},e={},t={args:{action:"close"}},o={args:{action:"close"},tags:["!autodocs"],play:async({args:s,canvas:r,userEvent:i})=>{const n=r.getByRole("button",{name:"Close"});await a(n).toHaveAttribute("tabindex","-1"),await i.click(n),await a(s.onClick).toHaveBeenCalledOnce()}},w=["Minimize","Close","Pressing"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Hover for its tint.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"A click runs it; like the OS's own, it stays out of the tab order.",...o.parameters?.docs?.description}}};export{t as Close,e as Minimize,o as Pressing,w as __namedExportsOrder,y as default};
