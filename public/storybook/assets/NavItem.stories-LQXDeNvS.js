import{j as n}from"./iframe-2zfp5cJb.js";import{i as p,a as m}from"./icon-options-Dp3TjmKf.js";import{N as l}from"./NavRail-BV902XMo.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-BLWrsnaY.js";import"./cn-CdwUFd5Z.js";import"./Tooltip-D6JsTpMv.js";import"./layers-D5UzyUFr.js";import"./usePositioner-l_VUXOfi.js";import"./useBaseUiId-CLqWU8KM.js";import"./useOpenChangeComplete-CF3cun6F.js";import"./useTimeout-CHadFHUC.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-BA3SMi3I.js";import"./DirectionContext-B8Cf9FGX.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"App frame/NavRail/NavItem",component:l,args:{label:"Home",icon:m("HomeIcon"),isActive:!1,onClick:d()},argTypes:{icon:p},decorators:[r=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(r,{})})]},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:r,canvas:c,userEvent:s})=>{const i=c.getByRole("button",{name:"Home"});await o(i).toHaveAttribute("aria-current","page"),await s.click(i),await o(r.onClick).toHaveBeenCalledOnce(),await s.keyboard("{Enter}"),await o(r.onClick).toHaveBeenCalledTimes(2)}},N=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
