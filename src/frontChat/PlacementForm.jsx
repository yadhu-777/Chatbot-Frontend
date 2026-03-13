import { useState } from "react";

import imageCompression from "browser-image-compression";
export default function PlacementFrom(){
    
const [plImage, setPlImage] = useState({
  name: "",
  description: "",
  image: ""
});
  function handleChange(e){
  setPlImage(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
}
 async function handleImage(e){

 const file = e.target.files[0];
  const options = {
    maxSizeMB: 4,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };

  const compressedFile = await imageCompression(file, options);

  setPlImage(prev => ({
    ...prev,
    image: compressedFile
  }));
}

function handleSubmit(){

  const formData = new FormData();

  formData.append("name", plImage.name);

  formData.append("image", plImage.image); // file

 fetch("https://chatbot-backend-0k0q.onrender.com/addImage",{

  method:"POST",
 

  body:formData

 })
 .then(res=>res.json())
 .then(data=>{
  console.log(data.message);
 })
}
    return(
<div className="outerFormm">
    <div className="innerFormm">

   <form action="
     ">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Teacher Name</label>
  <input name="name"
  type="text"
 value={plImage.name}
 placeholder="Teacher Name"
 onChange={handleChange} class="form-control" id="exampleFormControlInput1"/>
</div>


<div class="mb-3">
 
  
<input
 type="file"
 onChange={handleImage}
/>
  
</div>
<button style={{marginTop:"2rem"}} onClick={handleSubmit} type="button" className="btn btn-secondary">Secondary</button>
     </form>



    </div>
</div>
    )
}