import{j as e}from"./iframe--Gu_3FXg.js";import{B as y}from"./BarMeter-Bg1-hE8V.js";import{C as f,a as g,b}from"./Card-BMYtEdEz.js";import{I as d}from"./IconTile-CytMCSG0.js";import{H as w,C as T}from"./HdStreamIcon-DlmgpRSx.js";import{a as C,V as x,p as R}from"./Icons-BoO_xw7_.js";import{c as v}from"./index-M33yfidE.js";import{p as I,S as N}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-RggvoAkt.js";import"./StretchedLink-B4qDvWxv.js";const L=v("group/row flex items-center gap-12 rounded-sm text-left","-mx-8 w-[calc(100%+16px)] px-8 py-(--row-padding-y)","transition-[background] duration-(--duration-fast) ease-in-out","focus-visible:outline-offset-(--focus-inset)","usable:hover:bg-fill-hover",N),D=v("shrink-0 text-tertiary opacity-30","transition-opacity duration-(--duration-fast) ease-in-out","group-usable/row:group-hover/row:opacity-70 group-focus-visible/row:opacity-70");function a({onClick:t,isDisabled:s=!1,children:o}){return e.jsxs("button",{type:"button",className:L,...I({isDisabled:s,onClick:t}),children:[e.jsx("span",{className:"flex min-w-0 flex-1 items-center gap-12",children:o}),e.jsx(C,{size:16,className:D})]})}try{a.displayName="ListRow",a.__docgenInfo={description:"A whole-row button in a card's list that opens something, with a trailing chevron.",displayName:"ListRow",filePath:"/tmp/tmp.TfngTlYDoV/rove/src/ui/list-row/ListRow.tsx",methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"What the row opens.",name:"onClick",required:!0,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement>"}},isDisabled:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:`Inert for now (results that are being replaced): faded like any disabled
control, no hover, no action. It keeps its place in the Tab order.`,name:"isDisabled",required:!1,tags:{},type:{name:"boolean"}},children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"The row's content: an icon tile, a title and its description. Anything\nright-aligned (a meter) goes last, after a text column that takes `flex-1`.",name:"children",required:!0,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const{fn:u}=__STORYBOOK_MODULE_TEST__;function c({title:t,description:s}){return e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsx("span",{className:"type-body-default text-primary truncate",children:t}),e.jsx("span",{className:"type-body-small text-tertiary truncate",children:s})]})}function p({value:t,color:s,label:o,isDimmed:m}){return e.jsxs(e.Fragment,{children:[e.jsx(y,{value:t,color:s,isDimmed:m}),e.jsx("span",{className:"sr-only",children:o})]})}const P={title:"Data display/ListRow",component:a,args:{onClick:u(),children:e.jsxs(e.Fragment,{children:[e.jsx(d,{color:"var(--status-positive)",icon:e.jsx(x,{size:17})}),e.jsx(c,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(p,{value:4,color:"var(--status-positive)",label:"Excellent"})]})},argTypes:{children:{control:!1}},render:t=>e.jsxs(f,{className:"w-[400px]",children:[e.jsx(g,{title:"Capabilities"}),e.jsx(b,{children:e.jsx("ul",{role:"list",className:"flex flex-col",children:e.jsx("li",{children:e.jsx(a,{...t})})})})]})},i={},r={args:{children:e.jsx(c,{title:"About Rove",description:"Version, platform, and source."})}},n={args:{isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(d,{color:"neutral",icon:e.jsx(x,{size:17})}),e.jsx(c,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(p,{value:4,color:"var(--status-positive)",label:"Excellent",isDimmed:!0})]})}},S=[{title:"Video calls",description:"Zoom, Teams and FaceTime",Icon:x,value:4,color:"var(--status-positive)",label:"Excellent"},{title:"4K streaming",description:"Netflix and YouTube at 2160p",Icon:w,value:3,color:"var(--status-good)",label:"Good"},{title:"Online gaming",description:"Low, steady latency",Icon:R,value:2,color:"var(--status-warning)",label:"Fair"},{title:"Cloud gaming",description:"GeForce Now and Xbox Cloud",Icon:T,value:1,color:"var(--status-poor)",label:"Poor"}],l={render:()=>e.jsxs(f,{className:"w-[400px]",children:[e.jsx(g,{title:"Capabilities"}),e.jsx(b,{children:e.jsxs("ul",{role:"list",className:"flex flex-col",children:[S.map(({title:t,description:s,Icon:o,value:m,color:h,label:j})=>e.jsx("li",{children:e.jsxs(a,{onClick:u(),children:[e.jsx(d,{color:h,icon:e.jsx(o,{size:17})}),e.jsx(c,{title:t,description:s}),e.jsx(p,{value:m,color:h,label:j})]})},t)),e.jsx("li",{children:e.jsxs(a,{onClick:u(),isDisabled:!0,children:[e.jsx(d,{color:"neutral",icon:e.jsx(w,{size:17})}),e.jsx(c,{title:"HD streaming",description:"Testing…"}),e.jsx(p,{value:3,color:"var(--status-good)",label:"Good",isDimmed:!0})]})})]})})]})},M=["Default","TextOnly","Disabled","AllStates"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"A capability and its rating, last so it sits on the right.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RowText title="About Rove" description="Version, platform, and source." />
  }
}`,...r.parameters?.docs?.source},description:{story:"Just the words and the chevron: the About row in Settings.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <>
        <IconTile color="neutral" icon={<VideoCallIcon size={17} />} />
        <RowText title="Video calls" description="Zoom, Teams and FaceTime" />
        <Rating value={4} color="var(--status-positive)" label="Excellent" isDimmed />
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:"Inert while a test replaces its rating: the whole row faded, a muted tile and dimmed bars, no hover.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
      <CardHeader title="Capabilities" />
      <CardBody>
        <ul role="list" className="flex flex-col">
          {CAPABILITIES.map(({
          title,
          description,
          Icon,
          value,
          color,
          label
        }) => <li key={title}>
              <ListRow onClick={fn()}>
                <IconTile color={color} icon={<Icon size={17} />} />
                <RowText title={title} description={description} />
                <Rating value={value} color={color} label={label} />
              </ListRow>
            </li>)}
          <li>
            <ListRow onClick={fn()} isDisabled>
              <IconTile color="neutral" icon={<HdStreamIcon size={17} />} />
              <RowText title="HD streaming" description="Testing…" />
              <Rating value={3} color="var(--status-good)" label="Good" isDimmed />
            </ListRow>
          </li>
        </ul>
      </CardBody>
    </Card>
}`,...l.parameters?.docs?.source},description:{story:"A list of rows at each rating, then one disabled.",...l.parameters?.docs?.description}}};export{l as AllStates,i as Default,n as Disabled,r as TextOnly,M as __namedExportsOrder,P as default};
