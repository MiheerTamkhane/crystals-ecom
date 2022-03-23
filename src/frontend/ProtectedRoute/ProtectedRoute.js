import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/contextExport";
function ProtectedRoute({ children }) {
  const { auth } = useAuth();
  return auth.status ? children : <Navigate to="/Login" replace />;
}

export { ProtectedRoute };
