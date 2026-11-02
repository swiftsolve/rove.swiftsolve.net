import{r as D,j as e}from"./iframe-DdIKkGy0.js";import{l as E,a as T,G as f,P as g}from"./Icons-qI5vSdln.js";import{i as O,a as v}from"./icon-options-EqWWACFL.js";import{c as l}from"./index-M33yfidE.js";import{c as k}from"./cn-D3eiRh-a.js";import{p as C,S as H}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";const y=l("group/link inline-flex items-center gap-[5px] rounded-full px-8 py-2 ml-[-9.5px] mr-[-9px]","text-[length:inherit] font-medium whitespace-nowrap text-secondary no-underline","transition-[color] duration-(--duration-fast) ease-in-out","usable:hover:text-accent-text focus-visible:text-accent-text focus-visible:outline-none",H),c=l("opacity-72 transition-opacity duration-(--duration-fast) ease-in-out","group-usable/link:group-hover/link:opacity-100 group-focus-visible/link:opacity-100"),b=l("group-usable/link:group-hover/link:underline group-usable/link:group-hover/link:underline-offset-2","group-focus-visible/link:underline group-focus-visible/link:underline-offset-2"),d=13,s=D.forwardRef(function(m,u){if(m.href!==void 0){const{icon:x,className:A,children:_,...S}=m;return e.jsxs("a",{ref:u,className:k(y,A),target:"_blank",rel:"noreferrer",...S,children:[x&&e.jsx(x,{size:d,className:c}),e.jsx("span",{className:b,children:_}),e.jsx("span",{className:"sr-only",children:" (opens in a new window)"}),e.jsx(E,{size:d,className:l(c,"-mx-[3px]")})]})}const{icon:h,isDisabled:L,className:w,onClick:N,children:j,...I}=m;return e.jsxs("button",{ref:u,type:"button",className:k(y,w),...C({isDisabled:L,onClick:N}),...I,children:[h&&e.jsx(h,{size:d,className:c}),e.jsx("span",{className:b,children:j}),e.jsx(T,{size:d,className:l(c,"-mx-4")})]})});try{s.displayName="Link",s.__docgenInfo={description:"A link at the size of the text it sits in. With `onClick` it opens another\nview in the app (All results, View timeline) and ends in a caret; with\n`href` it opens a real address in a new window, ends in an arrow, and says\nso to a screen reader.",displayName:"Link",filePath:"/tmp/tmp.PkJIRjHKAU/rove/src/ui/link/Link.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"},{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"The label.",name:"children",required:!1,tags:{},type:{name:"ReactNode"}},icon:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"An icon before the label.",name:"icon",required:!1,tags:{},type:{name:"IconComponent"}},href:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"AnchorHTMLAttributes"},{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"A real address, opened in a new window.",name:"href",required:!1,tags:{},type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"}],description:"Drops input and dims the link. It stays focusable, so a tooltip can say why.",name:"isDisabled",required:!1,tags:{default:"false"},type:{name:"boolean"}},onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/Link.tsx",name:"TypeLiteral"},{fileName:"rove/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"Opens the view. Not called while disabled.",name:"onClick",required:!1,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>"}}},tags:{}}}catch{}const{fn:V}=__STORYBOOK_MODULE_TEST__,B={title:"Actions/Link",component:s,args:{children:"All hosts",icon:v("GlobeIcon"),onClick:V()},argTypes:{icon:O},render:n=>e.jsx("span",{className:"type-caption text-tertiary",children:e.jsx(s,{...n})})},i={},p={args:{icon:void 0,children:"View timeline"}},a={args:{icon:void 0,href:"https://github.com/swiftsolve/rove",children:"github.com/swiftsolve/rove"}},t={args:{isDisabled:!0}},r={args:{icon:v("HistoryIcon"),children:"History"},render:n=>e.jsx("span",{className:"text-xs",children:e.jsx(s,{...n})})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("span",{className:"inline-flex items-center gap-12 type-caption text-tertiary",children:[e.jsx(s,{icon:f,children:"All hosts"}),e.jsx(s,{children:"View timeline"}),e.jsx(s,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(s,{icon:f,isDisabled:!0,children:"Disabled"})]}),e.jsxs("span",{className:"inline-flex items-center gap-12 text-xs",children:[e.jsx(s,{icon:g,children:"Small text"}),e.jsx(s,{href:"https://github.com/swiftsolve/rove",children:"External"}),e.jsx(s,{icon:g,isDisabled:!0,children:"Disabled"})]})]})},K=["WithIcon","WithoutIcon","External","Disabled","SmallText","AllStates"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"Opens another view, and ends in a caret.",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Every state, at two text sizes.",...o.parameters?.docs?.description}}};export{o as AllStates,t as Disabled,a as External,r as SmallText,i as WithIcon,p as WithoutIcon,K as __namedExportsOrder,B as default};
