import{j as n}from"./iframe-B9rC47OI.js";import{i as p,a as m}from"./icon-options-taqEia_F.js";import{N as l}from"./NavRail-BvhaVKZc.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-BhNalqYT.js";import"./cn-CICwuVeI.js";import"./Tooltip-MRSw1IUd.js";import"./layers-D5UzyUFr.js";import"./usePositioner-De9YdrpM.js";import"./useBaseUiId-DA7yqDG-.js";import"./useOpenChangeComplete-BjPKe7jm.js";import"./useTimeout-Dmgs5UH_.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CMPEGABH.js";import"./DirectionContext-CQhy-uDk.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"App frame/NavRail/NavItem",component:l,args:{label:"Home",icon:m("HomeIcon"),isActive:!1,onClick:d()},argTypes:{icon:p},decorators:[r=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(r,{})})]},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:r,canvas:c,userEvent:s})=>{const i=c.getByRole("button",{name:"Home"});await o(i).toHaveAttribute("aria-current","page"),await s.click(i),await o(r.onClick).toHaveBeenCalledOnce(),await s.keyboard("{Enter}"),await o(r.onClick).toHaveBeenCalledTimes(2)}},N=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
