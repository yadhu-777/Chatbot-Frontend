import Login from "./Login"
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { useContext } from "react";
import Mycontext from "../../Context";
import { Navigate, useNavigate } from "react-router-dom";

export default function AuthPage(){
  
  const navigate = useNavigate();
  const{setClose} = useContext(Mycontext);
  function handleClick(){
  navigate("/")
setClose(false);
  }
  return(
      <div className="authOuter">
      
<div className="authInner">
  <div onClick={handleClick} className="button">
  <ClearIcon  onClick={handleClick}  ></ClearIcon>
</div>
<Login/>
  

</div>


    </div>
  )





}