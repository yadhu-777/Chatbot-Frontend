import ShowAnnouncement from "./AshowAnnouncement"
import Mycontext from "../../Context";
import { useContext, useEffect, useState } from "react";

export default function Announcement(){
     const {showann,setShowann}  = useContext(Mycontext);
     const[pdf,setpdf] = useState(null);
function handleclick(){
setShowann(prev=>!prev);
}
useEffect(() => {
  fetch("https://chatbot-backend-0k0q.onrender.com/announcements")
    .then(res => res.json())
    .then(data => setpdf(data));
}, []);
    
   
    return(
<div className="outerAnnoouncement">
    <button onClick={handleclick}>add</button>
    <div className="innerAnnouncement">
 { showann &&   <ShowAnnouncement/>}
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
          href={`https://chatbot-backend-0k0q.onrender.com${item.url}`}
          target="_blank"
        >
          👁️
        </a>

        <a
          href={`https://chatbot-backend-0k0q.onrender.com${item.url}`}
          download
        >
          ⬇️
        </a>
      </div>

    </div>
  ))}
</div>

    </div>
</div>


    )
}