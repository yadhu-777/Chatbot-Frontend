import { useContext, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import imageCompression from "browser-image-compression";
import Mycontext from "../../Context";
import { toast } from "react-toastify";

export default function PlacementFrom(){
     const{showpl,setShowpl ,recPl,setRcpl} = useContext(Mycontext);
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
 .then((data)=>{
 toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
setRcpl(prev=>!prev);
setShowpl(prev=>!prev);
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
<div className="outerFormm">
    <div className="innerFormm">
  <div className="cross"  onClick={
    ()=>setShowpl(prev=>!prev)
}>
      <ClearIcon  className="clear" ></ClearIcon  >

        </div>
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