import{j as n}from"./iframe-DGYPmf4B.js";import{i as p,a as m}from"./icon-options-xzTf0Co2.js";import{N as l}from"./NavItem-J1UNf7S6.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-PYAiHy-m.js";import"./index-M33yfidE.js";import"./Tooltip-B0F3bbqw.js";import"./layers-D5UzyUFr.js";import"./usePositioner-CISLJccS.js";import"./useBaseUiId-qqC7lW03.js";import"./useOpenChangeComplete-Ca29WRAo.js";import"./useTimeout-DW0iYesB.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-2Ri6jEpB.js";import"./DirectionContext-C_c83Trl.js";import"./cn-B7OrgygE.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,N={title:"App frame/NavRail/NavItem",component:l,args:{label:"Home",icon:m("HomeIcon"),isActive:!1,onClick:d()},argTypes:{icon:p},decorators:[r=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(r,{})})]},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:r,canvas:c,userEvent:i})=>{const s=c.getByRole("button",{name:"Home"});await o(s).toHaveAttribute("aria-current","page"),await i.click(s),await o(r.onClick).toHaveBeenCalledOnce(),await i.keyboard("{Enter}"),await o(r.onClick).toHaveBeenCalledTimes(2)}},R=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true
  }
}`,...t.parameters?.docs?.source},description:{story:"The current page: tinted, with the accent bar.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    isActive: true
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const item = canvas.getByRole('button', {
      name: 'Home'
    });
    await expect(item).toHaveAttribute('aria-current', 'page');
    await userEvent.click(item);
    await expect(args.onClick).toHaveBeenCalledOnce();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...a.parameters?.docs?.source},description:{story:"A click runs it, and so does Enter once it has focus; the current page's item says so.",...a.parameters?.docs?.description}}};export{a as Activating,t as Active,e as Default,R as __namedExportsOrder,N as default};
