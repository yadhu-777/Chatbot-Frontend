import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children }) {

  const token = Cookies.get("token"); // or check localStorage

  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children;
}

export default ProtectedRoute;