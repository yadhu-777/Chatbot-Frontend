import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
function ProtectedRoute({ children }) {
     const navigate = useNavigate();
  function async(){
     fetch("https://chatbot-backend-0k0q.onrender.com/vauth2", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },

          
          })
          .then((res)=>res.json())
          .then((data)=>{
            if(data.message==="not logged in"){
 navigate("/admin")
            }else{
                 navigate("/clg")
            }
         
           
          })
          .catch((err)=>{
             toast(err.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
          })
           
}




  return children;
}

export default ProtectedRoute;