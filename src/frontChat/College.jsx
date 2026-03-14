import { useContext } from "react"
import Mycontext from "../../Context"
import Clg from "./Clg"
import OptionHead from "./OptionHead"
import Teacher from "./Teacher";
import Complain from "./Complain";
import Events from "./Events";
import Placement from "./Placement";
import Highlight from "./Highligt";
import Body from "./Body";
import Options from "./Options";
import OptionsShow from "./OptionsShow";
export default function College(){
      const { form, setForm } = useContext(Mycontext);
  const {select,setSelect,teacher,showOptions2,setShowOptions2} = useContext(Mycontext);  
    return(

<div className="outerCollege">
  <OptionHead/>

{ select === "complain" && <Complain/>  }
{ select === "highlight" && <Highlight/>  }
{ select === "college" && <Clg/>  }
{ select === "event" && <Events/>  }
{ select === "Placement" && <Placement/>  }

{select ==="Ai" &&( 
   <div style={{height:"100vh"}}   className="outer">
  { showOptions2 && <OptionsShow/>}
   <Options/>
      <Body/>
     
   </div>
    )}
   
{ select === "teacher" && <Teacher/>  }
</div>

    )
}