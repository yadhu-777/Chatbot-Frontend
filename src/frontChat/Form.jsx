import ClearIcon from "@mui/icons-material/Clear";
import { useContext, useEffect, useState } from "react";
import Mycontext from "../../Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Form() {
const[eventDetails,setEventDetails]  = useState({
  name:"",
  date:"",
  details:""
})
  const {form,setForm} = useContext(Mycontext);
   const navigate =useNavigate();
async function handleSubmit (){
 
fetch ("https://chatbot-backend-0k0q.onrender.com/addEvent",{
  credentials: "include",
  method:"POST",
 
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        data:eventDetails
   
      })

})
.then((res)=>res.json())
.then((data)=>
 {
  toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
                  setForm(prev=>!prev)
 }
    
  )
  .catch((err)=>{
    toast(err.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
  })

}

function handleChange(e){
setEventDetails(prev=>(
  {
    ...prev,
    [e.target.name]:e.target.value
  }
));
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
  <input type="email" class="form-control" name="name" value={eventDetails.name} onChange={handleChange} id="exampleFormControlInput1" placeholder="name"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Date </label>
  <input  type="date" class="form-control" name="date" value={eventDetails.date} onChange={handleChange} id="exampleFormControlInput1" placeholder="Date"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Details of Event</label>
  <textarea  value={eventDetails.details} name="details" onChange={handleChange}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button style={{marginTop:"2rem"}} type="button" class="btn btn-secondary" onClick={handleSubmit} >Secondary</button>
</div>

     </form>
       


        
      </div>
    </div>

  );
}
