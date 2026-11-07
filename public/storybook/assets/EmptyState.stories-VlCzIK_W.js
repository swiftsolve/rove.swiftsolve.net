import{G as h,j as e,r as m}from"./iframe-CC20Qc84.js";import{B as d}from"./Button-Dv2ahzZd.js";import{e as p,R as u}from"./Icons-jdHWe0eC.js";import{E as t,a as g}from"./EmptyState-FC0yVLuu.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-_GGXlVLs.js";import"./ButtonSpinner-C2002Oo_.js";import"./pressable-n_zMMF94.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,k={title:"Status and feedback/EmptyState",component:t,args:{title:"No services yet",description:"Add one to see whether it's up."},parameters:{docs:{subtitle:"A page with nothing to show yet: faded placeholder rows, a title and a way forward.",toc:h},guidance:{whenToUse:["A page with nothing to show yet: “No services yet”.","A page the user can fill, its step in `actions`: Scan again.","A page waiting on the user, `isLocked`: “Administrator access needed”."],whenNotToUse:["A page still loading: use `LoadingState`.","A load that failed: use `Banner`.","One missing value in a row: use `NoValue`."],accessibility:{builtIn:["The title is an `<h2>`, in the page outline.","The placeholder rows and lock are hidden from screen readers."],toHandle:["A title naming what’s empty: “No devices found”.",'`role="status"` on a note an action adds, so it’s announced.']}}},argTypes:{actions:{control:!1}},render:c=>e.jsx("div",{className:"flex h-[280px] w-[360px]",children:e.jsx(t,{...c})})},s={args:{actions:e.jsx(d,{variant:"solid",icon:p,onClick:v(),children:"Add service"})}},o={args:{title:"No events yet",description:"Connection changes show up here as they happen."}},r={args:{title:"No devices found",description:void 0}},i={args:{isLocked:!0,title:"Needs administrator access",description:"Restart Rove as admin to see this."}},a={args:{title:"No interfaces found",description:"Rove found no network adapters.",actions:e.jsx(x,{})}};function x(){const[c,l]=m.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsx(d,{icon:u,onClick:()=>l(!0),children:"Try again"}),c&&e.jsx(g,{role:"status",children:"Still nothing. Check the adapter is on."})]})}const n={render:()=>e.jsxs("div",{className:"grid w-[740px] grid-cols-2 gap-12",children:[e.jsx("div",{className:"flex h-[280px]",children:e.jsx(t,{title:"No services yet",description:"Add one to see whether it's up.",actions:e.jsx(d,{variant:"solid",icon:p,children:"Add service"})})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(t,{isLocked:!0,title:"Needs administrator access",description:"Restart Rove as admin to see this."})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(t,{title:"No events yet",description:"Connection changes show up here as they happen."})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(t,{title:"No devices found"})})]})},E=["WithAction","DescriptionOnly","TitleOnly","Locked","WithNote","AllStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="solid" icon={PlusIcon} onClick={fn()}>
        Add service
      </Button>
  }
}`,...s.parameters?.docs?.source},description:{story:"Waiting on the user, with the action that fills it.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No events yet',
    description: 'Connection changes show up here as they happen.'
  }
}`,...o.parameters?.docs?.source},description:{story:"Nothing to do but wait.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No devices found',
    description: undefined
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: true,
    title: 'Needs administrator access',
    description: 'Restart Rove as admin to see this.'
  }
}`,...i.parameters?.docs?.source},description:{story:"Can't fill until the user acts outside Rove: a lock over the rows.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No interfaces found',
    description: 'Rove found no network adapters.',
    actions: <RetryWithNote />
  }
}`,...a.parameters?.docs?.source},description:{story:"An extra note the actions add once pressed, announced as it appears.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-[740px] grid-cols-2 gap-12">
      <div className="flex h-[280px]">
        <EmptyState title="No services yet" description="Add one to see whether it's up." actions={<Button variant="solid" icon={PlusIcon}>
              Add service
            </Button>} />
      </div>
      <div className="flex h-[280px]">
        <EmptyState isLocked title="Needs administrator access" description="Restart Rove as admin to see this." />
      </div>
      <div className="flex h-[280px]">
        <EmptyState title="No events yet" description="Connection changes show up here as they happen." />
      </div>
      <div className="flex h-[280px]">
        <EmptyState title="No devices found" />
      </div>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Each kind side by side.",...n.parameters?.docs?.description}}};export{n as AllStates,o as DescriptionOnly,i as Locked,r as TitleOnly,s as WithAction,a as WithNote,E as __namedExportsOrder,k as default};
