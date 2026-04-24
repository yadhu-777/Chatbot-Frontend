import { useContext, useEffect } from "react";
import Mycontext from "../../Context";
import Clg from "./Clg";
import OptionHead2 from "./Optionhead2";
import Teacher from "./Teacher";
import FAQ from "./FAQ";
import Events from "./Events";
import Placement from "./Placement";
import Highlight from "./Highligt";
import News from "./News";
import ShowHeaderoptions2 from "./ShowheaderOption2";
import  CourseCards from "./Classroom";
import CourseSelection from "./Course";
import About from "./About";
export default function College2() {
  const { form, setForm } = useContext(Mycontext);
  const {
    select,

    setSelect,
    teacher,
    showOptions2,
    setShowOptions2,
    admin,
    click3,
    
    img,
    setAdmin,
    setImg,
    setTokennss,
    setAadmin,
    setStudent,
  } = useContext(Mycontext);



 
  return (
    <div className="outerCollege">
             {/* <div className="cross"  onClick={
    ()=>setForm(prev=>!prev)
}>
      <ClearIcon  className="clear" ></ClearIcon  >

        </div> */}
      <OptionHead2 />
      { click3 && <ShowHeaderoptions2 />}
      {/* {select === "complain" && <Complain />} */}
      {select === "highlight" && <Highlight />}
      {select === "college" && <Clg />}
      {select === "event" && <Events />}
      {select === "room" && <CourseCards />}
      {select === "Placement" && <Placement />}
 {select === "course" && <CourseSelection />}
  {select === "aboutus" && <About />}
 {select === "faq" && <FAQ />}
      {select === "teacher" && <Teacher />}
    </div>
  );
}
