import{j as n}from"./iframe-Dv_CX5MU.js";import{i as p,a as m}from"./icon-options-CYSwQs5R.js";import{N as l}from"./NavItem-C_mIKYgv.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-CpqJ5RZq.js";import"./index-M33yfidE.js";import"./Tooltip-D1J1SbVs.js";import"./layers-D5UzyUFr.js";import"./usePositioner-RsSzgi4j.js";import"./useBaseUiId-DsbFl2nZ.js";import"./useOpenChangeComplete-BNdenTmB.js";import"./useTimeout-DJTfK7ps.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DGLqILn6.js";import"./DirectionContext-BEOrSfXb.js";import"./cn-BikPFUNl.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,N={title:"App frame/NavRail/NavItem",component:l,args:{label:"Home",icon:m("HomeIcon"),isActive:!1,onClick:d()},argTypes:{icon:p},decorators:[r=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(r,{})})]},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:r,canvas:c,userEvent:i})=>{const s=c.getByRole("button",{name:"Home"});await o(s).toHaveAttribute("aria-current","page"),await i.click(s),await o(r.onClick).toHaveBeenCalledOnce(),await i.keyboard("{Enter}"),await o(r.onClick).toHaveBeenCalledTimes(2)}},R=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
