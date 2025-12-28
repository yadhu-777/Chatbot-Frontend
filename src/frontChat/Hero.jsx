import Options from "./Options"
import Body from "./Body"

import Payment from "./Payment"

export default function Hero(){
    
    // useEffect(()=>{


    //     fetch("http://localhost:3000/config",{
    //         method:"POST",
    //         headers:{
    //           "  Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             content:"Act like an chatbot"
    //         })
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>console.log(data))
    //     .catch((err)=>console.log(err))
    // },[])
    return(

<div className="outerHero">
<Payment/>
<Options/>
<Body/>

</div>

    )
}