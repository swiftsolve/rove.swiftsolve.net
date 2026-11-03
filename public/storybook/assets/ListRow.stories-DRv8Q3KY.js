import{j as e}from"./iframe-BFCGvnoX.js";import{B as y}from"./BarMeter-DcuXVDkE.js";import{C as f,a as g,b}from"./Card-CI9S5u0d.js";import{I as m}from"./IconTile-DLvfEVoI.js";import{H as w,C as T}from"./HdStreamIcon-klcYnB7c.js";import{a as C,V as h,p as R}from"./Icons-BMD2BtZT.js";import{a as I,c as v}from"./cn-DtcT_dLf.js";import{p as N,S as L}from"./pressable-n_zMMF94.js";import"./preload-helper-PPVm8Dsz.js";import"./StretchedLink-BmORPMFZ.js";import"./tint-D2V_N-nu.js";import"./CustomIcon-BCPZbYK5.js";const S=v("group/row flex items-center gap-12 rounded-sm text-left","-mx-8 w-[calc(100%+16px)] px-8 py-(--row-padding-y)","transition-[background] duration-(--duration-fast) ease-in-out","focus-visible:outline-offset-(--focus-inset)","usable:hover:bg-fill-hover",L),D=v("shrink-0 text-tertiary opacity-30","transition-opacity duration-(--duration-fast) ease-in-out","group-usable/row:group-hover/row:opacity-70 group-focus-visible/row:opacity-70");function a({onClick:t,isDisabled:s=!1,className:o,children:i,...p}){return e.jsxs("button",{...p,type:"button",className:I(S,o),...N({isDisabled:s,onClick:t}),children:[e.jsx("span",{className:"flex min-w-0 flex-1 items-center gap-12",children:i}),e.jsx(C,{size:16,className:D})]})}try{a.displayName="ListRow",a.__docgenInfo={description:"A whole-row button in a card's list that opens something, with a trailing chevron.",displayName:"ListRow",filePath:"/tmp/tmp.oK4lEdiSzq/rove/src/ui/list-row/ListRow.tsx",methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"What the row opens.",name:"onClick",required:!0,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement>"}},isDisabled:{defaultValue:{value:"false"},declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:`Inert for now (results that are being replaced): faded like any disabled
control, no hover, no action. It keeps its place in the Tab order.`,name:"isDisabled",required:!1,tags:{},type:{name:"boolean"}},children:{defaultValue:null,declarations:[{fileName:"rove/src/ui/list-row/ListRow.tsx",name:"TypeLiteral"}],description:"The row's content: an icon tile, a title and its description. Anything\nright-aligned (a meter) goes last, after a text column that takes `flex-1`.",name:"children",required:!0,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const{fn:x}=__STORYBOOK_MODULE_TEST__;function d({title:t,description:s}){return e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsx("span",{className:"type-body-default text-primary truncate",children:t}),e.jsx("span",{className:"type-body-small text-tertiary truncate",children:s})]})}function u({value:t,color:s,label:o,isDimmed:i}){return e.jsxs(e.Fragment,{children:[e.jsx(y,{value:t,color:s,isDimmed:i}),e.jsx("span",{className:"sr-only",children:o})]})}const M={title:"Data display/ListRow",component:a,args:{onClick:x(),children:e.jsxs(e.Fragment,{children:[e.jsx(m,{color:"var(--status-positive)",icon:e.jsx(h,{size:17})}),e.jsx(d,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(u,{value:4,color:"var(--status-positive)",label:"Excellent"})]})},argTypes:{children:{control:!1}},render:t=>e.jsxs(f,{className:"w-[400px]",children:[e.jsx(g,{title:"Capabilities"}),e.jsx(b,{children:e.jsx("ul",{role:"list",className:"flex flex-col",children:e.jsx("li",{children:e.jsx(a,{...t})})})})]})},r={},n={args:{children:e.jsx(d,{title:"About Rove",description:"Version, platform, and source."})}},l={args:{isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(m,{color:"neutral",icon:e.jsx(h,{size:17})}),e.jsx(d,{title:"Video calls",description:"Zoom, Teams and FaceTime"}),e.jsx(u,{value:4,color:"var(--status-positive)",label:"Excellent",isDimmed:!0})]})}},_=[{title:"Video calls",description:"Zoom, Teams and FaceTime",Icon:h,value:4,color:"var(--status-positive)",label:"Excellent"},{title:"4K streaming",description:"Netflix and YouTube at 2160p",Icon:w,value:3,color:"var(--status-good)",label:"Good"},{title:"Online gaming",description:"Low, steady latency",Icon:R,value:2,color:"var(--status-warning)",label:"Fair"},{title:"Cloud gaming",description:"GeForce Now and Xbox Cloud",Icon:T,value:1,color:"var(--status-poor)",label:"Poor"}],c={render:()=>e.jsxs(f,{className:"w-[400px]",children:[e.jsx(g,{title:"Capabilities"}),e.jsx(b,{children:e.jsxs("ul",{role:"list",className:"flex flex-col",children:[_.map(({title:t,description:s,Icon:o,value:i,color:p,label:j})=>e.jsx("li",{children:e.jsxs(a,{onClick:x(),children:[e.jsx(m,{color:p,icon:e.jsx(o,{size:17})}),e.jsx(d,{title:t,description:s}),e.jsx(u,{value:i,color:p,label:j})]})},t)),e.jsx("li",{children:e.jsxs(a,{onClick:x(),isDisabled:!0,children:[e.jsx(m,{color:"neutral",icon:e.jsx(w,{size:17})}),e.jsx(d,{title:"HD streaming",description:"Testing…"}),e.jsx(u,{value:3,color:"var(--status-good)",label:"Good",isDimmed:!0})]})})]})})]})},Z=["Default","TextOnly","Disabled","AllStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"A capability and its rating, last so it sits on the right.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RowText title="About Rove" description="Version, platform, and source." />
  }
}`,...n.parameters?.docs?.source},description:{story:"Just the words and the chevron: the About row in Settings.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <>
        <IconTile color="neutral" icon={<VideoCallIcon size={17} />} />
        <RowText title="Video calls" description="Zoom, Teams and FaceTime" />
        <Rating value={4} color="var(--status-positive)" label="Excellent" isDimmed />
      </>
  }
}`,...l.parameters?.docs?.source},description:{story:"Inert while a test replaces its rating: the whole row faded, a muted tile and dimmed bars, no hover.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"A list of rows at each rating, then one disabled.",...c.parameters?.docs?.description}}};export{c as AllStates,r as Default,l as Disabled,n as TextOnly,Z as __namedExportsOrder,M as default};
