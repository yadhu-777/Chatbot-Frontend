import { useContext, useState } from "react";

import { toast } from "react-toastify";
import Mycontext from "../../Context";
export default function ShowSyllabus(){
    const {showann,setShowann}  = useContext(Mycontext);
   const[pdf,setPdf] = useState("");
   function handleChnage(e){
 const file = e.target.files[0];
setPdf(file);
   }
   
   
   
    const handleUpload = async (e) => {
        e.preventDefault();
          if (!pdf) {
      alert("Please select a PDF");
      return;
    }
         const formData = new FormData();
    formData.append("pdf", pdf);
   
    await fetch("https://chatbot-backend-0k0q.onrender.com/pdf2", {
      method: "POST",
      body: formData
    })

    .then((res)=>res.json())
    .then((data)=> toast(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  }));
                  setShowann(prev=>!prev)

  };
    return(
        <div className="innershowAnnouncement2">
            <div className="outerann">
             <form onSubmit={handleUpload}>
   <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">File</label>
  <input type="file" accept="application/pdf" onChange={handleChnage} />
</div>
 
<button type="submit" className="btn btn-primary"   >submit</button>



     </form>
            </div>
        </div>
    )
}