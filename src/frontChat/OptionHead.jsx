import { useContext } from "react";

import Mycontext from "../../Context";
import { Link } from "react-router-dom";
export default function OptionHead() {
  const { setSelect,admin } = useContext(Mycontext);
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
  function timetable(){
    setSelect("Placement")
  }
  function AskAi(){
     setSelect("Ai")
  }
    function highlight(){
     setSelect("highlight")
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
              
        <li onClick={Complain}>Complain</li>
      <li onClick={highlight}>Highlight</li>
         <li onClick={AskAi}>Ask Ai</li>
      </ul>
    </nav>
  );
}
