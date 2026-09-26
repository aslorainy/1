export type Location = 'Varadero' | 'Matanzas';
export type OperationType = 'Entrada' | 'Venta' | 'Movimiento' | 'Retiro' | 'Conteo' | 'Ajuste' | 'Dinero recogido';
export type RemovalReason = 'Rebaja' | 'Promoción' | 'Producto dañado' | 'Pérdida' | 'Otro';
export interface Product {id:string;name:string;price:number;initialStock:number;varadero:number;matanzas:number;createdAt:string;active:boolean}
export interface Entry {id:string;productId:string;quantity:number;location:Location;date:string;observation:string}
export interface Sale {id:string;productId:string;quantity:number;price:number;location:Location;date:string;observation:string}
export interface Movement {id:string;productId:string;quantity:number;origin:Location;destination:Location;date:string;observation:string}
export interface Removal {id:string;productId:string;quantity:number;location:Location;reason:RemovalReason;date:string;observation:string}
export interface CashEntry {id:string;amount:number;location:Location;date:string;observation:string}
export interface CountLine {productId:string;registered:number;physical:number;difference:number}
export interface CountSession {id:string;location:Location;date:string;lines:CountLine[];applied:boolean}
export interface Operation {id:string;type:OperationType;date:string;productId?:string;quantity?:number;location?:Location;details:string}
export interface AppData {products:Product[];entries:Entry[];sales:Sale[];movements:Movement[];removals:Removal[];cash:CashEntry[];counts:CountSession[];operations:Operation[]}
export const emptyData:AppData={products:[],entries:[],sales:[],movements:[],removals:[],cash:[],counts:[],operations:[]};
