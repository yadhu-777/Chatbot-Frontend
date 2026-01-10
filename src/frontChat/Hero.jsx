import Options from "./Options"
import Body from "./Body"

import Payment from "./Payment"
import { useEffect } from "react"

export default function Hero(){
    useEffect(()=>{

fetch("https://chatbot-backend-0k0q.onrender.com/verify",{
    method:"POST",
      headers:{
              "Content-Type":"application/json"
            },
            credentials:"include",

})
.then((res)=>res.json())
.then((data)=>console.log(data))
  
},[])
   
    return(

<div className="outerHero">

<Options/>
<Body/>

</div>

    )
}