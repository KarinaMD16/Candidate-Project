import { Navigate, Outlet } from '@tanstack/react-router';
import { isTokenValid } from '../api/token';

export default function ProtectedRoute() {
  const token = localStorage.getItem('token');

  return token && isTokenValid(token) ? <Outlet /> : <Navigate to="/login" />;
}
