import{G as p,j as s}from"./iframe-qq4D_QBx.js";import{S as d,a as m}from"./Icons-BkWyznfl.js";import{S as c}from"./StretchedLink-DvRrcrBf.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BikPFUNl.js";import"./index-M33yfidE.js";const{expect:i,fn:u}=__STORYBOOK_MODULE_TEST__,k={title:"Actions/StretchedLink",component:c,args:{label:"Open speed test",onClick:u()},parameters:{docs:{subtitle:"An invisible link stretched over a row, so the whole row opens a view.",toc:p},guidance:{whenToUse:["A row that opens a view but holds a bar or figures, like Apps’ rows.","A row or container that also holds a control of its own."],whenNotToUse:["A simple row with a chevron: use `ListRow`.","A whole card: use `Card` with `onOpen`, which draws its own.","A link in a line of text: use `Link`."],accessibility:{builtIn:['A `<button>` with `role="link"`, as it opens a view.',"Covers its container, so a click anywhere opens it.","Its focus ring follows the container’s corners."],toHandle:["A `label`, or `aria-labelledby` pointing at a heading.","A positioned container (`relative`) for it to cover.","Controls raised above it (`relative z-2`), as siblings, never nested.","A cue that it opens, like a caret."]}}}},e={render:o=>s.jsxs("div",{className:"group relative flex w-[280px] items-center gap-8 surface px-14 py-10 hover:bg-overlay-faint",children:[s.jsx(d,{size:16,className:"text-tertiary"}),s.jsx("span",{className:"type-body font-medium text-primary",children:"Speed"}),s.jsx("span",{className:"type-body text-tertiary",children:"412 Mbps"}),s.jsx(c,{...o}),s.jsx(m,{size:16,className:"ml-auto text-tertiary group-hover:text-secondary"})]})},t={...e,tags:["!autodocs"],play:async({args:o,canvas:l,userEvent:r})=>{const n=l.getByRole("link",{name:"Open speed test"});await r.keyboard("{Tab}"),await i(n).toHaveFocus(),await r.keyboard("{Enter}"),await r.click(n),await i(o.onClick).toHaveBeenCalledTimes(2)}},a={...e,args:{className:"[outline:var(--focus-outline)] outline-offset-(--focus-inset)"}},b=["OverRow","Opening","Focused"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <div className="group relative flex w-[280px] items-center gap-8 surface px-14 py-10 hover:bg-overlay-faint">
      <SpeedIcon size={16} className="text-tertiary" />
      <span className="type-body font-medium text-primary">Speed</span>
      <span className="type-body text-tertiary">412 Mbps</span>
      <StretchedLink {...args} />
      <ChevronRightIcon size={16} className="ml-auto text-tertiary group-hover:text-secondary" />
    </div>
}`,...e.parameters?.docs?.source},description:{story:"The link itself is invisible: it lies over the whole row, whose content\nshows through, so a click anywhere on it opens what it summarises. A Card\ndraws its own with `onOpen`.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...OverRow,
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const link = canvas.getByRole('link', {
      name: 'Open speed test'
    });
    await userEvent.keyboard('{Tab}');
    await expect(link).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(link);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...t.parameters?.docs?.source},description:{story:"The row opens from the keyboard, as a link, and from a click.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...OverRow,
  // The ring keyboard focus draws, shown here for good: on a Docs page only
  // one story could hold real focus.
  args: {
    className: '[outline:var(--focus-outline)] outline-offset-(--focus-inset)'
  }
}`,...a.parameters?.docs?.source},description:{story:"Focused from the keyboard: the ring shows the area the link covers.",...a.parameters?.docs?.description}}};export{a as Focused,t as Opening,e as OverRow,b as __namedExportsOrder,k as default};
