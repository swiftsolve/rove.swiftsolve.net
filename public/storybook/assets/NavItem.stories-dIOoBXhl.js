import{G as p,j as n}from"./iframe-BNpRpaso.js";import{i as m,a as l}from"./icon-options-DwdtuSXS.js";import{N as d}from"./NavItem-DR5KtFa1.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-B2sj8j4v.js";import"./index-M33yfidE.js";import"./Tooltip-DCk4KCnc.js";import"./layers-D5UzyUFr.js";import"./usePositioner-Dtlfa_It.js";import"./useBaseUiId-3EXk2NH1.js";import"./useOpenChangeComplete-Cr_Xspjj.js";import"./useTimeout-C4DH9Z8V.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DQ1hEJSk.js";import"./DirectionContext-Ojhg7n3X.js";import"./cn-B7OrgygE.js";const{expect:r,fn:u}=__STORYBOOK_MODULE_TEST__,I={title:"App frame/NavRail/NavItem",component:d,args:{label:"Home",icon:l("HomeIcon"),isActive:!1,onClick:u()},argTypes:{icon:m},decorators:[o=>n.jsx("div",{className:"inline-flex bg-chrome p-12",children:n.jsx(o,{})})],parameters:{docs:{toc:p},guidance:{whenToUse:["A page in the rail: Home, Devices.","An action in the rail’s `footer`: the theme switch."],whenNotToUse:["An icon action outside the rail: use `IconButton`."],accessibility:{builtIn:["A native `<button>` named by `label`, also its tooltip.",'The current page’s item has `aria-current="page"`.'],toHandle:["`isActive` on the current page’s item, and only that one.","An action’s `label` says what it does: “Switch to light mode”."]}}}},e={},t={args:{isActive:!0}},a={tags:["!autodocs"],args:{isActive:!0},play:async({args:o,canvas:c,userEvent:i})=>{const s=c.getByRole("button",{name:"Home"});await r(s).toHaveAttribute("aria-current","page"),await i.click(s),await r(o.onClick).toHaveBeenCalledOnce(),await i.keyboard("{Enter}"),await r(o.onClick).toHaveBeenCalledTimes(2)}},S=["Default","Active","Activating"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A page that isn't open. Hover for its tooltip.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"A click runs it, and so does Enter once it has focus; the current page's item says so.",...a.parameters?.docs?.description}}};export{a as Activating,t as Active,e as Default,S as __namedExportsOrder,I as default};
