import {useCallback,useEffect,useState} from 'react';import {AppData} from '../types';import {storage} from '../services/storage';
export function useAppData(){const[data,setData]=useState<AppData>(()=>storage.load());useEffect(()=>storage.save(data),[data]);const update=useCallback((fn:(d:AppData)=>AppData)=>setData(d=>fn(structuredClone(d))),[]);return {data,update,setData};}
