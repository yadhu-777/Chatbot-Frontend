import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";



function ProtectedRoute({ children }) {
      const [auth, setAuth] = useState(null);
     const navigate = useNavigate();
async function checkAuth(){
     fetch("https://chatbot-backend-0k0q.onrender.com/auth2", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },

          
          })
          .then((res)=>res.json())
          .then((data)=>{
            if (data.message === "not logged in") {
            setAuth(false);
        } else {
            setAuth(true);
        }
           
          })
          if (auth === null) {
    return <div>Loading...</div>;
  }

  return auth ? <Outlet /> : <Navigate to="/admin" />;
           
}


useEffect(() => {
  checkAuth();
}, []);

  return <Outlet />;
}

export default ProtectedRoute;