import { useState } from "react"
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import Mycontext from "../../Context";
import imageCompression from "browser-image-compression";
import ClearIcon from "@mui/icons-material/Clear";
export default function Form2(){

  const [Complaint,setComplainT] = useState({
    subject:"",
    description:"",
    image:""
  });

   const { setBack,complain,setComplain,setAlert2} = useContext(Mycontext);
  
  function handleConplaint(e){
setComplainT(prev=>({
  ...prev,
  [e.target.name]:e.target.value
}))
  }
   async function handleImage(e){
  
   const file = e.target.files[0];
    const options = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };
    const compressedFile = await imageCompression(file, options);
  
    setComplainT(prev => ({
      ...prev,
      image: compressedFile
    }));
  
  }
  function handleSubmit() {
  const formData = new FormData();

  formData.append("subject", Complaint.subject);
  formData.append("description", Complaint.description);
  formData.append("image", Complaint.image);

  fetch("https://chatbot-backend-0k0q.onrender.com/complaint", {
    method: "POST",
    credentials: "include",
    body: formData
  })
    .then((data) => data.json())
    .then((res) => {
      setBack(prev => [...prev, res]);
      toast(res.message, {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      setComplain(false);
      setAlert2(true);
    })
    .catch((err) => {
      toast(err.message, {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    });
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
    <input onChange={handleConplaint} value={Complaint.name} type="text" class="form-control" name="subject" placeholder="Subject " id="exampleInputEmail1"/>
    
  </div>
  <div style={{marginTop:"2rem"}} class="form-group">
    <label for="exampleInputPassword1">Complaint</label>
 
    <textarea onChange={handleConplaint} value={Complaint.description}  style={{height:"10rem"}} placeholder="Describe your complaint" name="description"  class="form-control" id="exampleInputPassword1" ></textarea>
  </div>
  <div class="mb-3">
<input
 type="file"
 onChange={handleImage}
/>
</div>
 
  <button style={{marginTop:"2rem"}} type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
    )
}