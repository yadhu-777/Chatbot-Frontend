import { useContext, useEffect, useRef, useState } from "react"

import Mycontext from "../../Context"
   import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Allert from "./Alert";
import Cookies from "js-cookie";
import Loader from "./Loader";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import Button from '@mui/material/Button';
import AuthPage from "./Auth";
import { jwtDecode } from "jwt-decode";
import Payment from "./Payment";

export default function Body(){

const [online,setOnline] = useState(false);
const[offline,setOffline] = useState(false);
function handleOnline(){
setOffline(false)
}
function handleOffline(){
 setOffline(true)
}

useEffect(()=>{
  window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);
},[]);



  

  const navigate = useNavigate();
        const location = useLocation();
const { data } = location.state|| "" ;
const[recId,setRecId] = useState(null);

    const {value,setValue,Convo,setConvo,close,setClose,alert,loader,setLoader,authreturn,img,setImg,id,setId,nulll,tokenss,setTokennss,optch,setOpch} = useContext(Mycontext);
      
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
      
  }, [Convo,authreturn]);
     

 const chatEndRef = useRef(null); 
 
  useEffect(()=>{
    if(performance.navigate.type===1){
      setRecId(null);
      navigate("/");
    }
  },[])



useEffect(()=>{


      setConvo(null);
  
    setId(null)
       fetch("https://chatbot-backend-0k0q.onrender.com/fetchChat",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
                ThreadId:data,
                userId:id ||img

            })
        })
        .then(async(res)=> {
          if(res.status ===500){
            console.log("international Eror");
            return
          }
          return res.json();
        }
           
       
    )
        .then((data)=>
       
   setConvo(
data && data.recData?.thread[0].messages.map((dat)=>(
   {User:dat.role=="User"? dat.message:"",
   Chatbot:dat.role=="Chatbot"? dat.message:""}
 
))

   )
        )
        .catch((err)=>console.log(err))
},[data])

 
function handleChange(e){
    setValue(e.target.value);
     
}

function handleClick(){
 
  setLoader(true);
if(tokenss === true){
  setLoader(false)
toast("you are not signed up",{
  position:"top-center",
  autoClose:1000,
  theme:"dark"
});

setTimeout(()=>{
navigate("/auth");
},2000)
return;
}
 setConvo(prev=>prev?[
       ...prev,{
        User:value,
     
    }]:
    [
      {
        User:value,
      
    }]
)
        fetch("https://chatbot-backend-0k0q.onrender.com/config",{
            method:"POST",
          
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
                inp:value,
                threadID: data||recId,
                userId:id || img
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
     
setRecId(data.thrId);
     setConvo(prev=>prev?[
       ...prev,{
      
        Chatbot:data.message
    }]:
    [
      {
     
        Chatbot:data.message
    }]
    
  )
       setOpch(true);
    setValue(" ");
    setLoader(false);
})
        .catch((err)=>console.log(err))


}

async function  handleauth(){
setClose(true);


}





   

  
    return(
      
<div className="outerBody">
{alert && <Allert/> }
{offline && <h2>offline</h2>}
<div className="head">
<h2>Chat with Ai</h2>
<Button sx={{color:"white",background:"#5b5fd5ff ",borderRadius:"15px",padding:"0.3rem"}}>Upgrade to pro</Button>
<div className="authOptions">
 {
 tokenss &&
  <>
   <button onClick={()=>handleauth()} style={{borderRadius:"15px",padding:"0.5rem",width:"6rem",backgroundColor:"black",color:"white"}} >login</button>

  <button onClick={()=>handleauth()} style={{borderRadius:"15px",padding:"0.5rem",width:"6rem",backgroundColor:"black",color:"white"}}  >signup</button>
 
  </>
 }
</div>
</div>

<div className="body">
{ close && <AuthPage/>}
{
 Convo!=null &&   Convo.map((val)=>(
     <React.Fragment  key={uuidv4()}>
     
        {val.User &&  <div  className="User">{val.User}</div> }
        {val.Chatbot  && <div className="Chatbot"> <ReactMarkdown>{val.Chatbot}</ReactMarkdown></div>}
       
     </React.Fragment>
    ))

}
  {!data && !Convo && <div key={uuidv4()} className="heading"><h2 id="heads">new chat</h2></div>
    }
 {loader &&


   <div className="loaders">
 <Loader/>
   </div>}
<div ref={chatEndRef} />
</div>
    
<div className={data || Convo? "inputboxdown" : "inputbox"}>
    
<input   onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleClick();  
    }
  }}
  type="text" onChange={handleChange} value={value} placeholder="Enter text" />
<button style={{borderRadius:"15px",padding:"0.6rem",width:"6rem",backgroundColor:"black",color:"white"}} onClick={handleClick}><i className="fa-regular fa-paper-plane"></i></button>

</div>

</div>




    )
}