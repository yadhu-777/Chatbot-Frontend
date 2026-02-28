import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
export default function Events(){
    return(
        <div className="outerEvents">
            <div className="eventImg">
              <img id="eventImg" src="c.jpeg" alt="" />
            </div>
            <div className="outerEventss">
                  <div className="outerTeacher">
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
            image="infinito.png"
            alt="event photo"
            sx={{ objectFit: "cover" }}
          />

          <CardContent sx={{ textAlign: "center", p: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Infinito  Day
            </Typography>


            <Typography  style={{marginTop:"1.5rem"}}  variant="body2" color="text.secondary">
              Dedicated Computer Science teacher skilled in programming and
              algorithms. Passionate about mentoring students and guiding them
              toward success in technology.
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
              Date: 10/03/2026
            </Typography>
          </CardContent>
          
        </CardActionArea>
        
      </Card>
      <Card
        style={{ height: "27rem" }}
        sx={{
          maxWidth: 360,
          borderRadius: "20px",
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
            height="200"
            image="grad.png"
            alt="event photo"
            sx={{ objectFit: "cover" }}
          />

          <CardContent sx={{ textAlign: "center", p: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Graduation Day
            </Typography>

           

            <Typography style={{marginTop:"1.5rem"}}  variant="body2" color="text.secondary">
              Enthusiastic Computer Science educator passionate about coding,
              logic, and innovation. Dedicated to nurturing talent and guiding
              learners toward excellence in technology.
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
              Date: 12/03/2026
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
            </div>
        </div>
    )
}