import{G as k,j as e}from"./iframe-DovSnlCC.js";import{B as f}from"./Button-Bce6n3IO.js";import{I as d}from"./IconButton-C_uVQv6a.js";import{b as S}from"./icon-options-D61CjsQA.js";import{G as g,m as x,B as m,e as y}from"./Icons-CaGqGwU6.js";import{P as a}from"./PageHeader-BirDAY-i.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-Dq0XH3An.js";import"./ButtonSpinner-DnwfMx5T.js";import"./pressable-n_zMMF94.js";import"./Tooltip-BBH3NWGX.js";import"./layers-D5UzyUFr.js";import"./usePositioner-Dm0UY5Hf.js";import"./useBaseUiId-bDAn0ZBU.js";import"./useOpenChangeComplete-g9yKDDwC.js";import"./useTimeout-BDN9sxyq.js";import"./stateAttributesMapping-DqawBeMT.js";import"./visuallyHidden-BsIGJQ4u.js";import"./owner-CvMgaIeV.js";import"./shadowDom-BS5y8t6i.js";import"./DirectionContext-oJRoqIyk.js";import"./ScreenReaderStatus-CUVfj7YJ.js";const{expect:b,fn:u}=__STORYBOOK_MODULE_TEST__,h=e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Help",icon:m}),e.jsx(f,{variant:"solid",icon:y,onClick:u(),children:"Add service"})]}),M={title:"App frame/PageHeader",component:a,args:{title:"Services",icon:"GlobeIcon",description:"12 services, all up"},argTypes:{icon:S(18),actions:{control:!1},onBack:{control:!1}},parameters:{docs:{subtitle:"The top of a page: an icon or back button, the title and its line, and actions.",toc:k},guidance:{whenToUse:["The top of each tab’s page, like Devices or Usage.","A page over a tab, `onBack` in place of `icon`: Hosts.","Something running on the page, in `status`: “Checking…”."],whenNotToUse:["A card’s title: use `CardHeader`.","An error about the page: use `Banner` below it."],accessibility:{builtIn:["The title is the page’s `<h1>`, in a `<header>`.","A new `status` is announced to screen readers.","The back button is named “Back”, with a matching tooltip."],toHandle:["Labels and tooltips on the actions you pass.","`status` words that make sense heard alone."]}}},render:({icon:t,onBack:l,...n})=>l?e.jsx(a,{...n,onBack:l}):e.jsx(a,{...n,icon:t}),decorators:[t=>e.jsx("div",{className:"w-[482px] pt-12 pr-(--content-inset-right) pl-12",children:e.jsx(t,{})})]},o={args:{actions:h}},r={args:{title:"Devices",icon:"SearchIcon",status:"Scanning…"}},s={args:{title:"Hosts",icon:void 0,onBack:u(),description:"Remote hosts by application, busiest first",actions:e.jsx(d,{label:"About per-app hosts",icon:m})}},i={...s,tags:["!autodocs"],play:async({args:t,canvas:l,userEvent:n})=>{const v=l.getByRole("button",{name:"Back"});await n.click(v),await b(t.onBack).toHaveBeenCalledOnce(),await n.keyboard("{Enter}"),await b(t.onBack).toHaveBeenCalledTimes(2)}},c={args:{description:void 0}},p={parameters:{a11y:{config:{rules:[{id:"landmark-no-duplicate-banner",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-20",children:[e.jsx(a,{title:"Services",icon:e.jsx(g,{size:18}),description:"12 services, all up",actions:h}),e.jsx(a,{title:"Devices",icon:e.jsx(x,{size:18}),status:"Scanning…"}),e.jsx(a,{title:"Hosts",onBack:u(),description:"Remote hosts by application, busiest first",actions:e.jsx(d,{label:"About per-app hosts",icon:m})}),e.jsx(a,{title:"Services",icon:e.jsx(g,{size:18})})]})},W=["TopLevel","Status","Subpage","GoingBack","TitleOnly","AllStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actions
  }
}`,...o.parameters?.docs?.source},description:{story:"A top-level page: its nav icon in the chip, and its actions.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Devices',
    icon: 'SearchIcon',
    status: 'Scanning…'
  }
}`,...r.parameters?.docs?.source},description:{story:"While something runs, the status takes the description's place.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hosts',
    icon: undefined,
    onBack: fn(),
    description: 'Remote hosts by application, busiest first',
    actions: <IconButton label="About per-app hosts" icon={HelpIcon} />
  }
}`,...s.parameters?.docs?.source},description:{story:"A page layered over a tab: a back button in the chip's place, and its hint.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"The back button, named “Back”, returns to the tab, from a click or the keyboard.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      <PageHeader title="Services" icon={<GlobeIcon size={18} />} description="12 services, all up" actions={actions} />
      <PageHeader title="Devices" icon={<SearchIcon size={18} />} status="Scanning…" />
      <PageHeader title="Hosts" onBack={fn()} description="Remote hosts by application, busiest first" actions={<IconButton label="About per-app hosts" icon={HelpIcon} />} />
      <PageHeader title="Services" icon={<GlobeIcon size={18} />} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Every form together.",...p.parameters?.docs?.description}}};export{p as AllStates,i as GoingBack,r as Status,s as Subpage,c as TitleOnly,o as TopLevel,W as __namedExportsOrder,M as default};
