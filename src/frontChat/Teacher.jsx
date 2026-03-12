import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useContext } from "react";
import Mycontext from "../../Context";
    const [teacherData,setTeacherData]= useState([]);
export default function Teacher() {
    const {  teacher, setTeacher } = useContext(Mycontext);

useEffect(()=>{
  fetch("https://chatbot-backend-0k0q.onrender.com/getTeacher", {
     
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
       credentials:"include",
      
    })
    .then((res)=>res.json())
    .then((data)=>{
      setTeacherData(data.message)
      console.log(data.message)
    })
},[])

  return (
    <div className="outerTeacher">

<div className="Addteacher">
  <button onClick={()=> setTeacher(prev =>!prev)} className="btn btn-primary" >Add Teacher</button>
</div>
<div className="teacherDisplay">
  
      <Card
        style={{ height: "27rem" }}
        sx={{
          maxWidth: 360,
          borderRadius: "20px",
          boxShadow: 6,
          transition: "all 0.3s ease",
          marginRight: "4rem",
          "&:hover": {
            boxShadow: 12,
            transform: "translateY(-8px)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="teacher.jpeg"
            alt="teacher photo"
            sx={{ objectFit: "cover" }}
          />

          <CardContent sx={{ textAlign: "center", p: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Gayathri K
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
              25+ Years Experience
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Dedicated Computer Science teacher skilled in programming and
              algorithms. Passionate about mentoring students and guiding them
              toward success in technology.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
</div>
     
    </div>
  );
}
//
