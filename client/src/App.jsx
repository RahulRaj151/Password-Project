import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddPassword from './pages/AddPassword';
import ViewPasswords from './pages/ViewPasswords';
import UserRegistrationForm from './pages/UserRegistrationForm';
import AggregationDashboard from './pages/AggregationDashboard';

const PrivateLayout = ({ children }) => <ProtectedRoute><div className="mx-auto max-w-7xl p-4"><Navbar /><div className="grid gap-4 lg:grid-cols-[256px_1fr]"><Sidebar /><main>{children}</main></div></div></ProtectedRoute>;

export default function App(){return <Routes><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/" element={<PrivateLayout><Dashboard/></PrivateLayout>}/><Route path="/add-password" element={<PrivateLayout><AddPassword/></PrivateLayout>}/><Route path="/passwords" element={<PrivateLayout><ViewPasswords/></PrivateLayout>}/><Route path="/students/register" element={<PrivateLayout><UserRegistrationForm/></PrivateLayout>}/><Route path="/students/aggregation" element={<PrivateLayout><AggregationDashboard/></PrivateLayout>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
