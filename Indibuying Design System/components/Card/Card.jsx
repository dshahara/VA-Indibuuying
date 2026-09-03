const ibCardTints={
  none:{background:"var(--surface)",color:"var(--fg-1)",border:"var(--hairline-soft)"},
  jewellery:{background:"var(--cat-jewellery)",color:"var(--cat-jewellery-ink)",border:"transparent"},
  handicrafts:{background:"var(--cat-handicrafts)",color:"var(--cat-handicrafts-ink)",border:"transparent"},
  furniture:{background:"var(--cat-furniture)",color:"var(--cat-furniture-ink)",border:"transparent"},
  furnishings:{background:"var(--cat-furnishings)",color:"var(--cat-furnishings-ink)",border:"transparent"},
  apparel:{background:"var(--cat-apparel)",color:"var(--cat-apparel-ink)",border:"transparent"},
  dark:{background:"var(--ink-900)",color:"var(--fg-ondark)",border:"transparent"}
};

/** Flat surface card. `standard` is a 16px white card; `feature` is the 28px pastel panel. */
export function Card({title,tint="none",shape="standard",interactive=false,action,children,style}){
  const [hover,setHover]=React.useState(false);
  const t=ibCardTints[tint]||ibCardTints.none;
  const feature=shape==="feature";
  const muted=tint==="dark"?"var(--fg-ondark-mute)":tint==="none"?"var(--fg-2)":"currentColor";
  return React.createElement("div",{
    onMouseEnter:()=>setHover(true),
    onMouseLeave:()=>setHover(false),
    style:{position:"relative",overflow:"hidden",background:t.background,color:t.color,borderWidth:1,borderStyle:"solid",borderColor:interactive&&hover&&tint==="none"?"var(--border-strong)":t.border,borderRadius:feature?"var(--r-feature)":"var(--r-card)",padding:feature?32:24,boxShadow:interactive&&hover?"var(--shadow-2)":"none",transform:interactive&&hover?"translateY(-2px)":"none",transition:"box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out)",...style}
  },
    title?React.createElement("h3",{key:"title",style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:feature?22:18,lineHeight:1.3,letterSpacing:feature?"-0.01em":0,color:"inherit",marginBottom:8}},title):null,
    React.createElement("div",{key:"body",style:{fontFamily:"var(--font-sans)",fontSize:15,lineHeight:1.5,color:muted,opacity:tint==="none"||tint==="dark"?1:.82}},children),
    action?React.createElement("div",{key:"action",style:{marginTop:20}},action):null
  );
}
