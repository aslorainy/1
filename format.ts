export const money=(n:number)=>new Intl.NumberFormat('es-CU',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n).replace('US$','$');
export const dateTime=(d:string)=>new Intl.DateTimeFormat('es',{dateStyle:'short',timeStyle:'short'}).format(new Date(d));
export const dayKey=(d:string)=>d.slice(0,10);
export const weekStart=(d=new Date())=>{const x=new Date(d);const day=x.getDay()||7;x.setHours(0,0,0,0);x.setDate(x.getDate()-day+1);return x};
export const inCurrentWeek=(iso:string)=>new Date(iso)>=weekStart();
export const inCurrentMonth=(iso:string)=>{const d=new Date(iso),n=new Date();return d.getFullYear()===n.getFullYear()&&d.getMonth()===n.getMonth()};
