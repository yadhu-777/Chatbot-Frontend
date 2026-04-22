import ShowAnnouncement from "./AshowAnnouncement"
import Mycontext from "../../Context";
import { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
export default function Announcement(){
  const[load,setLaod]= useState(false);
     const {showann,setShowann,aadmin}  = useContext(Mycontext);
     const[pdf,setpdf] = useState(null);
function handleclick(){
setShowann(prev=>!prev);
}
const handleDelete = async (id) => {
  try {
    await fetch(`https://chatbot-backend-0k0q.onrender.com/pdf/${id}`, {
      method: "DELETE",
    });

    setpdf((prev) => prev.filter((item) => item._id !== id));

  } catch (err) {
    console.error(err);
  }
};


useEffect(() => {
  setLaod(prev=>!prev)
  fetch("https://chatbot-backend-0k0q.onrender.com/announcements")
    .then(res => res.json())
    .then(data => {
      
      setLaod(prev=>!prev);
      setpdf(data)}
    )},[]);
    
   
    return(
<div className="outerAnnoouncement">
  { aadmin && <button onClick={handleclick}>add</button>}
    <div className="innerAnnouncement">
    
 { showann &&   <ShowAnnouncement/>}
   {load && <Loader/>}
<div className="pdf-container">
  {pdf?.map((item, i) => (
    <div className="pdf-card" key={i}>
      
      {/* LEFT ICON */}
      <div className="pdf-icon">
        📄
      </div>

      {/* FILE INFO */}
      <div className="pdf-info">
        <h4>{item.originalname}</h4>
        <p>PDF Document</p>
      </div>

      {/* ACTIONS */}
    <div className="pdf-actions">
<a
  href={`https://docs.google.com/gview?url=${item.url}&embedded=true`}
  target="_blank"
  rel="noreferrer"
>
  👁️
</a>

  <a
    href={item.url}
    download
  >
    ⬇️
  </a>
{aadmin &&<button onClick={() => handleDelete(item._id)}>
  🗑️
</button>}
</div>
    </div>
  ))}
</div>

    </div>
</div>


    )
}