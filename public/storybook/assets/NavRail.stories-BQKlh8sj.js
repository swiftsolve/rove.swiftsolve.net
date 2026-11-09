import{G as d,j as t,r as g}from"./iframe-uU3-Cqgp.js";import{C as w}from"./ConnectionIcon-DnWN8jVv.js";import{c as h,H as y,S as v,t as f,u as x,v as A,w as H,x as S,L as I,y as R}from"./Icons-CDau3BXJ.js";import{N as r}from"./NavItem-DYXaD-2A.js";import{N as l}from"./NavRail-MtGFCAT6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./Tooltip-CRLaAPOS.js";import"./layers-D5UzyUFr.js";import"./usePositioner-CgU88m8s.js";import"./useBaseUiId-CDoAwgCr.js";import"./useOpenChangeComplete-CIeD1CCm.js";import"./useTimeout-Bz6FOW89.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-oow9z9v7.js";import"./DirectionContext-CwiVT1ia.js";import"./cn-BikPFUNl.js";const{expect:n,fn:m}=__STORYBOOK_MODULE_TEST__,T=[{label:"Home",icon:y},{label:"Speed",icon:v},{label:"Connection",icon:w},{label:"Devices",icon:f},{label:"Online services",icon:x},{label:"Apps",icon:A},{label:"Usage",icon:H},{label:"Timeline",icon:S},{label:"Interfaces",icon:I}],E={label:"Settings",icon:R},k=m(),B=m();function p({label:e}){const[a,b]=g.useState("Home"),c=({label:o,icon:u})=>t.jsx(r,{label:o,icon:u,isActive:a===o,onClick:()=>{b(o),k(o)}},o);return t.jsx(l,{label:e,main:T.map(c),footer:[t.jsx(r,{label:"Switch to light mode",icon:h,onClick:B},"theme"),c(E)]})}const X={title:"App frame/NavRail/NavRail",component:l,subcomponents:{NavItem:r},args:{label:"Main navigation",main:null,footer:null},argTypes:{main:{control:!1},footer:{control:!1}},parameters:{layout:"fullscreen",docs:{subtitle:"The icon rail down the window’s left side, one item per page.",toc:d},guidance:{whenToUse:["The app’s pages, down the window’s left side, once.","Settings and the theme switch, at the bottom in `footer`."],whenNotToUse:["A page’s own actions: use `PageHeader`’s `actions`.","An icon action anywhere else: use `IconButton`."],accessibility:{builtIn:["A `<nav>` landmark named by `label`, its items in lists.","Each item is a native button named by its `label`, also its tooltip.",'The current page’s item has `aria-current="page"`.',"One Tab stop, on the current page’s item. Up and Down move between items, Home and End to the ends."],toHandle:["A `label` naming the rail: “Main navigation”.","`isActive` on the current page’s item, and only that one.","An action item’s label says what it does: “Switch to light mode”."]}}},decorators:[e=>t.jsx("div",{className:"flex h-[604px]",children:t.jsx(e,{})})]},s={render:e=>t.jsx(p,{label:e.label})},i={tags:["!autodocs"],render:e=>t.jsxs(t.Fragment,{children:[t.jsx(p,{label:e.label}),t.jsx("button",{type:"button",children:"After the rail"})]}),play:async({canvas:e,userEvent:a})=>{await a.tab(),await n(e.getByRole("button",{name:"Home"})).toHaveFocus(),await a.keyboard("{ArrowDown}"),await n(e.getByRole("button",{name:"Speed"})).toHaveFocus(),await a.keyboard("{End}"),await n(e.getByRole("button",{name:"Settings"})).toHaveFocus(),await a.keyboard("{ArrowDown}"),await n(e.getByRole("button",{name:"Home"})).toHaveFocus(),await a.tab(),await n(e.getByRole("button",{name:"After the rail"})).toHaveFocus()}},Z=["Default","ArrowKeys"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ClickableRail label={args.label} />
}`,...s.parameters?.docs?.source},description:{story:"Home is the current page. Click an item to move the active state.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => <>
      <ClickableRail label={args.label} />
      <button type="button">After the rail</button>
    </>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Home'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: 'Speed'
    })).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(canvas.getByRole('button', {
      name: 'Settings'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: 'Home'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'After the rail'
    })).toHaveFocus();
  }
}`,...i.parameters?.docs?.source},description:{story:"One Tab stop, on the current page: the arrow keys move between items, and Tab leaves the rail.",...i.parameters?.docs?.description}}};export{i as ArrowKeys,s as Default,Z as __namedExportsOrder,X as default};
