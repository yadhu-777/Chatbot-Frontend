import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function Teacher(){
    return(
       <div className="outerTeacher">
  <Card 
  style={{height:"27rem"}}
    sx={{ 
      maxWidth: 360,
      borderRadius: "20px",
      boxShadow: 6,
      transition: "all 0.3s ease",
     marginRight:"4rem",
      "&:hover": {
        boxShadow: 12,
        transform: "translateY(-8px)"  
      }
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
              boxShadow: "0 4px 12px rgba(25,118,210,0.4)"
            }
          }}
        >
          25+ Years Experience
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Dedicated Computer Science teacher skilled in programming and algorithms. 
          Passionate about mentoring students and guiding them toward success in technology.
        </Typography>

      </CardContent>
    </CardActionArea>
  </Card>
   <Card 
    style={{height:"27rem"}}
    sx={{ 
      maxWidth: 360,
      borderRadius: "20px",
      boxShadow: 6,
      transition: "all 0.3s ease",
     
      "&:hover": {
        boxShadow: 12,
        transform: "translateY(-8px)"  
      }
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
              boxShadow: "0 4px 12px rgba(25,118,210,0.4)"
            }
          }}
        >
          28+ Years Experience
        </Typography>

        <Typography variant="body2" color="text.secondary">
         Enthusiastic Computer Science educator passionate about coding, logic, and innovation.
Dedicated to nurturing talent and guiding learners toward excellence in technology.
        </Typography>

      </CardContent>
    </CardActionArea>
  </Card>
</div>
    )
}
// 