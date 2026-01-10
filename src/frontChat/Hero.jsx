import Options from "./Options"
import Body from "./Body"
import { toast } from 'react-toastify';

import { useEffect } from "react"
import { useContext } from "react"
import Mycontext from "../../Context"

export default function Hero(){
    const {img,setImg,setTokennss} = useContext(Mycontext)
    useEffect(()=>{

fetch("https://chatbot-backend-0k0q.onrender.com/verify",{
    method:"POST",
      headers:{
              "Content-Type":"application/json"
            },
            credentials:"include",

})
.then((res)=>res.json())
.then((data)=>{
    toast(data.message,{position: "top-right"}), 
    setImg(data.content.email),
    setTokennss(false)
    
})
.catch((err)=>console.log(err))
},[])
   
    return(

<div className="outerHero">

<Options/>
<Body/>

</div>

    )
}