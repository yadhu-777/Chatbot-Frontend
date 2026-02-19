import ClearIcon from "@mui/icons-material/Clear";
import { useContext, useState } from "react";
import Mycontext from "../../Context";

export default function Form() {
  const [formVal,setFormVal] = useState(" ");
   const [formVal2,setFormVal2] = useState(" ");
  
async function handleSubmit (){
fetch ("https://chatbot-backend-0k0q.onrender.com/data",{
  method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        details:formVal,
        details2:formVal2
      })

})
}
function handleChange(e){
setFormVal(e.target.value)
}
function handleChange2(e){
setFormVal2(e.target.value)
}

  const {form,setForm} = useContext(Mycontext)
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
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" value={formVal} onChange={handleChange} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Details of College</label>
  <textarea  value={formVal} onChange={handleChange2}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button style={{marginTop:"2rem"}} type="button" class="btn btn-secondary" onClick={} >Secondary</button>
</div>

     </form>
       


        
      </div>
    </div>

  );
}
