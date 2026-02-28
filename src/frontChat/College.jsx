import { useContext } from "react"
import Mycontext from "../../Context"
import Clg from "./Clg"
import OptionHead from "./OptionHead"
import Teacher from "./Teacher";
import Complain from "./Complain";
import Events from "./Events";
import Timetable from "./Timetable";
import Form from "./Form";


export default function College(){
      const { form, setForm } = useContext(Mycontext);
  const {select,setSelect} = useContext(Mycontext);  
    return(

<div className="outerCollege">
    <OptionHead/>

{ select === "teacher" && <Teacher/>  }
{ select === "complain" && <Complain/>  }
{ select === "college" && <Clg/>  }
{form && <Form />}
{ select === "event" && <Events/>  }
{select ==="timetable" && <Timetable/>}

</div>

    )
}