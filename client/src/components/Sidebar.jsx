import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiLock, FiPlusCircle, FiUsers, FiBarChart2 } from 'react-icons/fi';

const items = [
  { to: '/', label: 'Dashboard', icon: FiHome },
  { to: '/add-password', label: 'Add Password', icon: FiPlusCircle },
  { to: '/passwords', label: 'View Passwords', icon: FiLock },
  { to: '/students/register', label: 'Student Form', icon: FiUsers },
  { to: '/students/aggregation', label: 'Aggregation', icon: FiBarChart2 },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  return <aside className="glass-card h-fit w-full p-3 lg:w-64">{items.map(({ to, label, icon: Icon }) => <Link key={to} to={to} className={`mb-2 flex items-center gap-2 rounded-lg px-3 py-2 transition ${pathname === to ? 'bg-primary/30' : 'hover:bg-white/10'}`}><Icon />{label}</Link>)}</aside>;
}
