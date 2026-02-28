import { useState } from "react"
import Form from "./Form";
import Form2 from "./Form2";
export default function Complain(){
    const[complain,setComplain]= useState(false);
function handlecomplain(){
    setComplain(prev => !prev)

}
    return(
        <div className="outerEvents2">
            <div className="headerHero4">
            <img id="clgImg3" src="complain.png" alt="" />
           
          </div>

          <div className="complainBtn">
            <button onClick={handlecomplain} type="button" class="btn btn-primary">Register Complaint</button>
          </div>

{complain && <Form2/>}


        </div>
    )
}