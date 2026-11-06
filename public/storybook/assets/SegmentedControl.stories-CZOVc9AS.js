import{G as h,j as s,r as u}from"./iframe-B3mq6C2n.js";import{b as g,c as w,d as y}from"./Icons-CDi5y8j0.js";import{S as d}from"./SegmentedControl-DPxX3E5h.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CICwuVeI.js";import"./useControlled-BTVHpjio.js";import"./useBaseUiId-B-_0JP3Z.js";import"./composite-BGvLp3Jm.js";import"./CompositeItem-BQDpcxl1.js";import"./useButton-Ap0MZLCi.js";import"./DirectionContext-DViigzYw.js";import"./shadowDom-DRzaaEiw.js";import"./useRegisterFieldControl-7uVXyRQJ.js";import"./FieldItemContext-CfDiurKD.js";import"./useTimeout-CR5-NWsq.js";import"./useValueChanged-D6fnVmjI.js";import"./visuallyHidden-BsIGJQ4u.js";import"./stateAttributesMapping-DqawBeMT.js";import"./useAriaLabelledBy-BEX-Y50p.js";const{expect:o,fn:v}=__STORYBOOK_MODULE_TEST__,b=[{value:"dark",label:"Dark",icon:s.jsx(g,{size:15,className:"shrink-0"})},{value:"light",label:"Light",icon:s.jsx(w,{size:15,className:"shrink-0"})},{value:"system",label:"System",icon:s.jsx(y,{size:15,className:"shrink-0"})}],T=[{value:"hour",label:"Hour"},{value:"day",label:"Day"},{value:"week",label:"Week"}],P={title:"Inputs/SegmentedControl",component:d,args:{options:b,value:"dark",onChange:v(),label:"Theme"},argTypes:{options:{control:!1},value:{control:!1}},parameters:{docs:{subtitle:"A row of a few options side by side, one chosen at a time.",toc:h},guidance:{whenToUse:["Picking one of a few exclusive options, like Settings’ Theme.","A choice whose options all fit in view, each a word or two.","A choice that applies at once, with no save."],whenNotToUse:["Turning one setting on or off: use `Toggle`.","Running an action: use `Button`."],accessibility:{builtIn:["A radio group, each segment a radio on a native `<button>`.","One Tab stop. The arrow keys move and choose.","Each segment is named by its label. The thumb is hidden."],toHandle:["A name for the group: `label`, or `aria-labelledby` at a title.","`aria-describedby` pointing at the row’s description, when it has one."]}}},render:e=>s.jsx(k,{...e})},a={},p={args:{options:T,value:"day",label:"Time range"}},t={args:{options:[{value:"down",label:"Download"},{value:"up",label:"Upload"}],value:"down",label:"Direction"}},n={tags:["!autodocs"],play:async({args:e,canvas:i,userEvent:r})=>{const c=i.getByRole("radio",{name:"Light"});await r.click(c),await o(c).toBeChecked(),await o(e.onChange).toHaveBeenLastCalledWith("light"),await r.keyboard("{ArrowRight}");const l=i.getByRole("radio",{name:"System"});await o(l).toHaveFocus(),await o(l).toBeChecked(),await o(e.onChange).toHaveBeenLastCalledWith("system")}};function k({value:e,onChange:i,...r}){const[c,l]=u.useState(e);return s.jsx(d,{...r,value:c,onChange:m=>{l(m),i(m)}})}const z=["WithIcons","TextOnly","TwoOptions","Choosing"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"The theme picker in Settings.",...a.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
