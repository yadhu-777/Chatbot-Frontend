import Login from "./Login"
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { useContext } from "react";
import Mycontext from "../../Context";
export default function AuthPage(){
  const{setClose} = useContext(Mycontext);
  function handleClick(){
setClose(false);
  }
  return(
      <div className="authOuter">
      
<div className="authInner">
  <div onClick={handleClick} className="button">
  <ClearIcon  ></ClearIcon>
</div>
<Login/>
  <Button style={{ backgroundColor: "white",color:"black" ,  textTransform: "none", width:"11rem",marginTop:"1.5rem"}}  
  variant="contained">Continue with email </Button>

</div>


    </div>
  )





}