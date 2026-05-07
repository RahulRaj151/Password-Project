import { useEffect, useMemo, useState } from 'react';
import api from '../services/api';
import PasswordCard from '../components/PasswordCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';

export default function ViewPasswords(){const [items,setItems]=useState([]);const [search,setSearch]=useState('');const [loading,setLoading]=useState(true);const fetchData=async()=>{setLoading(true);const {data}=await api.get('/passwords');setItems(data);setLoading(false);};useEffect(()=>{fetchData();},[]);const filtered=useMemo(()=>items.filter(i=>`${i.website} ${i.username}`.toLowerCase().includes(search.toLowerCase())),[items,search]);const onDelete=async(id)=>{await api.delete(`/passwords/${id}`);setItems(prev=>prev.filter(p=>p._id!==id));};return <div className="space-y-4"><SearchBar value={search} onChange={setSearch}/>{loading?<Loader/>:<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map(item=><PasswordCard key={item._id} item={item} onDelete={onDelete}/>)}</div>}</div>}
