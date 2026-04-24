import { useContext } from "react";
import Mycontext from "../../Context";
import { useEffect } from "react";
import { useState } from "react";

export default function OptionHead2() {

  const { setSelect, setClick2, setClick3, student } = useContext(Mycontext);
  
  function college() { setSelect("college"); }
  function Event() { setSelect("event"); }
  function Teacher() { setSelect("course"); }
  function room() { setSelect("room"); }
  function highlight() { setSelect("highlight"); }
  function news() { setSelect("news"); }
  function faq() { setSelect("faq"); }
    function aboutus() { setSelect("aboutus"); }

  function handleClick2() {
    setClick3((prev) => !prev);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="headerImg2">
          <img src="4.png" alt="" />
        </div>
      </div>

      <ul className="nav-links">
        <li onClick={college}>Home</li>
         <li onClick={aboutus}>About Us</li>
        <li onClick={Teacher}>Teacher</li>
        <li onClick={Event}>Events</li>
        <li onClick={highlight}>Highlight</li>
    {/* <li onClick={timetable}>Placement</li> */}
        <li onClick={faq}>FAQ</li>
      </ul>

      <div onClick={handleClick2} className="menuu2">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}