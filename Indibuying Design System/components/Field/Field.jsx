/** Labelled control at 44px. Focus is a 2px border, not a glow. */
export function Field({label,help,error,as="input",type="text",placeholder,value,defaultValue,onChange,options=[],rows=3,name,disabled=false,style}){
  const [focus,setFocus]=React.useState(false);
  const active=error?"var(--danger)":focus?"var(--action)":"var(--border-strong)";
  const control={fontFamily:"var(--font-sans)",fontWeight:500,fontSize:16,padding:as==="textarea"?"12px 16px":"0 16px",height:as==="textarea"?"auto":"var(--control-h)",minHeight:as==="textarea"?88:"var(--control-h)",borderRadius:"var(--r-md)",borderWidth:focus||error?2:1,borderStyle:"solid",borderColor:active,background:"var(--paper)",color:"var(--fg-1)",width:"100%",outline:"none",opacity:disabled?0.45:1,transition:"border-color var(--dur-fast), border-width var(--dur-fast)"};
  const shared={name,placeholder,value,defaultValue,onChange,disabled,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:control};
  let field;
  if(as==="textarea")field=React.createElement("textarea",{...shared,rows});
  else if(as==="select")field=React.createElement("select",shared,options.map(o=>React.createElement("option",{key:o,value:o},o)));
  else field=React.createElement("input",{...shared,type});
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6,...style}},
    label?React.createElement("label",{key:"l",htmlFor:name,style:{fontFamily:"var(--font-ui)",fontWeight:500,fontSize:14,color:"var(--fg-1)"}},label):null,
    field,
    error||help?React.createElement("span",{key:"h",style:{fontFamily:"var(--font-ui)",fontWeight:400,fontSize:13,color:error?"var(--danger)":"var(--fg-3)"}},error||help):null
  );
}
