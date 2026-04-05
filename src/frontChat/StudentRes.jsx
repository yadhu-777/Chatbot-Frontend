import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OptionHead3 from "./StudentOpetion";
import Mycontext from "../../Context";
import { useEffect } from "react";
import { useState } from "react";
import StudentHub from "./StudentMain";
import Body from "./Body";
export default function StudentRes(){
  
     const { select2, setSelect2, setClick2, aadmin, student } = useContext(Mycontext);
    return(
        
        <div className="outerStudentRes">
              <OptionHead3/>
            <div className="innerStudentRes">
               {select2 == "res" && <StudentHub/>}
                 {select2 == "ai" && <Body/>}
            </div>
        </div>
    )
}