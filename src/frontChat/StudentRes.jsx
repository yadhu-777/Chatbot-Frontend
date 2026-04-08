import { useContext } from "react";

import OptionHead3 from "./StudentOpetion";
import Mycontext from "../../Context";
import Syllabus from "./Syllabus";
import Announcement from "./Announcement";
import StudentHub from "./StudentMain";
import Body from "./Body";

export default function StudentRes(){
  
     const { select2 } = useContext(Mycontext);
    return(
        
        <div className="outerStudentRes">
              <OptionHead3/>
            <div className="innerStudentRes">
               {select2 == "res" && <StudentHub/>}
                 {select2 == "annc" && <Announcement/>}
                  {select2 == "ai" && <Body/>}
                   {select2 == "syllabus" && <Syllabus/>}

            </div>
        </div>
    )
}