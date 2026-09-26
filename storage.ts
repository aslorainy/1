import {AppData,emptyData} from '../types';
const KEY='mi-inventario-data-v1';
export const storage={
 load():AppData{try{const raw=localStorage.getItem(KEY);if(!raw)return structuredClone(emptyData);return {...emptyData,...JSON.parse(raw)};}catch{return structuredClone(emptyData)}},
 save(data:AppData){localStorage.setItem(KEY,JSON.stringify(data));},
 create<T extends keyof AppData>(collection:T,item:AppData[T][number]){const data=this.load();data[collection]=(data[collection] as unknown[]).concat(item) as never;this.save(data);return data;},
 read<T extends keyof AppData>(collection:T){return this.load()[collection];},
 update<T extends keyof AppData>(collection:T,predicate:(item:AppData[T][number])=>boolean,patch:Partial<AppData[T][number]>){const data=this.load();const list=data[collection] as AppData[T][number][];data[collection]=list.map(x=>predicate(x)?{...x,...patch}:x) as never;this.save(data);return data;},
 remove<T extends keyof AppData>(collection:T,predicate:(item:AppData[T][number])=>boolean){const data=this.load();data[collection]=(data[collection] as AppData[T][number][]).filter(x=>!predicate(x)) as never;this.save(data);return data;},
 clear(){localStorage.removeItem(KEY);},
 exportJSON(data:AppData){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`mi-inventario-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url);},
 importJSON(file:File):Promise<AppData>{return file.text().then(t=>{const parsed=JSON.parse(t);if(!parsed||!Array.isArray(parsed.products))throw new Error('Archivo no válido');return {...emptyData,...parsed};});}
};
