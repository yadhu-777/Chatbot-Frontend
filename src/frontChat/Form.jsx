import ClearIcon from "@mui/icons-material/Clear";
import { useContext, useEffect, useState } from "react";
import Mycontext from "../../Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

export default function Form() {
const[eventDetails,setEventDetails]  = useState({
  name:"",
  date:"",
  details:"",
  image:""
})

  const {form,setForm} = useContext(Mycontext);
   const navigate =useNavigate();
async function handleSubmit (){
  const formData = new FormData();

  formData.append("name", eventDetails.name);
    formData.append("date", eventDetails.date);
      formData.append("details", eventDetails.details);

  formData.append("image", eventDetails.image); 
fetch ("https://chatbot-backend-0k0q.onrender.com/addEvent",{
  
  credentials: "include",
  method:"POST",
 
     
      body: formData
   
      

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
 async function handleImage(e){

 const file = e.target.files[0];
  const options = {
    maxSizeMB: 4,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };
  const compressedFile = await imageCompression(file, options);

  setEventDetails(prev => ({
    ...prev,
    image: compressedFile
  }));

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
  <input type="text" class="form-control" name="name" value={eventDetails.name} onChange={handleChange} id="exampleFormControlInput1" placeholder="name"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Date </label>
  <input  type="datetime-local"  class="form-control" name="date" value={eventDetails.date} onChange={handleChange} id="exampleFormControlInput1" placeholder="Date"/>
</div>
 
 <div class="mb-3">
<input
 type="file"
 onChange={handleImage}
/>
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
