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




 const chatEndRef = useRef(null); 
 
  
  

  const navigate = useNavigate();
        const location = useLocation();
const { data } = location.state|| "" ;
const[recId,setRecId] = useState(null);
const[paymet,setPayment] = useState(false);
    const {value,setValue,Convo,setConvo,close,setClose,alert,loader,setLoader,authreturn,setImg,id,setId,nulll} = useContext(Mycontext);
  
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [Convo]);
      const token = Cookies.get("auth");

  useEffect(()=>{

if(token){
  const decoded = jwtDecode(token);
    setId(decoded.email);
   
}
},[token,Convo])





useEffect(()=>{


      setConvo(null);
  
    setId(null)
       fetch("http://localhost:3000/fetchChat",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
                ThreadId:data,
                userId:id

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
if(!token){
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
        fetch("http://localhost:3000/config",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
                inp:value,
                threadID: data||recId,
                userId:id
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
       
    setValue(" ");
    setLoader(false);
})
        .catch((err)=>console.log(err))


}

async function  handleauth(){
setClose(true);
 const tokenAuth =  Cookies.get("auth");
 if(tokenAuth){
  setClose(false)
 }

}


function handlePayment(){
setPayment(true)
}


   

   const ttoken = Cookies.get("auth");
  
    return(
      
<div className="outerBody">
{alert && <Allert/> }

<div className="head">
<h2>Chat with Ai</h2>
<Button onClick={handlePayment} sx={{color:"white",background:"#5b5fd5ff ",borderRadius:"15px",padding:"0.3rem"}}>Upgrade to pro</Button>
<div className="authOptions">
 {
  ttoken===undefined &&
  <>
   <button onClick={()=>handleauth()} style={{borderRadius:"15px",padding:"0.5rem",width:"6rem",backgroundColor:"black",color:"white"}} >login</button>

  <button onClick={()=>handleauth()} style={{borderRadius:"15px",padding:"0.5rem",width:"6rem",backgroundColor:"black",color:"white"}}  >signup</button>
 
  </>
 }
</div>
</div>

<div className="body">
{ !authreturn&& close && <AuthPage/>}
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