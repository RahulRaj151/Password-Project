import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await login(form.email, form.password); toast.success('Welcome back'); navigate('/'); } catch (e2) { toast.error(e2.response?.data?.message || 'Login failed'); }
  };

  return <div className="mx-auto mt-20 max-w-md glass-card p-8"><h2 className="mb-4 text-2xl font-bold">Login</h2><form onSubmit={handleSubmit} className="space-y-3"><input className="input" placeholder="Email" type="email" required onChange={(e)=>setForm({...form,email:e.target.value})}/><input className="input" placeholder="Password" type="password" required onChange={(e)=>setForm({...form,password:e.target.value})}/><button className="btn-primary w-full">Login</button></form><p className="mt-3 text-sm">No account? <Link className="text-cyan-300" to="/register">Register</Link></p></div>;
}
