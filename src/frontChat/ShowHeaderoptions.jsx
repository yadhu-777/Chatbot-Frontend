import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Mycontext from "../../Context";
export default function ShowHeaderoptions() {
  const { setSelect, setClick2,student } = useContext(Mycontext);
  const navigate = useNavigate();
  function college() {
    setSelect("college");
    setClick2((prev) => !prev);
  }
  function Event() {
    setSelect("event");
    setClick2((prev) => !prev);
  }
  function Teacher() {
    setSelect("teacher");
    setClick2((prev) => !prev);
  }
  function Complain() {
    setSelect("complain");
    setClick2((prev) => !prev);
  }
  function timetable() {
    setSelect("Placement");
    setClick2((prev) => !prev);
  }
  function AskAi() {
   setSelect("Ai");
    setClick2((prev) => !prev);
  }
  function highlight() {
    setSelect("highlight");
    setClick2((prev) => !prev);
  }
   function classroom() {
    setSelect("room");
    setClick2((prev) => !prev);
  }
   function announcement() {
    setSelect("announcement");
    setClick2((prev) => !prev);
  }
    function news() {
    setSelect("news");
    setClick2((prev) => !prev);
  }


  function handleClick2() {
    setClick2((prev) => !prev);
  }
  return (
    <div className="outerShowHeaderoptions">
      <div className="innerShowHeaderoptions">
        <ul className="links">
          {/* <li onClick={() => setForm((prev) => !prev)}>Register</li> */}
          <li onClick={college}>College</li>
          <li onClick={Teacher}>Teacher</li>

          <li onClick={Event}>Events</li>
          <li onClick={timetable}>Placement</li>
 <li onClick={news}>News</li>
      { student &&   <li onClick={Complain}>Complain</li>}
          <li onClick={highlight}>Highlight</li>
           <li onClick={classroom}>classroom</li>
          {  student &&   <li onClick={announcement}>announcement</li>}
         
        </ul>
      </div>
    </div>
  );
}
