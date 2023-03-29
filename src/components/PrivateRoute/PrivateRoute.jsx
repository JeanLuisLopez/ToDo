import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

export function UnauthenticateRoute({ user, loading }) {
  if (loading) return <Loader />;

  return user ? <Navigate to="/tasks" /> : <Outlet />;
}
export function AuthenticateRoute({ user, loading }) {
  if (loading) return <Loader />;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
