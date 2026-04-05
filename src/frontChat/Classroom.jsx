import ShowClass from "./ShowClass";
 
 import Mycontext from "../../Context";
import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
 import ClassAddForm from "./ClassAddForm";
export default function CourseCards() {
    const {select6, setSelect6,aadmin ,classDetails,panoramaUrl, setPanoramaUrl,classDetails2, setClassDetails2, setClassDetails,showClassForm,setShowClassForm} = useContext(Mycontext);
  
  const courses = [
    "BCA Class",
    "BBA Class",
    "BCom Class",
    "MBA Class",
  ];
useEffect(()=>{
 fetch("https://chatbot-backend-0k0q.onrender.com/class",{
      headers:{
        "Content-type":"application-json"
      },
      method:"POST",
         credentials:"include",
        
    })
       .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
      setClassDetails(data.data)
  
    })
},[])

  function handleClass(course){
    setSelect6(prev=>!prev);

    fetch("https://chatbot-backend-0k0q.onrender.com/classSpec",{
      headers:{
        "Content-Type": "application/json"
      },
      method:"POST",
         credentials:"include",
          body:JSON.stringify({course})
    })
       .then((res)=>res.json())
        .then((data)=>{
          console.log(data.data)
      setClassDetails2(data.data)
   if (data.data.length > 0) {
        setPanoramaUrl(data.data[0].url);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  function handleClassAdd(){
setShowClassForm(prev=>!prev);

  }

  return (
    
    <div className="course-container">
      {select6 && <ShowClass/>}
    { aadmin && <button onClick={handleClassAdd} className="btn-class">Add</button>}
     { showClassForm && <ClassAddForm/>}
      <div className="course-grid">
        {classDetails?.map((course, index) => (
          <div onClick={()=>handleClass(course.course)} key={index} className="course-card">
            {course.course}
             { aadmin && <button onClick={handleClassAdd} className="btn-class">delete</button>}
          </div>
          
        ))}
      </div>
    </div>
  );
}


