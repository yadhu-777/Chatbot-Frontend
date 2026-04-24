import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Mycontext from "../../Context";
import { useEffect } from "react";
import { useState } from "react";
import CourseCards from "./Classroom";
export default function OptionHead() {
const navigate = useNavigate();
// useEffect(() => {
//   const interval = setInterval(() => {
//     setShowBubble(true);

//     // hide after 3 sec
//     setTimeout(() => {
//       setShowBubble(false);
//     }, 3000);

//   }, 7000); // every 10 sec

//   return () => clearInterval(interval);
// }, []);
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

    function sylabus() {
    setSelect("");
  }
      function classs(){
    setSelect("room");
  }
    function course() {
    setSelect("course");
  }
    function announcement() {
    setSelect("announcement");
  }
    function dashboard() {
    setSelect("dashboard");
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
        <li onClick={college}>Home</li>

     {aadmin &&    <li onClick={Teacher}>Teacher</li>}
      {aadmin &&    <li onClick={classs}>Classroom</li>}
  <li onClick={course}>Course</li>
        <li onClick={Event}>Events</li>
        <li onClick={timetable}>Placement</li>
 {!aadmin && <li onClick={()=>navigate("/stdRes")}>Student Resources</li>}
      {!aadmin &&  <li onClick={Complain}>Suggestion</li>}
        {aadmin &&  <li onClick={dashboard}>Dashboard</li>}
        <li onClick={highlight}>Gallery</li>
           {aadmin &&    <li onClick={announcement}>Announcement</li>}
                   {aadmin &&    <li onClick={sylabus}>Syllabus</li>}
         {/* <li onClick={news}>News</li> */}
      {/* {  student &&  <li onClick={AskAi}>Ask Ai</li>} */}
        
            
  
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
