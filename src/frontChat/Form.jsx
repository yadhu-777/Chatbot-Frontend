import ClearIcon from "@mui/icons-material/Clear";
import { useContext, useState } from "react";
import Mycontext from "../../Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Form() {
  const [formVal,setFormVal] = useState(" ");
   const [formVal2,setFormVal2] = useState(" ");
  const {form,setForm} = useContext(Mycontext);
  
async function handleSubmit (){
  const navigate =useNavigate();
fetch ("https://chatbot-backend-0k0q.onrender.com/data",{
  credentials: "include",
  method:"POST",
 
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email:formVal,
        password:formVal2
      })

})
.then((res)=>res.json())
.then((data)=>
  toast(data.message,{
    position: "top-center",
        autoClose: 1000,
        theme: "dark",
  }
    
  ),
  navigate("/clg")
)
}
function handleChange(e){
setFormVal(e.target.value)
}
function handleChange2(e){
setFormVal2(e.target.value)
}

 
  return (
    <div className="outerform">
      <div className="innerForm">
        <div className="cross"  onClick={
    ()=>setForm(prev=>!prev)
}>
      <ClearIcon  className="clear" ></ClearIcon  >

        </div>
    
     <form action="
     ">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Event Name</label>
  <input type="email" class="form-control" value={formVal} onChange={handleChange} id="exampleFormControlInput1" placeholder="name"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Date </label>
  <input type="email" class="form-control" value={formVal} onChange={handleChange} id="exampleFormControlInput1" placeholder="Date"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Details of Event</label>
  <textarea  value={formVal} onChange={handleChange2}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button style={{marginTop:"2rem"}} type="button" class="btn btn-secondary" onClick={handleSubmit} >Secondary</button>
</div>

     </form>
       


        
      </div>
    </div>

  );
}
