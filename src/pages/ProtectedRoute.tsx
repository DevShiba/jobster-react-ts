import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.user.user);
  if (!user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
