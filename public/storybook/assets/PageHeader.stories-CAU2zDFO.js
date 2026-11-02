import{j as e}from"./iframe-DdIKkGy0.js";import{B as b}from"./Button-Dcbbzy0Y.js";import{I as d}from"./IconButton-DicvSmMC.js";import{q as y,G as g,s as j,u as p,o as N}from"./Icons-qI5vSdln.js";import{b as S}from"./icon-options-EqWWACFL.js";import{c as H}from"./index-M33yfidE.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-D3eiRh-a.js";import"./ButtonSpinner-DpaEuqbQ.js";import"./pressable-n_zMMF94.js";import"./Tooltip-B84R3Tzl.js";import"./usePositioner-BkjSEl-6.js";import"./useBaseUiId-BVEEuSf8.js";import"./useOpenChangeComplete-CMy2iEJI.js";import"./useTimeout-Ckchi49H.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-D7MnAdLT.js";import"./DirectionContext-BxH604F8.js";const k=H("inline-flex size-(--rail-item-size) shrink-0 items-center justify-center rounded-md","bg-fill-subtle text-secondary hover:bg-hover hover:text-primary","transition-[color,background] duration-(--duration-fast) ease-in-out"),I="min-h-[calc(var(--font-size-xs)*1.35)] text-xs text-tertiary";function a({title:t,description:i,status:s,actions:u,icon:v,onBack:h}){const x=i!==void 0||s!==void 0;return e.jsxs("header",{className:"page-header relative z-20 flex items-center gap-12",children:[h?e.jsx("button",{type:"button",className:k,onClick:h,"aria-label":"Back",children:e.jsx(y,{size:18})}):e.jsx("span",{className:"page-header-icon","aria-hidden":!0,children:v}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-4",children:[e.jsx("h1",{className:"type-heading-large text-primary",children:t}),x&&e.jsx("div",{className:I,children:s!==void 0?e.jsx("span",{children:s},"status"):e.jsx("div",{className:"animate-fade-in",children:i},"description")})]}),u!==void 0&&e.jsx("div",{className:"flex shrink-0 items-center gap-6",children:u})]})}try{a.displayName="PageHeader",a.__docgenInfo={description:`The top of every page but Home: an icon chip (or a back button), the title
with a line under it, and actions at the end, over a full-width divider. It
sits above the page content (z-20), so its tooltips aren't painted over by
the content they drop into. The actions hold their size, so a long
description wraps instead of squeezing them.`,displayName:"PageHeader",filePath:"/tmp/tmp.PkJIRjHKAU/rove/src/ui/page-header/PageHeader.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"The page's name.",name:"title",required:!0,tags:{},type:{name:"ReactNode"}},description:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"The line under the title. It fades in when it first shows, and again each\ntime `status` clears. `null` keeps the line's height while there's nothing\nto show; leave it out to have no line.",name:"description",required:!1,tags:{},type:{name:"ReactNode"}},status:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:`Shown in the description's place while something loads or runs ("Checking…").`,name:"status",required:!1,tags:{},type:{name:"ReactNode"}},actions:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"Controls at the end of the header (help, refresh, the page's main action).",name:"actions",required:!1,tags:{},type:{name:"ReactNode"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"},{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"The page's nav icon, in a chip: a top-level page.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},onBack:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"},{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"A back button in the chip's place: a page layered over a tab.",name:"onBack",required:!1,tags:{},type:{name:"(() => void)"}}},tags:{}}}catch{}const{fn:m}=__STORYBOOK_MODULE_TEST__,f=e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Help",icon:p}),e.jsx(b,{variant:"solid",icon:N,onClick:m(),children:"Add service"})]}),M={title:"App frame/PageHeader",component:a,args:{title:"Services",icon:"GlobeIcon",description:"12 services, all up"},argTypes:{icon:S(18),actions:{control:!1},onBack:{control:!1}},render:({icon:t,onBack:i,...s})=>i?e.jsx(a,{...s,onBack:i}):e.jsx(a,{...s,icon:t}),decorators:[t=>e.jsx("div",{className:"w-[482px] pt-12 pr-(--content-inset-right) pl-12",children:e.jsx(t,{})})]},n={args:{actions:f}},r={args:{title:"Devices",icon:"SearchIcon",status:"Scanning…"}},o={args:{title:"Hosts",icon:void 0,onBack:m(),description:"Remote hosts by application, busiest first",actions:e.jsx(d,{label:"About per-app hosts",icon:p})}},c={args:{description:void 0}},l={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-20",children:[e.jsx(a,{title:"Services",icon:e.jsx(g,{size:18}),description:"12 services, all up",actions:f}),e.jsx(a,{title:"Devices",icon:e.jsx(j,{size:18}),status:"Scanning…"}),e.jsx(a,{title:"Hosts",onBack:m(),description:"Remote hosts by application, busiest first",actions:e.jsx(d,{label:"About per-app hosts",icon:p})}),e.jsx(a,{title:"Services",icon:e.jsx(g,{size:18})})]})},W=["TopLevel","Status","Subpage","TitleOnly","AllStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    actions
  }
}`,...n.parameters?.docs?.source},description:{story:"A top-level page: its nav icon in the chip, and its actions.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Devices',
    icon: 'SearchIcon',
    status: 'Scanning…'
  }
}`,...r.parameters?.docs?.source},description:{story:"While something runs, the status takes the description's place.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hosts',
    icon: undefined,
    onBack: fn(),
    description: 'Remote hosts by application, busiest first',
    actions: <IconButton label="About per-app hosts" icon={HelpIcon} />
  }
}`,...o.parameters?.docs?.source},description:{story:"A page layered over a tab: a back button in the chip's place, and its hint.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...c.parameters?.docs?.source},description:{story:"No line under the title.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // Several headers on one page is this overview only; the app has one.
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'landmark-no-duplicate-banner',
          enabled: false
        }, {
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: () => <div className="flex flex-col gap-20">
      <PageHeader title="Services" icon={<GlobeIcon size={18} />} description="12 services, all up" actions={actions} />
      <PageHeader title="Devices" icon={<SearchIcon size={18} />} status="Scanning…" />
      <PageHeader title="Hosts" onBack={fn()} description="Remote hosts by application, busiest first" actions={<IconButton label="About per-app hosts" icon={HelpIcon} />} />
      <PageHeader title="Services" icon={<GlobeIcon size={18} />} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every form together.",...l.parameters?.docs?.description}}};export{l as AllStates,r as Status,o as Subpage,c as TitleOnly,n as TopLevel,W as __namedExportsOrder,M as default};
