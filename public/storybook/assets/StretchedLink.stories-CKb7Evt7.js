import{j as e}from"./iframe-DdIKkGy0.js";import{S as a,a as n}from"./Icons-qI5vSdln.js";import{S as r}from"./StretchedLink-Coqf7iYl.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-D3eiRh-a.js";import"./index-M33yfidE.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,h={title:"Actions/StretchedLink",component:r,args:{label:"Open speed test",onClick:i()}},s={render:o=>e.jsxs("div",{className:"surface group relative flex w-[280px] items-center gap-8 px-14 py-10 hover:bg-fill-faint",children:[e.jsx(a,{size:16,className:"text-tertiary"}),e.jsx("span",{className:"text-md font-medium text-primary",children:"Speed"}),e.jsx("span",{className:"text-sm text-tertiary",children:"412 Mbps"}),e.jsx(r,{...o}),e.jsx(n,{size:16,className:"ml-auto text-tertiary group-hover:text-secondary"})]})},t={...s,args:{className:"[outline:var(--focus-outline)] outline-offset-(--focus-inset)"}},x=["OverRow","Focused"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Focused from the keyboard: the ring shows the area the link covers.",...t.parameters?.docs?.description}}};export{t as Focused,s as OverRow,x as __namedExportsOrder,h as default};
