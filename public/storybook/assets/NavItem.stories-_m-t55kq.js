import{j as n}from"./iframe-BP3x7k34.js";import{i as p,a as m}from"./icon-options-DUa--7oG.js";import{N as l}from"./NavRail-CYZC_Twx.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-B5JZc5ts.js";import"./cn-CdwUFd5Z.js";import"./Tooltip-CpQwzBQ6.js";import"./layers-D5UzyUFr.js";import"./usePositioner-BxaJdse8.js";import"./useBaseUiId-BfT3Cvsi.js";import"./useOpenChangeComplete-Cvac5sCk.js";import"./useTimeout-DWaiFH-i.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CFaFe1S7.js";import"./DirectionContext-Cu2ancXR.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"App frame/NavRail/NavItem",component:l,args:{label:"Home",icon:m("HomeIcon"),isActive:!1,onClick:d()},argTypes:{icon:p},decorators:[r=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(r,{})})]},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:r,canvas:c,userEvent:s})=>{const i=c.getByRole("button",{name:"Home"});await o(i).toHaveAttribute("aria-current","page"),await s.click(i),await o(r.onClick).toHaveBeenCalledOnce(),await s.keyboard("{Enter}"),await o(r.onClick).toHaveBeenCalledTimes(2)}},N=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
