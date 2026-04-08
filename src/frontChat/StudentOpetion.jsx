import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Mycontext from "../../Context";
import { useEffect } from "react";
import { useState } from "react";

export default function OptionHead3() {
const navigate = useNavigate();
useEffect(() => {
  const interval = setInterval(() => {
    setShowBubble(true);

    // hide after 3 sec
    setTimeout(() => {
      setShowBubble(false);
    }, 3000);

  }, 7000); // every 10 sec

  return () => clearInterval(interval);
}, []);
const [showBubble, setShowBubble] = useState(false);
const [hasClickedAI, setHasClickedAI] = useState(true);

  const { select2, setSelect2, setClick2, aadmin, student } = useContext(Mycontext);


  function syllabus() {
    setSelect2("syllabus");
  }
  function AskAi() {
   setSelect2("ai");
   setHasClickedAI(false)
  }


    function annc() {
    setSelect2("annc");
  }
  
    function home() {
    setSelect2("res");
  }
  function handleClick2() {
    setClick2((prev) => !prev);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="headerImg2">
          <img src="4.png" alt="" />
        </div>
      </div>

      <ul className="nav-links">
        {/* <li onClick={() => setForm((prev) => !prev)}>Register</li> */}
        {/* <li onClick={college}>College</li> */}
        {/* <li onClick={Teacher}>Teacher</li> */}
  {/* <li onClick={course}>Course</li> */}
        {/* <li onClick={Event}>Events</li> */}
        {/* <li onClick={timetable}>Placement</li> */}
 {/* <li onClick={()=>navigate("/stdRes")}>Student Resources</li> */}
        {/* <li onClick={Complain}>Complaint</li> */}
        {/* <li onClick={highlight}>Highlight</li> */}
         {/* <li onClick={news}>News</li> */}
         <li onClick={home}>home</li>
           <li onClick={annc}>Announcements</li>
         <li onClick={syllabus}>Syllabus</li>
      {  student &&  <li onClick={AskAi}>Ask Ai</li>}
        
            
  
  {showBubble && student && hasClickedAI&&(
  <div className="ai-bubble">
    Any doubt? Ask  Jarvis  Jr. 🤖
  </div>
)}
      </ul>

      <div onClick={handleClick2} className="menuu2">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
