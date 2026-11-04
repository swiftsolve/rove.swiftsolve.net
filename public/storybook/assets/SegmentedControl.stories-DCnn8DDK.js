import{G as h,j as s,r as u}from"./iframe-BUWJTZlM.js";import{b as g,c as w,d as y}from"./Icons-_vZDw2B3.js";import{S as d}from"./SegmentedControl-PrVGQ6-a.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-9A1wEaLP.js";import"./useControlled-CItmWjms.js";import"./useBaseUiId-B14mYSps.js";import"./composite-U0_P3G06.js";import"./CompositeItem-DPiu7FUf.js";import"./useButton-Djkf6X_j.js";import"./DirectionContext-CvYyr-S-.js";import"./shadowDom-DNNkcdNZ.js";import"./useRegisterFieldControl-dKXOGSWZ.js";import"./FieldItemContext-i9TLcVpr.js";import"./useTimeout-C6ZGP5nd.js";import"./useValueChanged-CO4IUOpE.js";import"./visuallyHidden-BsIGJQ4u.js";import"./stateAttributesMapping-DqawBeMT.js";import"./useAriaLabelledBy-DcGWO_I1.js";const{expect:o,fn:v}=__STORYBOOK_MODULE_TEST__,b=[{value:"dark",label:"Dark",icon:s.jsx(g,{size:15,className:"shrink-0"})},{value:"light",label:"Light",icon:s.jsx(w,{size:15,className:"shrink-0"})},{value:"system",label:"System",icon:s.jsx(y,{size:15,className:"shrink-0"})}],T=[{value:"hour",label:"Hour"},{value:"day",label:"Day"},{value:"week",label:"Week"}],P={title:"Inputs/SegmentedControl",component:d,args:{options:b,value:"dark",onChange:v(),label:"Theme"},argTypes:{options:{control:!1},value:{control:!1}},parameters:{docs:{subtitle:"A row of a few options side by side, one chosen at a time.",toc:h},guidance:{whenToUse:["Picking one of a few exclusive options, like Settings’ Theme.","A choice whose options all fit in view, each a word or two.","A choice that applies at once, with no save."],whenNotToUse:["Turning one setting on or off: use `Toggle`.","Running an action: use `Button`."],accessibility:{builtIn:["A radio group, each segment a radio on a native `<button>`.","One Tab stop. The arrow keys move and choose.","Each segment is named by its label. The thumb is hidden."],toHandle:["A name for the group: `label`, or `aria-labelledby` at a title.","`aria-describedby` pointing at the row’s description, when it has one."]}}},render:e=>s.jsx(k,{...e})},a={},p={args:{options:T,value:"day",label:"Time range"}},t={args:{options:[{value:"down",label:"Download"},{value:"up",label:"Upload"}],value:"down",label:"Direction"}},n={tags:["!autodocs"],play:async({args:e,canvas:i,userEvent:r})=>{const c=i.getByRole("radio",{name:"Light"});await r.click(c),await o(c).toBeChecked(),await o(e.onChange).toHaveBeenLastCalledWith("light"),await r.keyboard("{ArrowRight}");const l=i.getByRole("radio",{name:"System"});await o(l).toHaveFocus(),await o(l).toBeChecked(),await o(e.onChange).toHaveBeenLastCalledWith("system")}};function k({value:e,onChange:i,...r}){const[c,l]=u.useState(e);return s.jsx(d,{...r,value:c,onChange:m=>{l(m),i(m)}})}const z=["WithIcons","TextOnly","TwoOptions","Choosing"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"The theme picker in Settings.",...a.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: RANGE_OPTIONS,
    value: 'day',
    label: 'Time range'
  }
}`,...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'down',
      label: 'Download'
    }, {
      value: 'up',
      label: 'Upload'
    }],
    value: 'down',
    label: 'Direction'
  }
}`,...t.parameters?.docs?.source},description:{story:"Two options.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const light = canvas.getByRole('radio', {
      name: 'Light'
    });
    await userEvent.click(light);
    await expect(light).toBeChecked();
    await expect(args.onChange).toHaveBeenLastCalledWith('light');
    await userEvent.keyboard('{ArrowRight}');
    const system = canvas.getByRole('radio', {
      name: 'System'
    });
    await expect(system).toHaveFocus();
    await expect(system).toBeChecked();
    await expect(args.onChange).toHaveBeenLastCalledWith('system');
  }
}`,...n.parameters?.docs?.source},description:{story:"A click picks a segment; the arrow keys move to the next one and pick it.",...n.parameters?.docs?.description}}};export{n as Choosing,p as TextOnly,t as TwoOptions,a as WithIcons,z as __namedExportsOrder,P as default};
