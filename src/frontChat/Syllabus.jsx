import { useState } from "react";
import ShowSyllabus from "./SyllabusAdd";
export default function Syllabus() {
  const departments = ["BCA", "BBA", "BCom", "BSc"];
  const[set,setSet] = useState(false);
function handleclick(){
setSet(prev =>!prev)
}
  return (
    <div className="outerSyllabus">
{  <ShowSyllabus/>}
   <div className="addBtn3">
       <button onClick={handleclick} className="btn btn-primary">add</button>
   </div>
      <div className="cardContainer">
        {departments.map((dept, index) => (
          <div className="card" key={index}>
            <h2>{dept}</h2>
            <div className="underline"></div>
            <p>View Syllabus →</p>
          </div>
        ))}
      </div>
    </div>
  );
}