
import { GoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";
import Mycontext from "../../Context"


import { useContext } from "react";
export default function Login(){
const navigate = useNavigate();
const{setAlert,setAuthreturn,setId,setClose} = useContext(Mycontext);
  return(
<GoogleLogin
   onSuccess={(credentialResponse) => {
           const token = credentialResponse.credential;
            
          
             if(token){
             fetch("https://chatbot-backend-0k0q.onrender.com/vauth",{
              method:"POST",
                credentials: "include",
             headers:{
              "Content-Type":"application/json"
            },
          
            body:JSON.stringify({
              tknId:token
            })

             })
             .then((res)=>res.json())
             .then((data)=>{
              setClose(false)
            setId(data.email)
              setAuthreturn(true)
             })
             .catch((err)=>console.log(err))
              
              
             setAlert(true);

  navigate("/");
  setTimeout(()=>{
    setAlert(false)
  },2000)

             }
      }}
      onError={() => {
        console.log("Login Failed");
      }}

/>
  )
}