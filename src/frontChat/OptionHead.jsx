import { useContext } from "react";

import Mycontext from "../../Context";
import { Link } from "react-router-dom";
export default function OptionHead(){
const{select,setSelect} = useContext(Mycontext);
  function college(){
setSelect("college");

  }
   function Event(){
setSelect("event");

  }
   function Teacher(){
setSelect("teacher");

  }
   function Complain(){
setSelect("complain");

  }
  
      const {form,setForm} = useContext(Mycontext)
    return(
   <div className="outerOptionn">
     <div className="options">
          <button onClick={() => setForm((prev) => !prev)}>Register</button>
       <button onClick={college} >College</button>
        <button onClick={Teacher} >teacher</button>
         <button onClick={Event} >Events</button>
           <button onClick={Complain} >Complain</button>
             <button onClick={Complain} >Time Table</button>
        </div>
   </div>

    )
}