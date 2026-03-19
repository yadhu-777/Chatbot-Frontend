import { useContext } from "react";


import Mycontext from "../../Context";
import { useEffect } from "react";
import { useState } from "react";

export default function OptionHead2() {

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


  const { setSelect, setClick2, setClick3, student } = useContext(Mycontext);
  function college() {
    setSelect("college");
  }
  function Event() {
    setSelect("event");
  }
  function Teacher() {
    setSelect("teacher");
  }
  
 

  function highlight() {
    setSelect("highlight");
  }
  function news() {
    setSelect("news");
  }

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
        {/* <li onClick={() => setForm((prev) => !prev)}>Register</li> */}
        <li onClick={college}>College</li>
        <li onClick={Teacher}>Teacher</li>

        <li onClick={Event}>Events</li>
    

   
        <li onClick={highlight}>Highlight</li>
           <li onClick={news}>News</li>
   
        
            
  
  
      </ul>

      <div onClick={handleClick2} className="menuu2">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
