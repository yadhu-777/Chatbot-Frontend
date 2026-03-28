import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Mycontext from "../../Context";
import { useEffect } from "react";
import { useState } from "react";

export default function OptionHead() {

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

  const { setSelect, setClick2, aadmin, student } = useContext(Mycontext);
  function college() {
    setSelect("college");
  }
  function Event() {
    setSelect("event");
  }
  function Teacher() {
    setSelect("teacher");
  }
  function Complain() {
    setSelect("complain");
  }
  function timetable() {
    setSelect("Placement");
  }
  function AskAi() {
   setSelect("Ai");
   setHasClickedAI(false)
  }
  function highlight() {
    setSelect("highlight");
  }

    function news() {
    setSelect("news");
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
        <li onClick={college}>College</li>
        <li onClick={Teacher}>Teacher</li>

        <li onClick={Event}>Events</li>
        <li onClick={timetable}>Placement</li>
 
        <li onClick={Complain}>Complaint</li>
        <li onClick={highlight}>Highlight</li>
         <li onClick={news}>News</li>
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
