 import Mycontext from "../../Context";
 import ClearIcon from "@mui/icons-material/Clear";
 import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import { useContext, useEffect, useState } from "react";
export default function ClassAddForm(){
    const[details,setDetails] =useState({
        name:" ",
        image:" "

    });
        const {setShowClassForm} = useContext(Mycontext);
        
         async function handleImage(e){
        
         const file = e.target.files[0];
          const options = {
            maxSizeMB: 4,
            maxWidthOrHeight: 1920,
            useWebWorker: true
          };
        
          const compressedFile = await imageCompression(file, options);
        
          setDetails(prev => ({
            ...prev,
            image: compressedFile
          }));
        }

function handleDetails(e){
    setDetails(prev=>({
           ...prev,
    [e.target.name]: e.target.value
    }))
}
function handleDetailsSubmit(e){
      e.preventDefault(); 
 const formData = new FormData();

  formData.append("name", details.name);
 
  formData.append("image", details.image); 


 fetch("https://chatbot-backend-0k0q.onrender.com/addclass", {
  
     
      method: "POST",
      
       credentials:"include",
      body:formData,
    })
  
    .then((data)=>{
         toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
                  setShowClassForm(prev =>!prev);}
    ).catch((err)=>{
        console.log(err.message)
    })

}
    return(
        <div className="outerClassForm">
            <div className="innerClassAddForm">
                 <div className="cross"  onClick={ 
    ()=>setShowClassForm(prev=>!prev)
}>
      <ClearIcon  className="clear" ></ClearIcon  >

        </div>
 <form action="
     ">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Teacher Name</label>
  <input  name="name" value={details.name} onChange={handleDetails}  type="text" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
 <div class="mb-3">
<input
 type="file"
 onChange={handleImage}
/>
</div>
 <button style={{marginTop:"2rem"}}  onClick={handleDetailsSubmit}  type="button" class="btn btn-secondary" >Secondary</button>
</form>
            </div>
        </div>
    )
} 