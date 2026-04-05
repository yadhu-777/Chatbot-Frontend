import { useContext, useState } from "react";

import Mycontext from "../../Context";
import CourseShow from "./CourseShow";

export default function CourseSelection() {
         const {  courseDetails,setCourseDetails,showCourse,SetShowCourse} = useContext(Mycontext);
  const courses = ["BCA", "BBA", "BCom", "BSc"];
function handleCourse(course){
   setCourseDetails("")
SetShowCourse(prev=>!prev);
  fetch("https://chatbot-backend-0k0q.onrender.com/getTeacher", {
     
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
       credentials:"include",
       body:JSON.stringify({
        course:course
      })
      
    })
    .then((res)=>res.json())
    .then((data)=>{
      setCourseDetails(data.message)
      console.log(data.message)
    })

}
  return (
  <div className="courses-wrapper">
    {showCourse && <CourseShow />}
    
    <div className="courses-grid">
      {courses.map((course, index) => (
        <div 
          key={index} 
          onClick={() => handleCourse(course)} 
          className="course-card"
        >
        
          <div oncl className="card-main">
            <h3 className="course-title">{course}</h3>
            <div className="course-line"></div>
          </div>
          <div className="card-footer">
            <span>View Teachers</span>
            <span className="arrow">→</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}