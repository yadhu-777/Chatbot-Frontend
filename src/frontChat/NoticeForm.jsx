import { useState } from "react";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import Mycontext from "../../Context";
 import { useContext } from "react";
 import ClearIcon from "@mui/icons-material/Clear";
export default function NoticeForm(){
      const { admin ,notice, SetNotice} = useContext(Mycontext);
const[noticeImg,setNoticeimg] = useState({
    name:" ",
    image:" "
})

   async function handleImage(e){
    
     const file = e.target.files[0];
      const options = {
        maxSizeMB: 4,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };
    
      const compressedFile = await imageCompression(file, options);
    
      setNoticeimg(prev => ({
        ...prev,
        image: compressedFile
      }));
    }

      function handleChange(e){
      setNoticeimg(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  
    function handleSubmit(e){
    
      e.preventDefault();
      const formData = new FormData();
    
      formData.append("name", noticeImg.name);
    
      formData.append("image", noticeImg.image); // file
    
     fetch("https://chatbot-backend-0k0q.onrender.com/addNotice",{
    
      method:"POST",
     
    
      body:formData
    
     })
     .then(res=>res.json())
     .then((data)=>{
     toast(data.message, {
                        position: "top-center",
                        autoClose: 1000,
                        theme: "dark",
                      });
                      SetNotice(prev=>!prev);
  
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
        <div className="NoticeOuterForm">
            <div className="NoticeInnerForm">
                 <div id="cross" onClick={() => SetNotice(prev => !prev)}>
          <ClearIcon className="clear" />
        </div>

                  <form action="
     ">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Name</label>
  <input name="name"
  type="text"
 value={noticeImg.name}
 placeholder=" Name"
 onChange={handleChange} class="form-control" id="exampleFormControlInput1"/>
</div>


<div class="mb-3">
 
  
<input
 type="file"
 onChange={handleImage}
/>
  
</div>
<button style={{marginTop:"2rem"}} onClick={handleSubmit} type="button" className="btn btn-secondary">Upload</button>
     </form> 
            </div>
        </div>
    )
}