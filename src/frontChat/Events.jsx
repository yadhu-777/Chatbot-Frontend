import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Mycontext from "../../Context";
import { useContext, useEffect, useState } from "react";
import Form from "./Form";
export default function Events(){
  const [eventData,setEventData] = useState([]);
    const [delEvent,setDelEvent] = useState(false);
      const {admin,form,setForm,student,aadmin  } = useContext(Mycontext);

      
      useEffect(()=>{
      fetch ("https://chatbot-backend-0k0q.onrender.com/getEvent",{
        credentials: "include",
        method:"POST",
       
            headers: {
              "Content-Type": "application/json",
            },
           
      
      })
      .then((res)=>res.json())
      .then((data)=>{
        setEventData(data.message)
        
      })
      },[form,delEvent]);

function getDaysLeft(eventDate){
  const today = new Date();
  const event = new Date(eventDate);

  const diff = event - today;

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if(days < 0) return "Event Finished";
  if(days === 0) return "Today";
  
  return days + " Days Left";
}

  function handleEventDelet(data){
fetch ("https://chatbot-backend-0k0q.onrender.com/deleteEvent",{
        credentials: "include",
        method:"POST",
       
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
              id:data
            })
           
      
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
       setDelEvent(prev=>!prev)
      })
  }



    return(
        <div className="outerEvents">
            <div className="eventImg">
              <img id="eventImg" src="event2.png" alt="" />
            </div>
            <div className="outerEventss">
              
   <div className="Addteacher">
 {aadmin && <button onClick={()=> {
    setForm(prev=>!prev)
  }} className="btn btn-primary" >Add Event</button>}
</div>
                  <div className="outerEventsss">
                    {form && <Form />}
     
    {eventData.map((data)=>{
      return(
          <Card
        style={{ height: "32rem" }}
        sx={{
          maxWidth: 860,
          minWidth:860,
          borderRadius: "20px",
          marginBottom:"2rem",
          boxShadow: 6,
          transition: "all 0.3s ease",

          "&:hover": {
            boxShadow: 12,
            transform: "translateY(-8px)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image={data.image}
            alt="event photo"
            sx={{ objectFit: "cover" }}
          />

          <CardContent sx={{ textAlign: "center", p: 3 }}>
            <Typography variant="h5" fontWeight="bold">
             {data.name}
            </Typography>

           

            <Typography style={{marginTop:"1.5rem"}}  variant="body2" color="text.secondary">
             {data.details}
            </Typography>
            
            <Typography
             style={{marginTop:"1.5rem"}} 
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
         {new Date(data.date).toLocaleDateString()} | {getDaysLeft(data.date)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="Addteacher">
{ aadmin &&  <button onClick={()=> {
   handleEventDelet(data._id)
  }} className="btn btn-primary" >Delete Event</button>}
</div>
      </Card>
      )
    })}
    </div>
            </div>
        </div>
    )
}