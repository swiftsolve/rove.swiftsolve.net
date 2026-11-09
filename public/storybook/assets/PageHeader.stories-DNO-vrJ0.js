import{G as v,j as e}from"./iframe-DVHCHYtC.js";import{B as k}from"./Button-BApRK_u4.js";import{b as y}from"./icon-options-wHfJvBkB.js";import{G as m,m as S,e as x}from"./Icons-y8VxhmXe.js";import{P as t}from"./PageHeader-BAZwQuaM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./ButtonSpinner-DsI3AcIE.js";import"./cn-BikPFUNl.js";import"./pressable-n_zMMF94.js";import"./IconButton-BEnPrnxM.js";import"./Tooltip-B-N2yKkb.js";import"./layers-D5UzyUFr.js";import"./usePositioner-DG-558bn.js";import"./useBaseUiId-DpE1CoLo.js";import"./useOpenChangeComplete-DmaxHlYR.js";import"./useTimeout-BM2VwZFT.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-Zrdmg9nI.js";import"./DirectionContext-QL8BhxxC.js";import"./ScreenReaderStatus-CLueSjQU.js";const{expect:u,fn:d}=__STORYBOOK_MODULE_TEST__,h=e.jsx(k,{variant:"solid",icon:x,onClick:d(),children:"Add service"}),g={label:"About service checks",hint:"Checks each service every minute."},b={label:"About per-app hosts",hint:"Hosts each app talks to."},Y={title:"App frame/PageHeader",component:t,args:{title:"Services",icon:"GlobeIcon",description:"12 services, all up"},argTypes:{icon:y(18),actions:{control:!1},info:{control:!1},onBack:{control:!1}},parameters:{docs:{subtitle:"The top of a page: an icon or back button, the title and its line, info, and actions.",toc:v},guidance:{whenToUse:["The top of each tab’s page, like Devices or Usage.","A page over a tab, `onBack` in place of `icon`: Hosts.","Something running on the page, in `status`: “Checking…”.","A page’s hint, in `info`: it sits before the actions’ divider, never after it."],whenNotToUse:["A card’s title: use `CardHeader`.","An error about the page: use `Banner` below it."],accessibility:{builtIn:["The title is the page’s `<h1>`, in a `<header>`.","The info button is named by `info.label`, its hint in a tooltip.","A new `status` is announced to screen readers.","The back button is named “Back”, with a matching tooltip."],toHandle:["Labels and tooltips on the actions you pass.","`status` words that make sense heard alone."]}}},render:({icon:a,onBack:l,...n})=>l?e.jsx(t,{...n,onBack:l}):e.jsx(t,{...n,icon:a}),decorators:[a=>e.jsx("div",{className:"w-[482px] pt-12 pr-(--content-inset-right) pl-12",children:e.jsx(a,{})})]},o={args:{actions:h,info:g}},i={args:{title:"Devices",icon:"SearchIcon",status:"Scanning…"}},s={args:{title:"Hosts",icon:void 0,onBack:d(),description:"Remote hosts by application, busiest first",info:b}},r={...s,tags:["!autodocs"],play:async({args:a,canvas:l,userEvent:n})=>{const f=l.getByRole("button",{name:"Back"});await n.click(f),await u(a.onBack).toHaveBeenCalledOnce(),await n.keyboard("{Enter}"),await u(a.onBack).toHaveBeenCalledTimes(2)}},c={args:{description:void 0}},p={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-20",children:[e.jsx(t,{title:"Services",icon:e.jsx(m,{size:18}),description:"12 services, all up",actions:h,info:g}),e.jsx(t,{title:"Devices",icon:e.jsx(S,{size:18}),status:"Scanning…"}),e.jsx(t,{title:"Hosts",onBack:d(),description:"Remote hosts by application, busiest first",info:b}),e.jsx(t,{title:"Services",icon:e.jsx(m,{size:18})})]})},F=["TopLevel","Status","Subpage","GoingBack","TitleOnly","AllStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actions,
    info
  }
}`,...o.parameters?.docs?.source},description:{story:"A top-level page: its nav icon in the chip, info, and its actions after a divider.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Devices',
    icon: 'SearchIcon',
    status: 'Scanning…'
  }
}`,...i.parameters?.docs?.source},description:{story:"While something runs, the status takes the description's place.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hosts',
    icon: undefined,
    onBack: fn(),
    description: 'Remote hosts by application, busiest first',
    info: hostsInfo
  }
}`,...s.parameters?.docs?.source},description:{story:"A page layered over a tab: a back button in the chip's place, and info with no divider.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Subpage,
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const back = canvas.getByRole('button', {
      name: 'Back'
    });
    await userEvent.click(back);
    await expect(args.onBack).toHaveBeenCalledOnce();
    await userEvent.keyboard('{Enter}');
    await expect(args.onBack).toHaveBeenCalledTimes(2);
  }
}`,...r.parameters?.docs?.source},description:{story:"The back button, named “Back”, returns to the tab, from a click or the keyboard.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...c.parameters?.docs?.source},description:{story:"No line under the title.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      <PageHeader title="Services" icon={<GlobeIcon size={18} />} description="12 services, all up" actions={actions} info={info} />
      <PageHeader title="Devices" icon={<SearchIcon size={18} />} status="Scanning…" />
      <PageHeader title="Hosts" onBack={fn()} description="Remote hosts by application, busiest first" info={hostsInfo} />
      <PageHeader title="Services" icon={<GlobeIcon size={18} />} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Every form together.",...p.parameters?.docs?.description}}};export{p as AllStates,r as GoingBack,i as Status,s as Subpage,c as TitleOnly,o as TopLevel,F as __namedExportsOrder,Y as default};
