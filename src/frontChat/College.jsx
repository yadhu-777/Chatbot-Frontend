import { useContext, useEffect } from "react"
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
import ShowHeaderoptions from "./ShowHeaderoptions";
export default function College(){
      const { form, setForm } = useContext(Mycontext);
  const {select,setSelect,teacher,showOptions2,setShowOptions2,admin ,click2,img,setImg,setTokennss,setAadmin,setStudent} = useContext(Mycontext);  
    
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

   useEffect(()=>{

 fetch("https://chatbot-backend-0k0q.onrender.com/checkAuth",{
    
        credentials:"include",
 })
 .then(res=>res.json())
 .then(data=>{
  setAadmin(false);
  setStudent(false);
  setImg("");

  if(data.role === "admin"){
    setAadmin(true);
  }

  if(data.role === "student"){
    setStudent(true);
    setImg(data.email);
  }

 })

},[]);
   
    return(

<div className="outerCollege">

  <OptionHead/>
{click2 && <ShowHeaderoptions/>}
{ select === "complain" && <Complain/>  }
{ select === "highlight" && <Highlight/>  }
{ select === "college" && <Clg/>  }
{ select === "event" && <Events/>  }
{ select === "Placement" && <Placement/>  }

{select ==="Ai" &&( 
   <div    className="outer">
  { showOptions2 && <OptionsShow/>}
   <Options/>
      <Body/>
     
   </div>
    )}
   
{ select === "teacher" && <Teacher/>  }
</div>

    )
}