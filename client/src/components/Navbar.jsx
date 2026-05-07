import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <header className="glass-card mb-6 flex items-center justify-between p-4">
      <h1 className="text-xl font-bold">Secure Password Manager</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-300">{user?.email}</span>
        <button onClick={logout} className="btn-primary">Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
