import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Mycontext from "../../Context";
export default function ShowHeaderoptions2() {
  const { setSelect, setClick3 } = useContext(Mycontext);

  function college(e) {
    e.stopPropagation();
    setSelect("college");
    setClick3((prev) => !prev);
  }
  function Event(e) {
    e.stopPropagation();
    setSelect("event");
    setClick3((prev) => !prev);
  }
  function Teacher(e) {
    e.stopPropagation();
     setSelect("course"); 
    setClick3((prev) => !prev);
  }
  function news(e) {
    e.stopPropagation();
    setSelect("news");
    setClick3((prev) => !prev);
  }
 function classroomm(e) {
    e.stopPropagation();
    setSelect("room");
    setClick3((prev) => !prev);
  }
  function highlight(e) {
    e.stopPropagation();
    setSelect("highlight");
    setClick3((prev) => !prev);
  }
   function faq(e) {
    e.stopPropagation();
    setSelect("faq");
    setClick3((prev) => !prev);
  }
  
  function timetable(e) {
     e.stopPropagation();
    setSelect("Placement");
      setClick3((prev) => !prev);
  }
  function aboutus(e) {
     e.stopPropagation();
    setSelect("aboutus");
      setClick3((prev) => !prev);
  }
  function handleClick2() {
    setClick3((prev) => !prev);
  }
  return (
    <div
      onClick={() => setClick3((prev) => !prev)}
      className="outerShowHeaderoptions"
    >
      <div className="innerShowHeaderoptions">
        <ul className="links">
          {/* <li onClick={() => setForm((prev) => !prev)}>Register</li> */}
          <li onClick={college}>Home</li>
            <li onClick={aboutus}>About Us</li>
          <li onClick={Teacher}>Faculty</li>

          <li onClick={Event}>Events</li>

          <li onClick={timetable}>Placement</li>
 <li onClick={classroomm}>Classroom</li>
          <li onClick={highlight}>Gallery</li>
           <li onClick={faq}>FAQ</li>
        </ul>
      </div>
    </div>
  );
}
