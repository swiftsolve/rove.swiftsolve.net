import{j as e}from"./iframe-BFCGvnoX.js";import{i as A,a as y}from"./icon-options-CYtFWFnn.js";import{l as S,a as D,G as h,P as x}from"./Icons-BMD2BtZT.js";import{c as l,a as f}from"./cn-DtcT_dLf.js";import{p as E,S as T}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";const g=l("group/link inline-flex items-center gap-[5px] rounded-full px-8 py-2 ml-[-9.5px] mr-[-9px]","text-[length:inherit] font-medium whitespace-nowrap text-secondary no-underline","transition-[color] duration-(--duration-fast) ease-in-out","usable:hover:text-accent-text focus-visible:text-accent-text focus-visible:outline-none",T),c=l("opacity-72 transition-opacity duration-(--duration-fast) ease-in-out","group-usable/link:group-hover/link:opacity-100 group-focus-visible/link:opacity-100"),k=l("group-usable/link:group-hover/link:underline group-usable/link:group-hover/link:underline-offset-2","group-focus-visible/link:underline group-focus-visible/link:underline-offset-2"),d=13;function s(n){if(n.href!==void 0){const{icon:u,className:j,children:I,..._}=n;return e.jsxs("a",{className:f(g,j),target:"_blank",rel:"noreferrer",..._,children:[u&&e.jsx(u,{size:d,className:c}),e.jsx("span",{className:k,children:I}),e.jsx("span",{className:"sr-only",children:" (opens in a new window)"}),e.jsx(S,{size:d,className:l(c,"-mx-[3px]")})]})}const{icon:m,isDisabled:b=!1,className:v,onClick:L,children:N,...w}=n;return e.jsxs("button",{type:"button",role:"link",className:f(g,v),...E({isDisabled:b,onClick:L}),...w,children:[m&&e.jsx(m,{size:d,className:c}),e.jsx("span",{className:k,children:N}),e.jsx(D,{size:d,className:l(c,"-mx-4")})]})}try{s.displayName="Link",s.__docgenInfo={description:"A link at the size of the text it sits in. With `onClick` it opens another\nview in the app (All results, View timeline) and ends in a caret; with\n`href` it opens a real address in a new window, ends in an arrow, and says\nso to a screen reader.",displayName:"Link",filePath:"/tmp/tmp.oK4lEdiSzq/rove/src/ui/link/Link.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"},{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"The label.",name:"children",required:!1,tags:{},type:{name:"ReactNode"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"An icon before the label.",name:"icon",required:!1,tags:{},type:{name:"IconComponent"}},href:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"AnchorHTMLAttributes"},{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"A real address, opened in a new window.",name:"href",required:!1,tags:{},type:{name:"string"}},isDisabled:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"Drops input and dims the link. It stays focusable, so a tooltip can say why.",name:"isDisabled",required:!1,tags:{},type:{name:"boolean"}},onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"Opens the view. Not called while disabled.",name:"onClick",required:!1,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>"}}},tags:{}}}catch{}const{fn:O}=__STORYBOOK_MODULE_TEST__,q={title:"Actions/Link",component:s,args:{children:"All hosts",icon:y("GlobeIcon"),onClick:O()},argTypes:{icon:A},render:n=>e.jsx("span",{className:"type-caption text-tertiary",children:e.jsx(s,{...n})})},i={},p={args:{icon:void 0,children:"View timeline"}},a={args:{icon:void 0,href:"https://github.com/swiftsolve/rove",children:"github.com/swiftsolve/rove"}},t={args:{isDisabled:!0}},r={args:{icon:y("HistoryIcon"),children:"History"},render:n=>e.jsx("span",{className:"text-xs",children:e.jsx(s,{...n})})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("span",{className:"inline-flex items-center gap-12 type-caption text-tertiary",children:[e.jsx(s,{icon:h,children:"All hosts"}),e.jsx(s,{children:"View timeline"}),e.jsx(s,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(s,{icon:h,isDisabled:!0,children:"Disabled"})]}),e.jsxs("span",{className:"inline-flex items-center gap-12 text-xs",children:[e.jsx(s,{icon:x,children:"Small text"}),e.jsx(s,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(s,{icon:x,isDisabled:!0,children:"Disabled"})]})]})},G=["WithIcon","WithoutIcon","External","Disabled","SmallText","AllStates"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"Opens another view, and ends in a caret.",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    children: 'View timeline'
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    href: 'https://github.com/swiftsolve/rove',
    children: 'github.com/swiftsolve/rove'
  }
}`,...a.parameters?.docs?.source},description:{story:"Opens a real address in a new window, ends in an arrow, and says so to a screen reader.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Still focusable, so a tooltip can say why.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: iconArg('HistoryIcon'),
    children: 'History'
  },
  render: args => <span className="text-xs">
      <Link {...args} />
    </span>
}`,...r.parameters?.docs?.source},description:{story:"It takes the size of the text around it.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Every state, at two text sizes.",...o.parameters?.docs?.description}}};export{o as AllStates,t as Disabled,a as External,r as SmallText,i as WithIcon,p as WithoutIcon,G as __namedExportsOrder,q as default};
