import { useState } from "react"
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import Mycontext from "../../Context";

import ClearIcon from "@mui/icons-material/Clear";
export default function Form2(){

  const [Complaint,setComplainT] = useState({
    subject:"",
    description:""
  });

   const { setBack,complain,setComplain,setAlert2} = useContext(Mycontext);
  
  function handleConplaint(e){
setComplainT(prev=>({
  ...prev,
  [e.target.name]:e.target.value
}))
  }
  function handleSubmit(){
 fetch("https://chatbot-backend-0k0q.onrender.com/complaint", {
     method: "POST",
      credentials: "include",
     

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      complaint:Complaint
      }),
    })

    .then((data)=>data.json())
    .then((res)=>{
  setBack(prev => [...prev, res]);
toast(res.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
                  setComplain(false);
                  setAlert2(true);

                  
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
<div className="outerForms">
  
    <div className="innerForm2">
  
       <div id="cross"  onClick={
          ()=>setComplain(prev=>!prev)
      }>
            <ClearIcon  className="clear" ></ClearIcon  >
      
              </div>

 <form action="
     ">
  <div class="form-group">
    <label for="exampleInputEmail1">Subject</label>
    <input onChange={handleConplaint} type="text" class="form-control" name="subject" placeholder="Subject " id="exampleInputEmail1"/>
    
  </div>
  <div style={{marginTop:"2rem"}} class="form-group">
    <label for="exampleInputPassword1">Complaint</label>
 
    <textarea onChange={handleConplaint}  style={{height:"10rem"}} placeholder="Describe your complaint" name="description"  class="form-control" id="exampleInputPassword1" ></textarea>
  </div>
 
  <button style={{marginTop:"2rem"}} type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
    )
}