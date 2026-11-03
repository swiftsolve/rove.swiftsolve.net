import{j as e}from"./iframe-DUVig4Wa.js";import{B as y}from"./Button-Bfanhvar.js";import{I as d}from"./IconButton-CL9TLns3.js";import{b as S}from"./icon-options-D_Qv00MU.js";import{r as j,G as g,t as N,v as p,p as H}from"./Icons-CHGKQol9.js";import{c as f}from"./cn-CdwUFd5Z.js";import{S as I}from"./ScreenReaderStatus-DKWvO6qg.js";import{T}from"./Tooltip-DgqCbHXd.js";import{a as k}from"./layers-D5UzyUFr.js";import{P}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonSpinner-DllW7uQ-.js";import"./usePositioner-BeOf__hn.js";import"./useBaseUiId-1TUgJYx5.js";import"./useOpenChangeComplete-EogAs_ll.js";import"./useTimeout-BFAfNTTc.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DcgwEOHZ.js";import"./DirectionContext-BOikIBUt.js";const _=f("inline-flex size-(--rail-item-size) shrink-0 items-center justify-center rounded-md","bg-fill-subtle text-secondary hover:bg-hover hover:text-primary","transition-[color,background,transform] duration-(--duration-fast) ease-in-out",P),A="min-h-[calc(var(--font-size-xs)*1.35)] type-caption text-tertiary";function a({title:s,description:i,status:t,actions:u,icon:x,onBack:h}){const b=i!==void 0||t!==void 0;return e.jsxs("header",{className:f("page-header relative flex items-center gap-12",k),children:[h?e.jsx(T,{content:"Back",children:e.jsx("button",{type:"button",className:_,onClick:h,"aria-label":"Back",children:e.jsx(j,{size:18})})}):e.jsx("span",{className:"page-header-icon","aria-hidden":!0,children:x}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-4",children:[e.jsx("h1",{className:"type-heading-large text-primary",children:s}),b&&e.jsx("div",{className:A,children:t!==void 0?e.jsx("span",{"aria-hidden":!0,children:t},"status"):e.jsx("div",{className:"animate-fade-in",children:i},"description")}),e.jsx(I,{children:t})]}),u!==void 0&&e.jsx("div",{className:"flex shrink-0 items-center gap-6",children:u})]})}try{a.displayName="PageHeader",a.__docgenInfo={description:`The top of every page but Home: an icon chip (or a back button), the title
with a line under it, and actions at the end, over a full-width divider. It
sits above the page content (\`LAYER_RAISED\`), so its tooltips aren't painted
over by the content they drop into. The actions hold their size, so a long
description wraps instead of squeezing them.`,displayName:"PageHeader",filePath:"/tmp/tmp.erQmZWfF7q/rove/src/ui/page-header/PageHeader.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"The page's name.",name:"title",required:!0,tags:{},type:{name:"ReactNode"}},description:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"The line under the title. It fades in when it first shows, and again each\ntime `status` clears. `null` keeps the line's height while there's nothing\nto show; leave it out to have no line.",name:"description",required:!1,tags:{},type:{name:"ReactNode"}},status:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:`Shown in the description's place while something loads or runs ("Checking…").`,name:"status",required:!1,tags:{},type:{name:"ReactNode"}},actions:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"Controls at the end of the header (help, refresh, the page's main action).",name:"actions",required:!1,tags:{},type:{name:"ReactNode"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"},{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"The page's nav icon, in a chip: a top-level page.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},onBack:{defaultValue:null,declarations:[{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"},{fileName:"rove/src/ui/page-header/PageHeader.tsx",name:"TypeLiteral"}],description:"A back button in the chip's place: a page layered over a tab.",name:"onBack",required:!1,tags:{},type:{name:"(() => void)"}}},tags:{}}}catch{}const{fn:m}=__STORYBOOK_MODULE_TEST__,v=e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Help",icon:p}),e.jsx(y,{variant:"solid",icon:H,onClick:m(),children:"Add service"})]}),X={title:"App frame/PageHeader",component:a,args:{title:"Services",icon:"GlobeIcon",description:"12 services, all up"},argTypes:{icon:S(18),actions:{control:!1},onBack:{control:!1}},render:({icon:s,onBack:i,...t})=>i?e.jsx(a,{...t,onBack:i}):e.jsx(a,{...t,icon:s}),decorators:[s=>e.jsx("div",{className:"w-[482px] pt-12 pr-(--content-inset-right) pl-12",children:e.jsx(s,{})})]},r={args:{actions:v}},n={args:{title:"Devices",icon:"SearchIcon",status:"Scanning…"}},o={args:{title:"Hosts",icon:void 0,onBack:m(),description:"Remote hosts by application, busiest first",actions:e.jsx(d,{label:"About per-app hosts",icon:p})}},c={args:{description:void 0}},l={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-20",children:[e.jsx(a,{title:"Services",icon:e.jsx(g,{size:18}),description:"12 services, all up",actions:v}),e.jsx(a,{title:"Devices",icon:e.jsx(N,{size:18}),status:"Scanning…"}),e.jsx(a,{title:"Hosts",onBack:m(),description:"Remote hosts by application, busiest first",actions:e.jsx(d,{label:"About per-app hosts",icon:p})}),e.jsx(a,{title:"Services",icon:e.jsx(g,{size:18})})]})},$=["TopLevel","Status","Subpage","TitleOnly","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    actions
  }
}`,...r.parameters?.docs?.source},description:{story:"A top-level page: its nav icon in the chip, and its actions.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Devices',
    icon: 'SearchIcon',
    status: 'Scanning…'
  }
}`,...n.parameters?.docs?.source},description:{story:"While something runs, the status takes the description's place.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Every form together.",...l.parameters?.docs?.description}}};export{l as AllStates,n as Status,o as Subpage,c as TitleOnly,r as TopLevel,$ as __namedExportsOrder,X as default};
