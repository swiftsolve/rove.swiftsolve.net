import{j as e}from"./iframe-rBHxdIey.js";import{i as S,a as L}from"./icon-options-CZJ93sBD.js";import{l as T,a as D,G as k,P as y}from"./Icons-BNKO3jID.js";import{c,a as g}from"./cn-D1carl3E.js";import{p as O,S as C}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";const b=c("group/link inline-flex items-center gap-[5px] rounded-full px-8 py-2 ml-[-9.5px] mr-[-9px]","text-[length:inherit] font-medium whitespace-nowrap text-secondary no-underline","transition-[color] duration-(--duration-fast) ease-in-out","usable:hover:text-accent-text focus-visible:text-accent-text focus-visible:outline-none",C),m=c("opacity-72 transition-opacity duration-(--duration-fast) ease-in-out","group-usable/link:group-hover/link:opacity-100 group-focus-visible/link:opacity-100"),v=c("group-usable/link:group-hover/link:underline group-usable/link:group-hover/link:underline-offset-2","group-focus-visible/link:underline group-focus-visible/link:underline-offset-2"),u=13;function n(s){if(s.href!==void 0){const{icon:f,className:I,children:E,..._}=s;return e.jsxs("a",{className:g(b,I),target:"_blank",rel:"noreferrer",..._,children:[f&&e.jsx(f,{size:u,className:m}),e.jsx("span",{className:v,children:E}),e.jsx("span",{className:"sr-only",children:" (opens in a new window)"}),e.jsx(T,{size:u,className:c(m,"-mx-[3px]")})]})}const{icon:d,isDisabled:p=!1,className:x,onClick:N,children:j,...A}=s;return e.jsxs("button",{type:"button",role:"link",className:g(b,x),...O({isDisabled:p,onClick:N}),...A,children:[d&&e.jsx(d,{size:u,className:m}),e.jsx("span",{className:v,children:j}),e.jsx(D,{size:u,className:c(m,"-mx-4")})]})}try{n.displayName="Link",n.__docgenInfo={description:"A link at the size of the text it sits in. With `onClick` it opens another\nview in the app (All results, View timeline) and ends in a caret; with\n`href` it opens a real address in a new window, ends in an arrow, and says\nso to a screen reader.",displayName:"Link",filePath:"/tmp/tmp.WpTZJ0UP2a/rove/src/ui/link/Link.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"},{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"The label.",name:"children",required:!1,tags:{},type:{name:"ReactNode"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"An icon before the label.",name:"icon",required:!1,tags:{},type:{name:"IconComponent"}},href:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"AnchorHTMLAttributes"},{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"A real address, opened in a new window.",name:"href",required:!1,tags:{},type:{name:"string"}},isDisabled:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"Drops input and dims the link. It stays focusable, so a tooltip can say why.",name:"isDisabled",required:!1,tags:{},type:{name:"boolean"}},onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"Opens the view. Not called while disabled.",name:"onClick",required:!1,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>"}}},tags:{}}}catch{}const{expect:w,fn:H}=__STORYBOOK_MODULE_TEST__,R={title:"Actions/Link",component:n,args:{children:"All hosts",icon:L("GlobeIcon"),onClick:H()},argTypes:{icon:S},render:s=>e.jsx("span",{className:"type-caption text-tertiary",children:e.jsx(n,{...s})})},a={},h={args:{icon:void 0,children:"View timeline"}},i={args:{icon:void 0,href:"https://github.com/swiftsolve/rove",children:"github.com/swiftsolve/rove"}},t={tags:["!autodocs"],play:async({args:s,canvas:d,userEvent:p})=>{const x=d.getByRole("link",{name:"All hosts"});await p.keyboard("{Tab}"),await w(x).toHaveFocus(),await p.keyboard("{Enter}"),await w(s.onClick).toHaveBeenCalledOnce()}},r={args:{isDisabled:!0}},o={args:{icon:L("HistoryIcon"),children:"History"},render:s=>e.jsx("span",{className:"text-xs",children:e.jsx(n,{...s})})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("span",{className:"inline-flex items-center gap-12 type-caption text-tertiary",children:[e.jsx(n,{icon:k,children:"All hosts"}),e.jsx(n,{children:"View timeline"}),e.jsx(n,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(n,{icon:k,isDisabled:!0,children:"Disabled"})]}),e.jsxs("span",{className:"inline-flex items-center gap-12 text-xs",children:[e.jsx(n,{icon:y,children:"Small text"}),e.jsx(n,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(n,{icon:y,isDisabled:!0,children:"Disabled"})]})]})},q=["WithIcon","WithoutIcon","External","OpeningWithKeyboard","Disabled","SmallText","AllStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"Opens another view, and ends in a caret.",...a.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    children: 'View timeline'
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    href: 'https://github.com/swiftsolve/rove',
    children: 'github.com/swiftsolve/rove'
  }
}`,...i.parameters?.docs?.source},description:{story:"Opens a real address in a new window, ends in an arrow, and says so to a screen reader.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const link = canvas.getByRole('link', {
      name: 'All hosts'
    });
    await userEvent.keyboard('{Tab}');
    await expect(link).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...t.parameters?.docs?.source},description:{story:"An in-app link is a link to a screen reader, and Enter opens its view.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: iconArg('HistoryIcon'),
    children: 'History'
  },
  render: args => <span className="text-xs">
      <Link {...args} />
    </span>
}`,...o.parameters?.docs?.source},description:{story:"It takes the size of the text around it.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      <span className="inline-flex items-center gap-12 type-caption text-tertiary">
        <Link icon={GlobeIcon}>All hosts</Link>
        <Link>View timeline</Link>
        <Link href="https://github.com/swiftsolve/rove">External</Link>
        <Link icon={GlobeIcon} isDisabled>
          Disabled
        </Link>
      </span>
      <span className="inline-flex items-center gap-12 text-xs">
        <Link icon={PlayIcon}>Small text</Link>
        <Link href="https://github.com/swiftsolve/rove">External</Link>
        <Link icon={PlayIcon} isDisabled>
          Disabled
        </Link>
      </span>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every state, at two text sizes.",...l.parameters?.docs?.description}}};export{l as AllStates,r as Disabled,i as External,t as OpeningWithKeyboard,o as SmallText,a as WithIcon,h as WithoutIcon,q as __namedExportsOrder,R as default};
