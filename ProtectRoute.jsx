import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Mycontext from "./Context";
import College from "./src/frontChat/College";
import Userform from "./src/frontChat/UserForm";
function ProtectedRoute() {
  const { aadmin, setAadmin, setStudent, setImg } = useContext(Mycontext);
  const [auth, setAuth] = useState(null);
  //   useEffect(()=>{

  // fetch("https://chatbot-backend-0k0q.onrender.com/verify",{
  //     method:"POST",
  //       headers:{
  //               "Content-Type":"application/json"
  //             },
  //             credentials:"include",

  // })
  // .then((res)=>res.json())
  // .then((data)=>{
  //    setAuth(true);
  //    setTokennss(false);
  //       setImg(data?.content?.email)

  //     if(data.content.email){
  //          setTokennss(false)
  //     }
  //     toast(data.message,{position: "top-right",
  //          autoClose: 5000,
  //   theme: "dark",

  //   style: {
  //     background: "#121212",
  //     color: "#fff",
  //   },

  //   progressStyle: {
  //     background: "#9b5cff",
  //   },
  //     }

  //     ),
  //     setImg(data?.content?.email)

  //     if(data.content.email){
  //          setTokennss(false)
  //     }
  // })
  // .catch((err)=>console.log(err))
  // },[]);
  //   useEffect(() => {

  //     fetch("https://chatbot-backend-0k0q.onrender.com/auth2",{
  //       credentials: "include",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {

  //       if (data.message === "not logged in") {
  //         console.log(data.message);
  //         setAuth(false);
  //       } else {
  //          console.log(data.message);
  //         setAuth(true);
  //       }

  //     })
  //     .catch(() => setAuth(false));

  //   }, []);
  useEffect(() => {
    fetch("https://chatbot-backend-0k0q.onrender.com/checkAuth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAadmin(false);
        setStudent(false);
        setImg("");
        setAuth(false);

        if (data.role === "admin") {
          setAadmin(true);
          setAuth(true);
        }

        if (data.role === "student") {
          setStudent(true);
          setImg(data.email);
          setAuth(true);
        }
        if (data.logged === false) {
          setAuth(false);
        }
      });
  }, []);

  if (auth === null) {
    return <Userform />;
  }

  return auth ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedRoute;
