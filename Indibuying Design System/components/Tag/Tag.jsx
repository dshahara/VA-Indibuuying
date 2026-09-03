const ibTagTones={
  green:{background:"var(--brand-green-100)",color:"var(--brand-green-700)"},
  success:{background:"var(--brand-green)",color:"var(--fg-onbrand)"},
  ink:{background:"var(--ink-900)",color:"var(--fg-ondark)"},
  neutral:{background:"var(--ink-100)",color:"var(--fg-2)"},
  warning:{background:"#FDF0D6",color:"#8A6410"},
  danger:{background:"#FBE4E2",color:"#9C2C25"},
  jewellery:{background:"var(--cat-jewellery)",color:"var(--cat-jewellery-ink)"},
  handicrafts:{background:"var(--cat-handicrafts)",color:"var(--cat-handicrafts-ink)"},
  furniture:{background:"var(--cat-furniture)",color:"var(--cat-furniture-ink)"},
  furnishings:{background:"var(--cat-furnishings)",color:"var(--cat-furnishings-ink)"},
  apparel:{background:"var(--cat-apparel)",color:"var(--cat-apparel-ink)"}
};

/** Pill badge for status and category labels. Always `r-pill`, always 13/600. */
export function Tag({tone="green",dot=false,children,style}){
  const t=ibTagTones[tone]||ibTagTones.green;
  return React.createElement("span",{
    style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:"var(--r-pill)",fontFamily:"var(--font-ui)",fontWeight:600,fontSize:13,lineHeight:1.4,whiteSpace:"nowrap",...t,...style}
  },dot?React.createElement("span",{key:"dot",style:{width:6,height:6,borderRadius:"50%",background:"currentColor"}}):null,children);
}
