import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

function RequireAuth({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default RequireAuth;
