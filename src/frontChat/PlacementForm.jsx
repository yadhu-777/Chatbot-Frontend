import { useState } from "react";


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
function handleImage(e){

 const file = e.target.files[0];

 setPlImage(prev => ({
   ...prev,
   image: file
 }));
}

function handleSubmit(){

  const formData = new FormData();

  formData.append("name", plImage.name);
  formData.append("description", plImage.description);
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
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea  name="description"
 value={plImage.description}
 placeholder="Details"
 onChange={handleChange}
  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
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