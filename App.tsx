import {useEffect,useMemo,useState} from 'react';
import AppLayout from './layouts/AppLayout';
import {useAppData} from './hooks/useAppData';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Operations from './pages/Operations';
import Inventory from './pages/Inventory';
import Count from './pages/Count';
import Reports from './pages/Reports';
import History from './pages/History';
import Backup from './pages/Backup';
import More from './pages/More';
import WhatsApp from './pages/WhatsApp';

function route(){const raw=window.location.hash.replace(/^#/,'')||'/';const [path,q]=raw.split('?');return {path,params:new URLSearchParams(q||'')}}

export default function App(){
  const {data,update,setData}=useAppData();
  const [r,setR]=useState(route());
  useEffect(()=>{const h=()=>setR(route());window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h)},[]);
  const page=useMemo(()=>{
    switch(r.path){
      case '/productos': return <Products data={data} update={update}/>;
      case '/operaciones': return <Operations data={data} update={update} initialKind={(r.params.get('kind') as 'Entrada'|'Venta'|'Movimiento'|'Retiro'|'Dinero')||undefined}/>;
      case '/inventario': return <Inventory data={data}/>;
      case '/conteo': return <Count data={data} update={update}/>;
      case '/reportes': return <Reports data={data}/>;
      case '/historial': return <History data={data}/>;
      case '/backup': return <Backup data={data} setData={setData}/>;
      case '/mas': return <More/>;
      case '/whatsapp': return <WhatsApp data={data}/>;
      default: return <Dashboard data={data}/>;
    }
  },[r,data,update,setData]);
  return <AppLayout>{page}</AppLayout>;
}
