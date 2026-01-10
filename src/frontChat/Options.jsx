import { useContext, useState } from "react"
import { useEffect } from "react"
import Cookies from "js-cookie";
import {  googleLogout} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Mycontext from "../../Context"
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import { positions } from "@mui/system";
 

export default function Options(){
  




     const {Convo,setDelete,Delete,img,setImg,id,setId,setNull,setConvo,setClose,tokenss} = useContext(Mycontext);
    const navigate = useNavigate();
  
 const [threads,setThreads,] = useState("");



    useEffect(()=>{
        fetch("https://chatbot-backend-0k0q.onrender.com/threads",{
            method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body:JSON.stringify({
            userId:id || img
           })

        })
        .then((res)=>res.json())
        .then((data)=>

    setThreads(data.threads)
    )
    },[Convo,Delete,id,img,tokenss])


function handleClick(data){
navigate("/",{state:{data}});
};


function handledelete(idval){
 
  fetch("https://chatbot-backend-0k0q.onrender.com/delThread",{
            method:"DELETE",
           headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
    userId:id,
    idd:idval
})
        })
        .then((res)=>res.json())
        .then((data)=>
    toast(data.message,
        {
position: "top-right",
autoClose: 5000,

theme: "light",

}
    ),setDelete(prev=>!prev),
    setConvo(null),
    navigate("/")
    )
    .catch((err)=>{
        console.log(err);
    })
}
function handleremove(){
    fetch("https://chatbot-backend-0k0q.onrender.com/delcookie",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include"
    })
    .then((res)=>res.json)
    .then((data)=>toast(data.message,
      {  positions:"top-center"}
    ))
}


    return(
<div className="outerOption">
<div className="newChat">
&nbsp;&nbsp;&nbsp;<p id="addchat" onClick={() =>{
    setId(null),
    setNull(null),
    navigate("/")

}}>new chat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Fab size="small"    color="primary" aria-label="add">
  < AddIcon sx={{ fontSize:15 }}  />
</Fab></p>
</div>
<div className="innerOption">

{threads &&



    threads.map((data)=>(
<div key={uuidv4()} className="lists">
<p onClick={()=>handleClick(data.thread.threadId)}  >{data.thread.title}<IconButton  aria-label="delete">
  <DeleteIcon  key={uuidv4()} onClick={()=>handledelete(data.thread.threadId)} />
</IconButton></p>

</div>
))



}

    
</div>

<div className="logout">
    <p id="emg">{img}</p>
<Button    onClick={() => (
        googleLogout(),
        handleremove(),
        setImg(null),
        setConvo( null),
       window.location.reload()
        )}       sx={{color:"white",background:"#5b5fd5ff ",borderRadius:"15px",padding:"0.5rem",width:"13rem"}}>   <Avatar sx={{ bgcolor: "purple"}}>{img?.slice(0,1,0)}
    </Avatar> &nbsp;&nbsp;&nbsp;logout</Button>
</div>


</div>



    )
}