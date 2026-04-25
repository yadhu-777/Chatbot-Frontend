import { useContext, useEffect } from "react";
import Mycontext from "../../Context";
import Clg from "./Clg";
import OptionHead from "./OptionHead";
import Teacher from "./Teacher";
import Complain from "./Complain";
import Events from "./Events";
import Placement from "./Placement";
import Syllabus from "./Syllabus";
import Highlight from "./Highligt";
import Body from "./Body";
import UserAnalytics from "./Analysis";
import CourseSelection from "./Course";
import News from "./News";
import CourseCards from "./Classroom";
import OptionsShow from "./OptionsShow";
import ShowHeaderoptions from "./ShowHeaderoptions";
import Announcement from "./Announcement";
export default function College() {
  const { form, setForm } = useContext(Mycontext);
  const {
    select,
    setSelect,
    teacher,
    showOptions2,
    setShowOptions2,
    admin,
    click2,
    img,
    setAdmin,
    setImg,
    setTokennss,
    setAadmin,
    setStudent,
  } = useContext(Mycontext);

  //  {admin &&

  //   useEffect(()=>{

  // fetch("https://chatbot-backend-0k0q.onrender.com/verify",{
  //     method:"POST",
  //       headers:{
  //               "Content-Type":"application/json"
  //             },
  //             credentials:"include",

  // })
  // .then((res)=>res.json())
  // .then((data)=>{
  //     toast(data.message,{position: "top-right",
  //          autoClose: 5000,
  //   theme: "dark",

  //   style: {
  //     background: "#121212",
  //     color: "#fff",
  //   },

  //   progressStyle: {
  //     background: "#9b5cff",
  //   },
  //     }

  //     ),
  //     setImg(data?.content?.email)

  //     if(data.content.email){
  //          setTokennss(false)
  //     }
  // })
  // .catch((err)=>console.log(err))
  // },[])}

  useEffect(() => {
    fetch("https://chatbot-backend-0k0q.onrender.com/checkAuth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAadmin(false);
        setStudent(false);
        setImg("");

        if (data.role === "admin") {
          setAadmin(true);
          setAdmin(true);
        }

        if (data.role === "student") {
          setStudent(true);
          setAdmin(false);
          setImg(data.email);
        }
      });
  }, []);

  return (
    <div className="outerCollege">
      <OptionHead />
      {click2 && <ShowHeaderoptions />}
      {select === "complain" && <Complain />}
       {select === "course" && <CourseSelection />}
          {select === "dashboard" && <UserAnalytics />}
        {select === "room" && <CourseCards />}
      {select === "highlight" && <Highlight />}
        {select === "announcement" && <Announcement />}
      {select === "college" && <Clg />}
      {select === "event" && <Events />}
         {select === "syllabus" && <Syllabus />}
      {select === "Placement" && <Placement />}
{select === "news" && <News />}
      {select === "Ai" && (
        <div className="outer">
          {showOptions2 && <OptionsShow />}
          {/* <Options /> */}
          <Body />
        </div>
      )}

      {select === "teacher" && <Teacher />}
    </div>
  );
}
