const ibButtonSizes={sm:{fontSize:13,padding:"8px 16px",minHeight:36},md:{fontSize:14,padding:"12px 24px",minHeight:44},lg:{fontSize:16,padding:"15px 30px",minHeight:52}};
const ibButtonVariants={
  primary:{rest:{background:"var(--action)",color:"var(--on-action)",borderColor:"transparent"},press:{background:"var(--action-pressed)"},ring:"var(--ring-action)"},
  green:{rest:{background:"var(--brand-green)",color:"var(--fg-onbrand)",borderColor:"transparent"},press:{background:"var(--brand-green-700)"},ring:"var(--ring-brand)"},
  secondary:{rest:{background:"transparent",color:"var(--fg-1)",borderColor:"var(--border-strong)"},press:{background:"var(--ink-50)"},ring:"var(--ring-action)"},
  onDark:{rest:{background:"var(--paper)",color:"var(--action)",borderColor:"transparent"},press:{background:"var(--ink-100)"},ring:"0 0 0 3px rgba(255,255,255,.35)"},
  ghost:{rest:{background:"transparent",color:"var(--fg-1)",borderColor:"transparent"},press:{background:"var(--ink-100)"},ring:"var(--ring-action)"},
  link:{rest:{background:"transparent",color:"var(--brand-green-700)",borderColor:"transparent",textDecoration:"underline",textUnderlineOffset:4},press:{color:"var(--brand-green-700)"},ring:"var(--ring-brand)"}
};

/** Pill action. Ink is the default; green is reserved for the single highest-intent CTA on a page. */
export function Button({variant="primary",size="md",disabled=false,type="button",onClick,children,style}){
  const [press,setPress]=React.useState(false);
  const [focus,setFocus]=React.useState(false);
  const v=ibButtonVariants[variant]||ibButtonVariants.primary;
  const s=ibButtonSizes[size]||ibButtonSizes.md;
  const isFlat=variant==="ghost"||variant==="link";
  return React.createElement("button",{
    type,disabled,onClick,
    onMouseDown:()=>setPress(true),
    onMouseUp:()=>setPress(false),
    onMouseLeave:()=>setPress(false),
    onFocus:e=>{if(e.target.matches(":focus-visible"))setFocus(true);},
    onBlur:()=>setFocus(false),
    style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:"var(--font-sans)",fontWeight:600,lineHeight:1.3,borderRadius:variant==="link"?0:"var(--r-pill)",borderWidth:1,borderStyle:"solid",whiteSpace:"nowrap",transition:"background var(--dur-med) var(--ease-out), color var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out)",cursor:disabled?"not-allowed":"pointer",fontSize:s.fontSize,padding:variant==="link"?0:s.padding,minHeight:variant==="link"?"auto":s.minHeight,boxShadow:focus?v.ring:"none",...v.rest,...(disabled?{background:isFlat?"transparent":"var(--action-disabled)",color:"var(--fg-mute)",borderColor:"transparent"}:null),...(!disabled&&press?v.press:null),...style}
  },children);
}
