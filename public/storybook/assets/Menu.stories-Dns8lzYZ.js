import{G as x,j as e,r as O}from"./iframe-BNpRpaso.js";import{T as w,E as T}from"./Icons-B2sj8j4v.js";import{M as y,a as b,b as v,c as u}from"./MenuTrigger-Xr_KWGZC.js";import"./preload-helper-PPVm8Dsz.js";import"./useTimeout-C4DH9Z8V.js";import"./useBaseUiId-3EXk2NH1.js";import"./usePositioner-Dtlfa_It.js";import"./useOpenChangeComplete-Cr_Xspjj.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DQ1hEJSk.js";import"./DirectionContext-Ojhg7n3X.js";import"./useValueChanged-BIKJgC1s.js";import"./useScrollLock-CIyHr5ki.js";import"./index-M33yfidE.js";import"./cn-B7OrgygE.js";import"./layers-D5UzyUFr.js";import"./CompositeItem-Bl-a_B9I.js";import"./useButton-B2jxgGCm.js";import"./composite-DOzonhl-.js";const{expect:a,fn:p,screen:l,waitFor:f,within:g}=__STORYBOOK_MODULE_TEST__,k=p(),d=p(),Q={title:"Actions/Menu",component:y,args:{onOpenChange:p(),children:e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Options for Google"}),e.jsxs(v,{children:[e.jsx(u,{icon:T,onClick:k,children:"Edit"}),e.jsx(u,{icon:w,tone:"negative",onClick:d,children:"Remove"})]})]})},argTypes:{isOpen:{control:!1},children:{control:!1}},parameters:{docs:{subtitle:"A short list of actions behind a kebab button.",toc:x},guidance:{whenToUse:["A few secondary actions on a row, like a service’s Edit and Remove.",'A destructive action kept out of the way, its item `tone="negative"`: Clear history.'],whenNotToUse:["The page’s main action: use `Button`.","One frequent action: use `IconButton`."],accessibility:{builtIn:["The kebab is a menu button that says whether it’s open.","Enter opens it on its first item, and the arrows move between items.","Escape, a click outside or an item closes it, and focus returns."],toHandle:["A kebab `label` that names its subject: “Options for Google”.","Item labels that say what happens: Edit, Remove."]}},partGuidance:{MenuTrigger:{whenToUse:["The kebab that opens a row’s or card’s menu."],whenNotToUse:["One action on its own: use `IconButton`."],accessibility:{builtIn:["A button that says whether its menu is open.","Enter or Space opens the menu on its first item."],toHandle:["A `label` that names its subject: “Options for Google”."]}},MenuContent:{whenToUse:["The list the kebab opens, holding its `MenuItem`s."],whenNotToUse:["A list that stays on the page: use `CardList`."],accessibility:{builtIn:["A `menu`, lined up under the kebab’s right edge.","It takes focus when it opens."],toHandle:["Only `MenuItem`s, the most used first."]}},MenuItem:{whenToUse:["One action in the menu: Edit, Remove.",'A destructive action, `tone="negative"`: Clear history.'],whenNotToUse:["A setting that stays on or off: use `Toggle`."],accessibility:{builtIn:["A `menuitem`: Enter or a click runs it and closes the menu.","Its icon is hidden from screen readers."],toHandle:["A label that says what happens: “Remove”, not “OK”."]}}}},decorators:[t=>e.jsx("div",{className:"flex h-[120px] w-[200px] items-start justify-end",children:e.jsx(t,{})})]},s={},i={render:t=>e.jsx(R,{...t})},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"History options"}),e.jsx(v,{children:e.jsx(u,{icon:w,tone:"negative",onClick:d,children:"Delete"})})]})}},c={tags:["!autodocs"],play:async({canvas:t,userEvent:n})=>{await n.keyboard("{Tab}"),await a(t.getByRole("button",{name:"Options for Google"})).toHaveFocus(),await n.keyboard("{Enter}");const o=await l.findByRole("menu");await f(()=>a(g(o).getByRole("menuitem",{name:"Edit"})).toHaveFocus()),await n.keyboard("{ArrowDown}"),await a(g(o).getByRole("menuitem",{name:"Remove"})).toHaveFocus()}},m={tags:["!autodocs"],play:async({canvas:t,userEvent:n})=>{const o=t.getByRole("button",{name:"Options for Google"});await n.click(o),await n.click(await l.findByRole("menuitem",{name:"Edit"})),await a(k).toHaveBeenCalledOnce(),await a(d).not.toHaveBeenCalled(),await f(()=>a(l.queryByRole("menu")).not.toBeInTheDocument()),await a(o).toHaveFocus()}};function R({onOpenChange:t,...n}){const[o,E]=O.useState(!0);return e.jsx(y,{...n,isOpen:o,onOpenChange:h=>{E(h),t?.(h)}})}const V=["Closed","Open","SingleAction","Keyboard","ChoosingAnItem"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Click the kebab to open it.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <OpenMenu {...args} />
}`,...i.parameters?.docs?.source},description:{story:"Open from the start; Escape, a click outside or an item closes it.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"A single destructive action, as on Speed history.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Choosing an item runs it, closes the menu and puts focus back on the kebab.",...m.parameters?.docs?.description}}};export{m as ChoosingAnItem,s as Closed,c as Keyboard,i as Open,r as SingleAction,V as __namedExportsOrder,Q as default};
