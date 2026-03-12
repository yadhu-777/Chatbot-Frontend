import { useContext } from "react"
import Mycontext from "../../Context"
import Clg from "./Clg"
import OptionHead from "./OptionHead"
import Teacher from "./Teacher";
import Complain from "./Complain";
import Events from "./Events";
import Timetable from "./Timetable";
import Form from "./Form";
import Body from "./Body";
import Options from "./Options";
import TeacherForm from "./TacherForm";
export default function College(){
      const { form, setForm } = useContext(Mycontext);
  const {select,setSelect,teacher} = useContext(Mycontext);  
    return(

<div className="outerCollege">
  <OptionHead/>

{ select === "complain" && <Complain/>  }
{ select === "college" && <Clg/>  }

{ select === "event" && <Events/>  }
{select ==="timetable" && <Timetable/>}
{select ==="Ai" &&( 
   <div style={{height:"100vh"}}   className="outer">
   <Options/>
      <Body/>
   </div>
    )}
   
{ select === "teacher" && <Teacher/>  }
</div>

    )
}