import{j as e,r as x}from"./iframe-DdIKkGy0.js";import{B as m}from"./Button-Dcbbzy0Y.js";import{n as f,o as h,R as y}from"./Icons-qI5vSdln.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./cn-D3eiRh-a.js";import"./ButtonSpinner-DpaEuqbQ.js";import"./pressable-n_zMMF94.js";const v=[["w-[58%]","w-[32%]"],["w-[66%]","w-[26%]"]];function a({isLocked:t=!1,title:s,description:d,actions:u}){return e.jsxs("div",{className:"page-empty gap-8 pb-[56px] text-center",children:[e.jsx(g,{isLocked:t}),e.jsx("h2",{className:"text-md font-semibold text-primary",children:s}),d!=null&&e.jsx(p,{children:d}),u!=null&&e.jsx("div",{className:"mt-8",children:u})]})}function g({isLocked:t}){return e.jsxs("div",{"aria-hidden":!0,className:"relative mb-12 w-[min(300px,80%)]",children:[e.jsx("div",{className:"flex flex-col gap-8 [mask-image:linear-gradient(to_bottom,#000_45%,transparent_105%)]",children:v.map(([s,d])=>e.jsxs("div",{className:"flex items-center gap-10 rounded-lg bg-surface px-12 py-10",children:[e.jsx("div",{className:"size-[22px] shrink-0 rounded-sm bg-fill-default"}),e.jsxs("div",{className:"flex flex-1 flex-col gap-6",children:[e.jsx("div",{className:`h-6 rounded-full bg-fill-default ${s}`}),e.jsx("div",{className:`h-4 rounded-full bg-fill-default ${d}`})]}),e.jsx("div",{className:"h-6 w-[36px] rounded-full bg-fill-default"})]},s))}),t&&e.jsx("div",{className:"absolute top-1/2 left-1/2 flex size-[36px] -translate-1/2 items-center justify-center rounded-full border border-line bg-popover text-tertiary shadow-popover",children:e.jsx(f,{size:20})})]})}function p({children:t,role:s}){return e.jsx("p",{className:"max-w-[34ch] text-sm leading-body-small text-tertiary",role:s,children:t})}try{a.displayName="EmptyState",a.__docgenInfo={description:`The shared "nothing here yet" page: faded placeholder rows (with a lock badge
when the list is locked), a title, a short explanation and an optional action, centred
in the content region. Every view's blank state goes through this so they
line up on one rhythm and one measure.`,displayName:"EmptyState",filePath:"/tmp/tmp.PkJIRjHKAU/rove/src/ui/empty-state/EmptyState.tsx",methods:[],props:{isLocked:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:`A lock badge over the placeholder rows, for a list that can't fill until
the user acts (admin access needed) rather than one waiting for data.`,name:"isLocked",required:!1,tags:{},type:{name:"boolean"}},title:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:`What's empty: "No devices yet".`,name:"title",required:!0,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:"A line or two naming what will fill the page, or why it can't.",name:"description",required:!1,tags:{},type:{name:"ReactNode"}},actions:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:"Controls below the description, usually a retry button.",name:"actions",required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}try{p.displayName="EmptyStateDescription",p.__docgenInfo={description:"A line of explanation under the title — also for extra notes the `actions` add.",displayName:"EmptyStateDescription",filePath:"/tmp/tmp.PkJIRjHKAU/rove/src/ui/empty-state/EmptyState.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:"The note.",name:"children",required:!0,tags:{},type:{name:"ReactNode"}},role:{defaultValue:null,declarations:[{fileName:"rove/src/ui/empty-state/EmptyState.tsx",name:"TypeLiteral"}],description:"`status` for a note that appears in answer to an action, so it's announced.",name:"role",required:!1,tags:{},type:{name:"enum",raw:'"status"',value:[{value:'"status"'}]}}},tags:{}}}catch{}const{fn:N}=__STORYBOOK_MODULE_TEST__,L={title:"Status and feedback/EmptyState",component:a,args:{title:"No services yet",description:"Add one to see whether it's up."},argTypes:{actions:{control:!1}},render:t=>e.jsx("div",{className:"flex h-[280px] w-[360px]",children:e.jsx(a,{...t})})},r={args:{actions:e.jsx(m,{variant:"solid",icon:h,onClick:N(),children:"Add service"})}},i={args:{title:"No events yet",description:"Connection changes show up here as they happen."}},l={args:{title:"No devices found",description:void 0}},n={args:{isLocked:!0,title:"Needs administrator access",description:"Restart Rove as admin to see this."}},o={args:{title:"No interfaces found",description:"Rove found no network adapters.",actions:e.jsx(j,{})}};function j(){const[t,s]=x.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsx(m,{icon:y,onClick:()=>s(!0),children:"Try again"}),t&&e.jsx(p,{role:"status",children:"Still nothing. Check the adapter is on."})]})}const c={render:()=>e.jsxs("div",{className:"grid w-[740px] grid-cols-2 gap-12",children:[e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{title:"No services yet",description:"Add one to see whether it's up.",actions:e.jsx(m,{variant:"solid",icon:h,children:"Add service"})})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{isLocked:!0,title:"Needs administrator access",description:"Restart Rove as admin to see this."})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{title:"No events yet",description:"Connection changes show up here as they happen."})}),e.jsx("div",{className:"flex h-[280px]",children:e.jsx(a,{title:"No devices found"})})]})},T=["WithAction","DescriptionOnly","TitleOnly","Locked","WithNote","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="solid" icon={PlusIcon} onClick={fn()}>
        Add service
      </Button>
  }
}`,...r.parameters?.docs?.source},description:{story:"Waiting on the user, with the action that fills it.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No events yet',
    description: 'Connection changes show up here as they happen.'
  }
}`,...i.parameters?.docs?.source},description:{story:"Nothing to do but wait.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No devices found',
    description: undefined
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: true,
    title: 'Needs administrator access',
    description: 'Restart Rove as admin to see this.'
  }
}`,...n.parameters?.docs?.source},description:{story:"Can't fill until the user acts outside Rove: a lock over the rows.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No interfaces found',
    description: 'Rove found no network adapters.',
    actions: <RetryWithNote />
  }
}`,...o.parameters?.docs?.source},description:{story:"An extra note the actions add once pressed, announced as it appears.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Each kind side by side.",...c.parameters?.docs?.description}}};export{c as AllStates,i as DescriptionOnly,n as Locked,l as TitleOnly,r as WithAction,o as WithNote,T as __namedExportsOrder,L as default};
