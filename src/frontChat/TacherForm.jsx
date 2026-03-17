import ClearIcon from "@mui/icons-material/Clear";
import { useContext, useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import Mycontext from "../../Context";
export default function TeacherForm(){
    const[teacherDetails,setTeacherDetails] = useState({
        name:"",
        position:"",
        description:"",
        image:""
    });

      const { setSelect,admin ,setTeacher} = useContext(Mycontext);

function handleTeacher(e){
  setTeacherDetails(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
}




function handleTeacherSubmit(){
   const formData = new FormData();

  formData.append("name", teacherDetails.name);
    formData.append("position", teacherDetails.position);
      formData.append("description", teacherDetails.description);

  formData.append("image", teacherDetails.image); 

 fetch("https://chatbot-backend-0k0q.onrender.com/addTeacher", {
  
     
      method: "POST",
      
       credentials:"include",
      body:formData,
    })
    // .then((res)=>res.json())
    .then((data)=>{
         toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
                  setTeacher(prev =>!prev);}
    ).catch((err)=>{
        console.log(err.message)
    })
}

 async function handleImage(e){

 const file = e.target.files[0];
  const options = {
    maxSizeMB: 4,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };

  const compressedFile = await imageCompression(file, options);

  setTeacherDetails(prev => ({
    ...prev,
    image: compressedFile
  }));
}

    return(

   <div className="outerFormm">
    <div className="innerFormm">
       
              <div className="cross"  onClick={ 
    ()=>setTeacher(prev=>!prev)
}>
      <ClearIcon  className="clear" ></ClearIcon  >

        </div>
     <form action="
     ">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Teacher Name</label>
  <input  name="name" value={teacherDetails.name} onChange={handleTeacher}  type="text" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Position </label>
  <input  name="position" value={teacherDetails.position}  onChange={handleTeacher}  type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex: HOD"/>
</div>
 <div class="mb-3">
<input
 type="file"
 onChange={handleImage}
/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea  name="description" value={teacherDetails.description}  onChange={handleTeacher}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button style={{marginTop:"2rem"}}  onClick={handleTeacherSubmit}  type="button" class="btn btn-secondary" >Secondary</button>
</div>

     </form>
    </div>
   </div>
    )
}