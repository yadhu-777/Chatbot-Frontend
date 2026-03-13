
import { useContext, useEffect, useState } from 'react';

import { toast } from "react-toastify";
import PlacementFrom from './PlacementForm';
import Mycontext from '../../Context';
export default function Highlight(){

const[plData,setPlData] = useState([]);


 const{showpl,setShowpl,recPl,setRcpl } = useContext(Mycontext);

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
},[recPl]);
function handleDlete(data){
fetch ("https://chatbot-backend-0k0q.onrender.com/highlightDelete",{
          credentials: "include",
          method:"POST",
         
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify({
id:data
              })
              
             
        
        })
        .then((res)=>res.json())
        .then((data)=>{
          setRcpl(prev=>!prev);
          toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
        })
        .catch((err)=>{
           toast(err.message, {
                      position: "top-center",
                      autoClose: 1000,
                      theme: "dark",
                    });
        })
}


    return(
<div className="outerHighlight">
     <div className="plButton">
  <button onClick={()=>{
setShowpl(prev=>!prev);

  }} className='btn btn-primary'  >add image</button>
</div>
{showpl && <PlacementFrom/>}
    <div className="innerHighlight">
{
  plData?.map((data)=>{
    return(
      <div className="plDiv">
        <img src={data.image }alt="" />
        <button onClick={()=>handleDlete(data._id)} className='btn btn-danger'>Delete</button>
      </div>
    )
  })
}

    
    </div>
</div>

    )
}