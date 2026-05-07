import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const { register } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => { e.preventDefault(); try { await register(form); toast.success('Registered'); navigate('/'); } catch (e2) { toast.error(e2.response?.data?.message || 'Register failed'); } };
  return <div className="mx-auto mt-20 max-w-md glass-card p-8"><h2 className="mb-4 text-2xl font-bold">Register</h2><form onSubmit={handleSubmit} className="space-y-3"><input className="input" placeholder="Username" required onChange={(e)=>setForm({...form,username:e.target.value})}/><input className="input" placeholder="Email" type="email" required onChange={(e)=>setForm({...form,email:e.target.value})}/><input className="input" placeholder="Password" type="password" required onChange={(e)=>setForm({...form,password:e.target.value})}/><button className="btn-primary w-full">Create Account</button></form><p className="mt-3 text-sm">Have account? <Link className="text-cyan-300" to="/login">Login</Link></p></div>;
}
