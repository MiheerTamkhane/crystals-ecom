import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/contextExport";
function ProtectedRoute() {
  const { auth } = useAuth();
  return auth.status ? <Outlet /> : <Navigate to="/login" replace />;
}

export { ProtectedRoute };
