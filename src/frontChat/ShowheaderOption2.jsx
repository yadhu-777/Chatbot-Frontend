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
    setSelect("teacher");
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
          <li onClick={college}>College</li>
          <li onClick={Teacher}>Teacher</li>

          <li onClick={Event}>Events</li>

          <li onClick={news}>News</li>
 <li onClick={classroomm}>Classroom</li>
          <li onClick={highlight}>Highlight</li>
        </ul>
      </div>
    </div>
  );
}
