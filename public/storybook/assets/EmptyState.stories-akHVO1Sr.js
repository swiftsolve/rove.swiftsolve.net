import{j as e,G as f,r as y}from"./iframe-DvILEUHj.js";import{B as m}from"./Button-eO6QZDZ5.js";import{o as g,p as x,R as v}from"./Icons-C2MDaERC.js";import{c as u,a as N}from"./cn-CdwUFd5Z.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonSpinner-BeDOR-OU.js";import"./pressable-n_zMMF94.js";const w=[["w-[58%]","w-[32%]"],["w-[66%]","w-[26%]"]];function a({isLocked:t=!1,title:s,description:i,actions:h}){return e.jsxs("div",{className:"page-empty gap-8 pb-[56px] text-center",children:[e.jsx(j,{isLocked:t}),e.jsx("h2",{className:"type-heading-xsmall text-primary",children:s}),i!=null&&e.jsx(p,{children:i}),h!=null&&e.jsx("div",{className:"mt-8",children:h})]})}function j({isLocked:t}){return e.jsxs("div",{"aria-hidden":!0,className:"relative mb-12 w-[min(300px,80%)]",children:[e.jsx("div",{className:"flex flex-col gap-8 [mask-image:linear-gradient(to_bottom,#000_45%,transparent_105%)]",children:w.map(([s,i])=>e.jsxs("div",{className:"flex items-center gap-10 rounded-lg bg-surface px-12 py-10",children:[e.jsx("div",{className:"size-[22px] shrink-0 rounded-sm bg-fill-default"}),e.jsxs("div",{className:"flex flex-1 flex-col gap-6",children:[e.jsx("div",{className:u("h-6 rounded-full bg-fill-default",s)}),e.jsx("div",{className:u("h-4 rounded-full bg-fill-default",i)})]}),e.jsx("div",{className:"h-6 w-[36px] rounded-full bg-fill-default"})]},s))}),t&&e.jsx("div",{className:"absolute top-1/2 left-1/2 flex size-[36px] -translate-1/2 items-center justify-center rounded-full border border-line bg-popover text-tertiary shadow-popover",children:e.jsx(g,{size:20})})]})}function p({className:t,children:s,...i}){return e.jsx("p",{className:N("max-w-[34ch] type-body-small text-tertiary",t),...i,children:s})}try{a.displayName="EmptyState",a.__docgenInfo={description:`The shared "nothing here yet" page: faded placeholder rows (with a lock
badge when locked), a title, a short explanation and an optional action,
centred in the content region. Every blank state uses it, so they share one
rhythm and measure.`,displayName:"EmptyState",filePath:"/tmp/tmp.xZCpGI890b/rove/src/ui/empty-state/EmptyState.tsx",methods:[],props:{isLocked:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:`A lock badge over the placeholder rows, for a list that can't fill until
the user acts (admin access needed) rather than one waiting for data.`,name:"isLocked",required:!1,tags:{},type:{name:"boolean"}},title:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:`What's empty: "No devices found".`,name:"title",required:!0,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:"A line or two naming what will fill the page, or why it can't.",name:"description",required:!1,tags:{},type:{name:"ReactNode"}},actions:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:"Controls below the description, usually a retry button.",name:"actions",required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}try{p.displayName="EmptyStateDescription",p.__docgenInfo={description:"A line of explanation under the title, also for extra notes the `actions` add.",displayName:"EmptyStateDescription",filePath:"/tmp/tmp.xZCpGI890b/rove/src/ui/empty-state/EmptyState.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:'The note. Give it `role="status"` when it appears in answer to an action, so it\'s announced.',name:"children",required:!0,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:"Status and feedback/EmptyState",component:a,args:{title:"No services yet",description:"Add one to see whether it's up."},parameters:{docs:{toc:f},guidance:{use:["A page with nothing to show yet: “No services yet”.","`actions` for the step that fills it, like Scan again.","`isLocked` when it waits on the user: “Administrator access needed”."],avoid:["Still loading: use `LoadingState`.","A load that failed: use `Banner`.","One missing value in a row: use `NoValue`."],accessibility:{builtIn:["The title is an `<h2>`, in the page outline.","The placeholder rows and lock are hidden from screen readers."],toHandle:["A title naming what’s empty: “No devices found”.",'`role="status"` on a note an action adds, so it’s announced.']}}},argTypes:{actions:{control:!1}},render:t=>e.jsx("div",{className:"flex h-[280px] w-[360px]",children:e.jsx(a,{...t})})},n={args:{actions:e.jsx(m,{variant:"solid",icon:x,onClick:S(),children:"Add service"})}},r={args:{title:"No events yet",description:"Connection changes show up here as they happen."}},l={args:{title:"No devices found",description:void 0}},o={args:{isLocked:!0,title:"Needs administrator access",description:"Restart Rove as admin to see this."}},c={args:{title:"No interfaces found",description:"Rove found no network adapters.",actions:e.jsx(_,{})}};function _(){const[t,s]=y.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsx(m,{icon:v,onClick:()=>s(!0),children:"Try again"}),t&&e.jsx(p,{role:"status",children:"Still nothing. Check the adapter is on."})]})}const d={render:()=>e.jsxs("div",{className:"grid w-[740px] grid-cols-2 gap-12",children:[e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{title:"No services yet",description:"Add one to see whether it's up.",actions:e.jsx(m,{variant:"solid",icon:x,children:"Add service"})})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{isLocked:!0,title:"Needs administrator access",description:"Restart Rove as admin to see this."})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{title:"No events yet",description:"Connection changes show up here as they happen."})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{title:"No devices found"})})]})},O=["WithAction","DescriptionOnly","TitleOnly","Locked","WithNote","AllStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="solid" icon={PlusIcon} onClick={fn()}>
        Add service
      </Button>
  }
}`,...n.parameters?.docs?.source},description:{story:"Waiting on the user, with the action that fills it.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No events yet',
    description: 'Connection changes show up here as they happen.'
  }
}`,...r.parameters?.docs?.source},description:{story:"Nothing to do but wait.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No devices found',
    description: undefined
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: true,
    title: 'Needs administrator access',
    description: 'Restart Rove as admin to see this.'
  }
}`,...o.parameters?.docs?.source},description:{story:"Can't fill until the user acts outside Rove: a lock over the rows.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No interfaces found',
    description: 'Rove found no network adapters.',
    actions: <RetryWithNote />
  }
}`,...c.parameters?.docs?.source},description:{story:"An extra note the actions add once pressed, announced as it appears.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Each kind side by side.",...d.parameters?.docs?.description}}};export{d as AllStates,r as DescriptionOnly,o as Locked,l as TitleOnly,n as WithAction,c as WithNote,O as __namedExportsOrder,C as default};
