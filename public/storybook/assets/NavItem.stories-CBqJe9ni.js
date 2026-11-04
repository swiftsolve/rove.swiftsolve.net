import{j as n}from"./iframe-CiSuwcxJ.js";import{i as p,a as m}from"./icon-options-M0_0IGP1.js";import{N as l}from"./NavRail-BDGZ9CF6.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-BqK1WH6Z.js";import"./cn-CdwUFd5Z.js";import"./Tooltip-BC_kfViw.js";import"./layers-D5UzyUFr.js";import"./usePositioner-GIied0oU.js";import"./useBaseUiId-B2aSPhiB.js";import"./useOpenChangeComplete-CyGQ9p1F.js";import"./useTimeout-BmM2QeUp.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CE9J2JYw.js";import"./DirectionContext-Bt3fCZ0q.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"App frame/NavRail/NavItem",component:l,args:{label:"Home",icon:m("HomeIcon"),isActive:!1,onClick:d()},argTypes:{icon:p},decorators:[r=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(r,{})})]},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:r,canvas:c,userEvent:s})=>{const i=c.getByRole("button",{name:"Home"});await o(i).toHaveAttribute("aria-current","page"),await s.click(i),await o(r.onClick).toHaveBeenCalledOnce(),await s.keyboard("{Enter}"),await o(r.onClick).toHaveBeenCalledTimes(2)}},N=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"A click runs it, and so does Enter once it has focus; the current page's item says so.",...a.parameters?.docs?.description}}};export{a as Activating,t as Active,e as Default,N as __namedExportsOrder,T as default};
