import{G as p,j as d}from"./iframe-DVHCHYtC.js";import{B as u}from"./Banner-D6__c3nk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M33yfidE.js";import"./Button-BApRK_u4.js";import"./ButtonSpinner-DsI3AcIE.js";import"./cn-BikPFUNl.js";import"./pressable-n_zMMF94.js";import"./Icons-y8VxhmXe.js";const{expect:a,fn:c,waitFor:m}=__STORYBOOK_MODULE_TEST__,T={title:"Status and feedback/Banner",component:u,args:{variant:"error",title:"Couldn't load devices",description:"Rove keeps trying in the background."},argTypes:{variant:{control:"inline-radio",options:["error"]},onRetry:{control:!1}},parameters:{docs:{subtitle:"A message across the top of a page, with Dismiss and Retry.",toc:p},guidance:{whenToUse:["A failure above a page: a load, scan or action that didn’t work.","A line on what’s on screen now: “Showing the last scan.”"],whenNotToUse:["A page loaded with nothing to show: use `EmptyState`.","A choice to make before going on: use `Dialog`."],accessibility:{builtIn:['An alert (`role="alert"`), read as it appears.',"Dismiss and Retry are `Button`s; Retry is busy while it runs.","The icon is hidden from screen readers."],toHandle:["A title that says what failed: “Couldn’t scan for devices”.","Rendering it only while there’s an error."]}}},decorators:[e=>d.jsx("div",{className:"w-[480px]",children:d.jsx(e,{})})]},s={},r={args:{title:"Speed test failed",description:"The server didn't answer.",onRetry:c(()=>new Promise(e=>setTimeout(e,1500)))}},o={args:{title:"Couldn't refresh usage",description:"Showing figures from 5 minutes ago.",onRetry:c(()=>Promise.resolve())}},n={tags:["!autodocs"],play:async({canvas:e,userEvent:t})=>{await a(e.getByRole("alert")).toHaveTextContent("Couldn't load devices"),await t.click(e.getByRole("button",{name:"Dismiss"})),await a(e.queryByRole("alert")).not.toBeInTheDocument()}},i={tags:["!autodocs"],args:{title:"Speed test failed",description:"The server didn't answer.",onRetry:c(()=>new Promise(e=>setTimeout(e,300)))},play:async({args:e,canvas:t,userEvent:l})=>{await l.click(t.getByRole("button",{name:"Retry"})),await a(e.onRetry).toHaveBeenCalledOnce(),await a(t.getByRole("button",{name:"Retrying…"})).toHaveAttribute("aria-busy","true"),await m(()=>a(t.getByRole("button",{name:"Retry"})).not.toHaveAttribute("aria-busy")),await a(t.getByRole("alert")).toBeInTheDocument()}},S=["Polling","WithRetry","Stale","Dismissing","Retrying"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:`A page whose data polls: no Retry, as the failure heals itself. Dismiss
hides it until the title changes; reload the story to bring it back.`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Speed test failed',
    description: "The server didn't answer.",
    onRetry: fn(() => new Promise<void>(resolve => setTimeout(resolve, 1500)))
  }
}`,...r.parameters?.docs?.source},description:{story:"Retry stays busy until the retry settles, here after a second and a half.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Couldn't refresh usage",
    description: 'Showing figures from 5 minutes ago.',
    onRetry: fn(() => Promise.resolve())
  }
}`,...o.parameters?.docs?.source},description:{story:"A failure that leaves old data on screen says how old it is.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Dismiss hides it.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Retry runs the retry and shows busy, then settles once it does.",...i.parameters?.docs?.description}}};export{n as Dismissing,s as Polling,i as Retrying,o as Stale,r as WithRetry,S as __namedExportsOrder,T as default};
