import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/contextExport";
function ProtectedRoute({ children }) {
  const { auth } = useAuth();
  return auth.status ? children : <Navigate to="/login" replace />;
}

export { ProtectedRoute };
