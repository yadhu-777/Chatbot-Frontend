import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import College from "./src/frontChat/College";
function ProtectedRoute() {

  const [auth, setAuth] = useState(null);

  useEffect(() => {

    fetch("https://chatbot-backend-0k0q.onrender.com/auth2", {
            credentials: "include",
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {

      if (data.message === "not logged in") {
        console.log(data.message);
        setAuth(false);
      } else {
         console.log(data.message);
        setAuth(true);
      }

    })
    .catch(() => setAuth(false));

  }, []);

  if (auth === null) {
    return <div>Loading...</div>;
  }

  return auth ? <College /> : <Navigate to="/home" />;
}

export default ProtectedRoute;