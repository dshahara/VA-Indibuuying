/** Marketing stat callout. Italic display number over a quiet label. */
export function Stat({value,label,align="left",tone="default",style}){
  const onDark=tone==="dark";
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,textAlign:align,alignItems:align==="center"?"center":"flex-start",...style}},
    React.createElement("span",{key:"v",style:{fontFamily:"var(--font-display)",fontWeight:900,fontStyle:"italic",fontSize:"clamp(2.5rem, 4vw + .5rem, 4rem)",lineHeight:1.05,letterSpacing:"-0.02em",color:onDark?"var(--fg-ondark)":"var(--fg-1)"}},value),
    React.createElement("span",{key:"l",style:{fontFamily:"var(--font-ui)",fontWeight:500,fontSize:14,lineHeight:1.4,color:onDark?"var(--fg-ondark-mute)":"var(--fg-3)"}},label)
  );
}
