import { useContext } from "react";
import Mycontext from "../../Context";
import ClearIcon from "@mui/icons-material/Clear";
import TeacherLoader from "./TeacherLoader";

import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CardActionArea from "@mui/material/CardActionArea";

export default function CourseShow(){
          const {  courseDetails,SetShowCourse,admin,del, setDel,aadmin } = useContext(Mycontext);
       
          
          function handleRemove(data){
             fetch("https://chatbot-backend-0k0q.onrender.com/deleteTeacher", {
               
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                 credentials:"include",
                body:JSON.stringify({
                  id:data
                })
              }).then((res)=>res.json())
              .then((data)=>{
          toast(data.message, {
                              position: "top-center",
                              autoClose: 1000,
                              theme: "dark",
                            });
              setDel(prev =>!prev);
                          })
              .catch((err)=>{
                toast(err.message, {
                              position: "top-center",
                              autoClose: 1000,
                              theme: "dark",
                            });
              })
          
          }
return(
    <div className="OuterCourseShow">
      
         
        <div className="innerCourseShow">
{!courseDetails && <TeacherLoader/>}
         {courseDetails && <div className="teacherDisplay">
         
          {courseDetails.length==0 &&<h2>no data</h2>}
             <div className="cross"  onClick={ 
    ()=>SetShowCourse(prev=>!prev)
}>
      <ClearIcon  className="clear" ></ClearIcon  >

        </div>
            
                {courseDetails.map((data)=>{
                  return(
                    <Card 
                
                  sx={{
                    maxWidth: 410,
                    minWidth:300,
                    borderRadius: "20px",
                 marginTop:"2rem",
                      height:"auto",
                    boxShadow: 6,
                    transition: "all 0.3s ease",
                    marginRight: "4rem",
                    "&:hover": {
                      boxShadow: 12,
                      transform: "translateY(-8px)",
                    },}}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={data.image}
                      alt="teacher photo"
                      sx={{ objectFit: "cover" }}
                    />
          
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Typography variant="h5" fontWeight="bold">
                      { data?.name}
                      </Typography>
          
                      <Typography
                        variant="subtitle2"
                        sx={{
                          background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                          color: "white",
                          display: "inline-block",
                          px: 2,
                          py: 0.6,
                          borderRadius: "20px",
                          mt: 1,
                          mb: 2,
                          fontWeight: "bold",
                          letterSpacing: "0.5px",
                          transition: "0.3s",
                          "&:hover": {
                            boxShadow: "0 4px 12px rgba(25,118,210,0.4)",
                          },
                        }}
                      >
                       {data?.position}
                      </Typography>
          
                      <Typography 
                        
          
                      variant="body2" color="text.secondary">
                       {data?.details}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
               { aadmin &&   <button onClick={()=> handleRemove(data?._id)} className="btn btn-primary" >Remove Teacher</button>}
                </Card>
                  )
                })}
          </div>}
        </div>
    </div>
)
}