import{r as o,j as l}from"./iframe-BCcfZn2f.js";import{c}from"./cn-D3eiRh-a.js";const e=o.forwardRef(function({label:n,type:a="button",className:s,...i},r){return l.jsx("button",{ref:r,type:a,role:"link",className:c("absolute inset-0 z-1 rounded-[inherit] focus-visible:outline-offset-(--focus-inset)",s),"aria-label":n,"data-stretched-link":"",...i})});try{e.displayName="StretchedLink",e.__docgenInfo={description:`A transparent link stretched over its positioned container (a row; a Card
draws its own with \`onOpen\`),
so a click anywhere opens the view the container summarises. It's a link
to a screen reader: it moves to another view rather than acting. A control
in the container raises itself above it and stays a sibling, never nested.
Its focus ring follows the container's corners, just inside the edge.
\`data-stretched-link\` lets the container style itself while it has focus;
\`className\` can round the ring where the container's own corners don't (a
list's first and last rows).`,displayName:"StretchedLink",filePath:"/tmp/tmp.VySl2IN49k/rove/src/ui/link/StretchedLink.tsx",methods:[],props:{label:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/StretchedLink.tsx",name:"TypeLiteral"}],description:"Names it: it has no text of its own, since the container's content shows\nthrough. Leave it out only to name it by a heading (`aria-labelledby`).",name:"label",required:!1,tags:{},type:{name:"string"}},onClick:{defaultValue:null,declarations:[{fileName:"rove/src/ui/link/StretchedLink.tsx",name:"TypeLiteral"}],description:"Opens the view the container summarises.",name:"onClick",required:!1,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement>"}}},tags:{}}}catch{}export{e as S};
