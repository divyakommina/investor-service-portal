import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
  children: React.ReactNode;
}

const isAuthenticated = true;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;