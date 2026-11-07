import{G as x,j as e}from"./iframe-DlKB44lI.js";import{i as y,a as u}from"./icon-options-BtdgYahS.js";import{G as p,P as h}from"./Icons-BF-e3K5B.js";import{L as s}from"./Link-jG4UP4yg.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./pressable-n_zMMF94.js";const{expect:m,fn:b}=__STORYBOOK_MODULE_TEST__,E={title:"Actions/Link",component:s,args:{children:"All hosts",icon:u("GlobeIcon"),onClick:b()},argTypes:{icon:y},parameters:{docs:{subtitle:"Words that open another view or an address, at the size of the text around them.",toc:x},guidance:{whenToUse:["Opening another view from a header or a line of text: “All hosts”.","An address outside the app, with `href`: About’s Source link."],whenNotToUse:["An action that changes something: use `Button`.","A whole row that opens a view: use `ListRow` or `StretchedLink`.","A whole card that opens a view: use `Card` with `onOpen`."],accessibility:{builtIn:['In the app, a `<button>` with `role="link"`.',"With `href`, an `<a>` that opens a new window and says so.","Its own focus style, accent and underline, so don’t add a ring."],toHandle:["Words that name where it goes, like “All hosts”.","Screen-reader-only words for where it goes, when the label doesn’t say."]}}},render:n=>e.jsx("span",{className:"type-caption text-tertiary",children:e.jsx(s,{...n})})},t={},l={args:{icon:void 0,children:"View timeline"}},a={args:{icon:void 0,href:"https://github.com/swiftsolve/rove",children:"github.com/swiftsolve/rove"}},o={tags:["!autodocs"],play:async({args:n,canvas:g,userEvent:d})=>{const w=g.getByRole("link",{name:"All hosts"});await d.keyboard("{Tab}"),await m(w).toHaveFocus(),await d.keyboard("{Enter}"),await m(n.onClick).toHaveBeenCalledOnce()}},r={args:{isDisabled:!0}},i={args:{icon:u("HistoryIcon"),children:"History"},render:n=>e.jsx("span",{className:"type-caption",children:e.jsx(s,{...n})})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("span",{className:"type-caption inline-flex items-center gap-12 text-tertiary",children:[e.jsx(s,{icon:p,children:"All hosts"}),e.jsx(s,{children:"View timeline"}),e.jsx(s,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(s,{icon:p,isDisabled:!0,children:"Disabled"})]}),e.jsxs("span",{className:"type-caption inline-flex items-center gap-12",children:[e.jsx(s,{icon:h,children:"Small text"}),e.jsx(s,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(s,{icon:h,isDisabled:!0,children:"Disabled"})]})]})},j=["WithIcon","WithoutIcon","External","OpeningWithKeyboard","Disabled","SmallText","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Opens another view, and ends in a caret.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    children: 'View timeline'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    href: 'https://github.com/swiftsolve/rove',
    children: 'github.com/swiftsolve/rove'
  }
}`,...a.parameters?.docs?.source},description:{story:"Opens a real address in a new window, ends in an arrow, and says so to a screen reader.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const link = canvas.getByRole('link', {
      name: 'All hosts'
    });
    await userEvent.keyboard('{Tab}');
    await expect(link).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...o.parameters?.docs?.source},description:{story:"An in-app link is a link to a screen reader, and Enter opens its view.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: iconArg('HistoryIcon'),
    children: 'History'
  },
  render: args => <span className="type-caption">
      <Link {...args} />
    </span>
}`,...i.parameters?.docs?.source},description:{story:"It takes the size of the text around it.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      <span className="type-caption inline-flex items-center gap-12 text-tertiary">
        <Link icon={GlobeIcon}>All hosts</Link>
        <Link>View timeline</Link>
        <Link href="https://github.com/swiftsolve/rove">External</Link>
        <Link icon={GlobeIcon} isDisabled>
          Disabled
        </Link>
      </span>
      <span className="type-caption inline-flex items-center gap-12">
        <Link icon={PlayIcon}>Small text</Link>
        <Link href="https://github.com/swiftsolve/rove">External</Link>
        <Link icon={PlayIcon} isDisabled>
          Disabled
        </Link>
      </span>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Every state, at two text sizes.",...c.parameters?.docs?.description}}};export{c as AllStates,r as Disabled,a as External,o as OpeningWithKeyboard,i as SmallText,t as WithIcon,l as WithoutIcon,j as __namedExportsOrder,E as default};
