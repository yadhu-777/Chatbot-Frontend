
import { useContext, useEffect, useState } from 'react';

import { toast } from "react-toastify";
import PlacementFrom from './PlacementForm';
import Mycontext from '../../Context';
export default function Highlight(){

const[plData,setPlData] = useState("");

    const[recPl,setRcpl] = useState(false);
 const{showpl,setShowpl } = useContext(Mycontext);

useEffect(()=>{
  fetch ("https://chatbot-backend-0k0q.onrender.com/getHighlight",{
          credentials: "include",
          method:"POST",
         
              headers: {
                "Content-Type": "application/json",
              }
              
             
        
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.message==="Error during fetch"){
 toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
          }else{
setPlData(data.message)
          }
        })
        .catch((err)=>{
          console.log(err)
        })
},[])


    return(
<div className="outerHighlight">
     <div className="plButton">
  <button onClick={()=>{
setShowpl(prev=>!prev);

  }} className='btn btn-primary'  >add image</button>
</div>
{showpl && <PlacementFrom/>}
    <div className="innerHighlight">


    
    </div>
</div>

    )
}