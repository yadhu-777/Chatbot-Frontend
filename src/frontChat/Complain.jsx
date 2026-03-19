import { useContext } from "react"

import Form2 from "./Form2";
import Card from "@mui/material/Card";
import Alert from '@mui/material/Alert';
import Typography from "@mui/material/Typography";
import Mycontext from "../../Context";



export default function Complain(){
      const { back,complain,setComplain,alert2} = useContext(Mycontext);

function handlecomplain(){
    setComplain(prev => !prev)

}
    return(
        <div className="outerEvents2">
            <div className="headerHero4">
            <img id="clgImg3" src="complain.png" alt="" />
           {complain && <Form2/>}
          </div>

          <div className="complainBtn">
            <button onClick={handlecomplain} type="button" class="btn btn-primary">Register Complaint</button>
          </div>
          <div className="showComplaintPuter">

       {Object.entries(back)?.map(([key, value]) => {
  return (
    <Card
      sx={{
          maxWidth: 410,
          minWidth:300,
          borderRadius: "20px",
          marginBottom:"2rem",
           
            padding:"2rem",
          boxShadow: 6,
          transition: "all 0.3s ease",
       
          marginRight: "4rem",
          "&:hover": {
            boxShadow: 12,
            transform: "translateY(-8px)",
          },
        }}
    key={key}>
      <Typography
      
      sx={{
           wordWrap: "break-word",
      overflowWrap: "break-word",
      whiteSpace: "normal",
      
      }}
      >
         { alert2 &&   <Alert style={{marginBottom:"2rem"}} severity="success">Registered  successfully !</Alert>}
        {value.subject}</Typography>
    </Card>
  );
})}
    
</div>







        </div>
    )
}