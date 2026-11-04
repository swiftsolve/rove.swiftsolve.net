import{G as g,j as e}from"./iframe-Tvou9pxL.js";import{B as b}from"./Button-CEnQugoK.js";import{I as c}from"./IconButton-C5f2movV.js";import{b as f}from"./icon-options-C7IsexGo.js";import{G as u,m as v,B as p,e as S}from"./Icons-fYA5Rsom.js";import{P as s}from"./PageHeader-DylhPc7e.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-9A1wEaLP.js";import"./ButtonSpinner-BmfQjWmf.js";import"./pressable-n_zMMF94.js";import"./Tooltip-DmllFGAf.js";import"./layers-D5UzyUFr.js";import"./usePositioner-lubKqWWQ.js";import"./useBaseUiId-BJ3vWlKG.js";import"./useOpenChangeComplete-zTkuehWX.js";import"./useTimeout-DmCNzo-_.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-CJRYpdPT.js";import"./DirectionContext-Bcn_VSHD.js";import"./ScreenReaderStatus-ndyJ3n90.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,h=e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Help",icon:p}),e.jsx(b,{variant:"solid",icon:S,onClick:l(),children:"Add service"})]}),q={title:"App frame/PageHeader",component:s,args:{title:"Services",icon:"GlobeIcon",description:"12 services, all up"},argTypes:{icon:f(18),actions:{control:!1},onBack:{control:!1}},parameters:{docs:{subtitle:"The top of a page: an icon or back button, the title and its line, and actions.",toc:g},guidance:{whenToUse:["The top of each tab’s page, like Devices or Usage.","A page over a tab, `onBack` in place of `icon`: Hosts.","Something running on the page, in `status`: “Checking…”."],whenNotToUse:["A card’s title: use `CardHeader`.","An error about the page: use `Banner` below it."],accessibility:{builtIn:["The title is the page’s `<h1>`, in a `<header>`.","A new `status` is announced to screen readers.","The back button is named “Back”, with a matching tooltip."],toHandle:["Labels and tooltips on the actions you pass.","`status` words that make sense heard alone."]}}},render:({icon:r,onBack:d,...m})=>d?e.jsx(s,{...m,onBack:d}):e.jsx(s,{...m,icon:r}),decorators:[r=>e.jsx("div",{className:"w-[482px] pt-12 pr-(--content-inset-right) pl-12",children:e.jsx(r,{})})]},t={args:{actions:h}},o={args:{title:"Devices",icon:"SearchIcon",status:"Scanning…"}},a={args:{title:"Hosts",icon:void 0,onBack:l(),description:"Remote hosts by application, busiest first",actions:e.jsx(c,{label:"About per-app hosts",icon:p})}},n={args:{description:void 0}},i={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-20",children:[e.jsx(s,{title:"Services",icon:e.jsx(u,{size:18}),description:"12 services, all up",actions:h}),e.jsx(s,{title:"Devices",icon:e.jsx(v,{size:18}),status:"Scanning…"}),e.jsx(s,{title:"Hosts",onBack:l(),description:"Remote hosts by application, busiest first",actions:e.jsx(c,{label:"About per-app hosts",icon:p})}),e.jsx(s,{title:"Services",icon:e.jsx(u,{size:18})})]})},F=["TopLevel","Status","Subpage","TitleOnly","AllStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    actions
  }
}`,...t.parameters?.docs?.source},description:{story:"A top-level page: its nav icon in the chip, and its actions.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Devices',
    icon: 'SearchIcon',
    status: 'Scanning…'
  }
}`,...o.parameters?.docs?.source},description:{story:"While something runs, the status takes the description's place.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hosts',
    icon: undefined,
    onBack: fn(),
    description: 'Remote hosts by application, busiest first',
    actions: <IconButton label="About per-app hosts" icon={HelpIcon} />
  }
}`,...a.parameters?.docs?.source},description:{story:"A page layered over a tab: a back button in the chip's place, and its hint.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...n.parameters?.docs?.source},description:{story:"No line under the title.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Every form together.",...i.parameters?.docs?.description}}};export{i as AllStates,o as Status,a as Subpage,n as TitleOnly,t as TopLevel,F as __namedExportsOrder,q as default};
