import{r as u,j as a,G as x}from"./iframe-CrePPxRl.js";import{b as B}from"./cn-CdwUFd5Z.js";import{B as g}from"./Button-uF4SH6VT.js";import{n as T,R as S}from"./Icons-BbuS_MLN.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonSpinner-B-QlOFCe.js";import"./pressable-n_zMMF94.js";const D=B("type-body-default banner",{variants:{variant:{error:"bg-status-negative/(--opacity-tint-sm) ring-1 ring-inset ring-status-negative/(--opacity-tint-md)"}}});function m({variant:e,title:t,description:c,onRetry:d}){const[f,y]=u.useState(null),[v,w]=u.useState(t),[R,h]=u.useState(!1);if(v!==t&&(w(t),y(null)),f===t)return null;const b=async()=>{if(d){h(!0);try{await d()}catch{}finally{h(!1)}}};return a.jsxs("div",{className:D({variant:e}),role:"alert",children:[a.jsx("span",{className:"inline-flex h-[19px] shrink-0 items-center text-status-negative","aria-hidden":!0,children:a.jsx(T,{size:16})}),a.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-8",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("p",{className:"text-primary",children:t}),a.jsx("p",{className:"type-body-small text-secondary",children:c})]}),a.jsxs("div",{className:"flex justify-end gap-4",children:[a.jsx(g,{tone:"negative",onClick:()=>y(t),children:"Dismiss"}),d&&a.jsx(g,{tone:"neutral",icon:S,isLoading:R,loadingLabel:"Retrying…",onClick:()=>{b()},children:"Retry"})]})]})]})}try{m.displayName="Banner",m.__docgenInfo={description:`A message above a page: icon, title, a line under it, then Dismiss and
Retry on the right. Dismiss hides this title until it changes or the banner
unmounts, so a poll that fails the same way again doesn't bring it back; a
caller renders it only while there's an error, which is what resets it.`,displayName:"Banner",filePath:"/tmp/tmp.q7TJa0gwDv/rove/src/ui/banner/Banner.tsx",methods:[],props:{variant:{defaultValue:null,declarations:[{fileName:"rove/src/ui/banner/Banner.tsx",name:"TypeLiteral"}],description:"`error`, a failure: a red wash, and a red Dismiss.",name:"variant",required:!0,tags:{},type:{name:'"error"'}},title:{defaultValue:null,declarations:[{fileName:"rove/src/ui/banner/Banner.tsx",name:"TypeLiteral"}],description:"What happened. Dismiss hides the banner until this changes.",name:"title",required:!0,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"rove/src/ui/banner/Banner.tsx",name:"TypeLiteral"}],description:"One short line under the title: how old what's on screen is, or what happens next.",name:"description",required:!0,tags:{},type:{name:"string"}},onRetry:{defaultValue:null,declarations:[{fileName:"rove/src/ui/banner/Banner.tsx",name:"TypeLiteral"}],description:"Shows Retry, busy until the returned promise settles.",name:"onRetry",required:!1,tags:{},type:{name:"(() => Promise<void>)"}}},tags:{}}}catch{}const{expect:s,fn:p,waitFor:_}=__STORYBOOK_MODULE_TEST__,P={title:"Status and feedback/Banner",component:m,args:{variant:"error",title:"Couldn't load devices",description:"Rove keeps trying in the background."},argTypes:{variant:{control:"inline-radio",options:["error"]},onRetry:{control:!1}},parameters:{docs:{toc:x},guidance:{use:["A failure above a page: a load, scan or action that didn’t work.","A line on what’s on screen now: “Showing the last scan.”"],avoid:["Loaded, with nothing to show: use `EmptyState`.","A choice to make before going on: use `Dialog`."],accessibility:{builtIn:['An alert (`role="alert"`), read as it appears.',"Dismiss and Retry are `Button`s; Retry is busy while it runs.","The icon is hidden from screen readers."],toHandle:["A title that says what failed: “Couldn’t scan for devices”.","Rendering it only while there’s an error."]}}},decorators:[e=>a.jsx("div",{className:"w-[480px]",children:a.jsx(e,{})})]},r={},n={args:{title:"Speed test failed",description:"The server didn't answer.",onRetry:p(()=>new Promise(e=>setTimeout(e,1500)))}},i={args:{title:"Couldn't refresh usage",description:"Showing figures from 5 minutes ago.",onRetry:p(()=>Promise.resolve())}},o={tags:["!autodocs"],play:async({canvas:e,userEvent:t})=>{await s(e.getByRole("alert")).toHaveTextContent("Couldn't load devices"),await t.click(e.getByRole("button",{name:"Dismiss"})),await s(e.queryByRole("alert")).not.toBeInTheDocument()}},l={tags:["!autodocs"],args:{title:"Speed test failed",description:"The server didn't answer.",onRetry:p(()=>new Promise(e=>setTimeout(e,300)))},play:async({args:e,canvas:t,userEvent:c})=>{await c.click(t.getByRole("button",{name:"Retry"})),await s(e.onRetry).toHaveBeenCalledOnce(),await s(t.getByRole("button",{name:"Retrying…"})).toHaveAttribute("aria-busy","true"),await _(()=>s(t.getByRole("button",{name:"Retry"})).not.toHaveAttribute("aria-busy")),await s(t.getByRole("alert")).toBeInTheDocument()}},H=["Polling","WithRetry","Stale","Dismissing","Retrying"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:`A page whose data polls: no Retry, as the failure heals itself. Dismiss
hides it until the title changes; reload the story to bring it back.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Speed test failed',
    description: "The server didn't answer.",
    onRetry: fn(() => new Promise<void>(resolve => setTimeout(resolve, 1500)))
  }
}`,...n.parameters?.docs?.source},description:{story:"Retry stays busy until the retry settles, here after a second and a half.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Couldn't refresh usage",
    description: 'Showing figures from 5 minutes ago.',
    onRetry: fn(() => Promise.resolve())
  }
}`,...i.parameters?.docs?.source},description:{story:"A failure that leaves old data on screen says how old it is.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent("Couldn't load devices");
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dismiss'
    }));
    await expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source},description:{story:"Dismiss hides it.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    title: 'Speed test failed',
    description: "The server didn't answer.",
    onRetry: fn(() => new Promise<void>(resolve => setTimeout(resolve, 300)))
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Retry'
    }));
    await expect(args.onRetry).toHaveBeenCalledOnce();
    await expect(canvas.getByRole('button', {
      name: 'Retrying…'
    })).toHaveAttribute('aria-busy', 'true');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Retry'
    })).not.toHaveAttribute('aria-busy'));
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source},description:{story:"Retry runs the retry and shows busy, then settles once it does.",...l.parameters?.docs?.description}}};export{o as Dismissing,r as Polling,l as Retrying,i as Stale,n as WithRetry,H as __namedExportsOrder,P as default};
