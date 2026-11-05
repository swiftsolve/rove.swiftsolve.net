import{G as k,j as e,r as O}from"./iframe-CURIJ1LF.js";import{T as w,E as R}from"./Icons-9Sqdafxe.js";import{M as y,a as b,b as v,c as p}from"./Menu-cHPrnlbm.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BzTqUi4H.js";import"./layers-D5UzyUFr.js";import"./useTimeout-B4W_obox.js";import"./useBaseUiId-BXylcno4.js";import"./usePositioner-Q2pkk9gb.js";import"./useOpenChangeComplete-D-p79Cwf.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-Ct3jPBy6.js";import"./DirectionContext-RFBJvH76.js";import"./useValueChanged-BHnWiNJ0.js";import"./useScrollLock-CnHpjpgU.js";import"./useButton-DHfiuQX-.js";import"./CompositeItem-CFHghh_o.js";import"./composite-DTMEyXA0.js";const{expect:a,fn:l,screen:d,waitFor:f,within:h}=__STORYBOOK_MODULE_TEST__,x=l(),u=l(),P={title:"Actions/Menu",component:y,args:{onOpenChange:l(),children:e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Options for Google"}),e.jsxs(v,{children:[e.jsx(p,{icon:R,onClick:x,children:"Edit"}),e.jsx(p,{icon:w,tone:"negative",onClick:u,children:"Remove"})]})]})},argTypes:{isOpen:{control:!1},children:{control:!1}},parameters:{docs:{subtitle:"A short list of actions behind a kebab button.",toc:k},guidance:{whenToUse:["A few secondary actions on a row, like a service’s Edit and Remove.",'A destructive action kept out of the way, its item `tone="negative"`: Clear history.'],whenNotToUse:["The page’s main action: use `Button`.","One frequent action: use `IconButton`."],accessibility:{builtIn:["The kebab is a menu button that says whether it’s open.","Enter opens it on its first item, and the arrows move between items.","Escape, a click outside or an item closes it, and focus returns."],toHandle:["A kebab `label` that names its subject: “Options for Google”.","Item labels that say what happens: Edit, Remove."]}}},decorators:[t=>e.jsx("div",{className:"flex h-[120px] w-[200px] items-start justify-end",children:e.jsx(t,{})})]},s={},r={render:t=>e.jsx(B,{...t})},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"History options"}),e.jsx(v,{children:e.jsx(p,{icon:w,tone:"negative",onClick:u,children:"Delete"})})]})}},c={tags:["!autodocs"],play:async({canvas:t,userEvent:o})=>{await o.keyboard("{Tab}"),await a(t.getByRole("button",{name:"Options for Google"})).toHaveFocus(),await o.keyboard("{Enter}");const n=await d.findByRole("menu");await f(()=>a(h(n).getByRole("menuitem",{name:"Edit"})).toHaveFocus()),await o.keyboard("{ArrowDown}"),await a(h(n).getByRole("menuitem",{name:"Remove"})).toHaveFocus()}},m={tags:["!autodocs"],play:async({canvas:t,userEvent:o})=>{const n=t.getByRole("button",{name:"Options for Google"});await o.click(n),await o.click(await d.findByRole("menuitem",{name:"Edit"})),await a(x).toHaveBeenCalledOnce(),await a(u).not.toHaveBeenCalled(),await f(()=>a(d.queryByRole("menu")).not.toBeInTheDocument()),await a(n).toHaveFocus()}};function B({onOpenChange:t,...o}){const[n,E]=O.useState(!0);return e.jsx(y,{...o,isOpen:n,onOpenChange:g=>{E(g),t?.(g)}})}const Q=["Closed","Open","SingleAction","Keyboard","ChoosingAnItem"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Click the kebab to open it.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <OpenMenu {...args} />
}`,...r.parameters?.docs?.source},description:{story:"Open from the start; Escape, a click outside or an item closes it.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuTrigger label="History options" />
        <MenuContent>
          <MenuItem icon={TrashIcon} tone="negative" onClick={onRemove}>
            Delete
          </MenuItem>
        </MenuContent>
      </>
  }
}`,...i.parameters?.docs?.source},description:{story:"A single destructive action, as on Speed history.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  // Moves focus, which would scroll the docs page to it.
  tags: ['!autodocs'],
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.keyboard('{Tab}');
    await expect(canvas.getByRole('button', {
      name: 'Options for Google'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    const menu = await screen.findByRole('menu');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: 'Edit'
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(menu).getByRole('menuitem', {
      name: 'Remove'
    })).toHaveFocus();
  }
}`,...c.parameters?.docs?.source},description:{story:"From the keyboard: Enter opens it on its first item, and the arrows move between items.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Options for Google'
    });
    await userEvent.click(trigger);
    await userEvent.click(await screen.findByRole('menuitem', {
      name: 'Edit'
    }));
    await expect(onEdit).toHaveBeenCalledOnce();
    await expect(onRemove).not.toHaveBeenCalled();
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
  }
}`,...m.parameters?.docs?.source},description:{story:"Choosing an item runs it, closes the menu and puts focus back on the kebab.",...m.parameters?.docs?.description}}};export{m as ChoosingAnItem,s as Closed,c as Keyboard,r as Open,i as SingleAction,Q as __namedExportsOrder,P as default};
