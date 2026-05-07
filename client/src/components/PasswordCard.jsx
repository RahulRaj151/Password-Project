import { useState } from 'react';
import { FiCopy, FiEye, FiEyeOff, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function PasswordCard({ item, onDelete }) {
  const [show, setShow] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(item.password);
    toast.success('Password copied');
  };

  return (
    <div className="glass-card p-4">
      <h3 className="font-semibold">{item.website}</h3>
      <p className="text-sm text-slate-300">{item.username}</p>
      <p className="mt-2 rounded bg-black/30 p-2 font-mono text-sm">{show ? item.password : '•'.repeat(Math.max(item.password.length, 8))}</p>
      <div className="mt-3 flex gap-2">
        <button className="btn-primary" onClick={() => setShow((v) => !v)}>{show ? <FiEyeOff /> : <FiEye />}</button>
        <button className="btn-primary" onClick={copy}><FiCopy /></button>
        <button className="rounded-lg bg-red-600 px-4 py-2 text-white" onClick={() => onDelete(item._id)}><FiTrash2 /></button>
      </div>
    </div>
  );
}
