import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoute() {

  const [auth, setAuth] = useState(null);

  useEffect(() => {

    fetch("https://chatbot-backend-0k0q.onrender.com/auth2", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {

      if (data.message === "not logged in") {
        setAuth(false);
      } else {
        setAuth(true);
      }

    })
    .catch(() => setAuth(false));

  }, []);

  if (auth === null) {
    return <div>Loading...</div>;
  }

  return auth ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedRoute;