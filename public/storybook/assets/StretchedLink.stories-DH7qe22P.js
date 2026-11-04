import{G as a,j as e}from"./iframe-BNPCRDJb.js";import{S as n,a as i}from"./Icons-pz7-smQ6.js";import{S as o}from"./StretchedLink-HDWq9_fj.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CdwUFd5Z.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,u={title:"Actions/StretchedLink",component:o,args:{label:"Open speed test",onClick:c()},parameters:{docs:{toc:a},guidance:{use:["A row that opens a view but holds a bar or figures, like Apps’ rows.","A row or container that also holds a control of its own."],avoid:["A simple row with a chevron: use `ListRow`.","A whole card: use `Card` with `onOpen`, which draws its own.","A link in a line of text: use `Link`."],accessibility:{builtIn:['A `<button>` with `role="link"`, as it opens a view.',"Covers its container, so a click anywhere opens it.","Its focus ring follows the container’s corners."],toHandle:["A `label`, or `aria-labelledby` pointing at a heading.","A positioned container (`relative`) for it to cover.","Controls raised above it (`relative z-2`), as siblings, never nested.","A cue that it opens, like a caret."]}}}},s={render:r=>e.jsxs("div",{className:"surface group relative flex w-[280px] items-center gap-8 px-14 py-10 hover:bg-fill-faint",children:[e.jsx(n,{size:16,className:"text-tertiary"}),e.jsx("span",{className:"text-md font-medium text-primary",children:"Speed"}),e.jsx("span",{className:"text-sm text-tertiary",children:"412 Mbps"}),e.jsx(o,{...r}),e.jsx(i,{size:16,className:"ml-auto text-tertiary group-hover:text-secondary"})]})},t={...s,args:{className:"[outline:var(--focus-outline)] outline-offset-(--focus-inset)"}},f=["OverRow","Focused"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="surface group relative flex w-[280px] items-center gap-8 px-14 py-10 hover:bg-fill-faint">
      <SpeedIcon size={16} className="text-tertiary" />
      <span className="text-md font-medium text-primary">Speed</span>
      <span className="text-sm text-tertiary">412 Mbps</span>
      <StretchedLink {...args} />
      <ChevronRightIcon size={16} className="ml-auto text-tertiary group-hover:text-secondary" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"The link itself is invisible: it lies over the whole row, whose content\nshows through, so a click anywhere on it opens what it summarises. A Card\ndraws its own with `onOpen`.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...OverRow,
  // The ring keyboard focus draws, shown here for good: on a Docs page only
  // one story could hold real focus.
  args: {
    className: '[outline:var(--focus-outline)] outline-offset-(--focus-inset)'
  }
}`,...t.parameters?.docs?.source},description:{story:"Focused from the keyboard: the ring shows the area the link covers.",...t.parameters?.docs?.description}}};export{t as Focused,s as OverRow,f as __namedExportsOrder,u as default};
