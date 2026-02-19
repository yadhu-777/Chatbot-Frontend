import { useState } from "react"
import Form from "./Form"
import { useContext } from "react";
import Mycontext from "../../Context";

export default function Clg(){
     const {form,setForm} = useContext(Mycontext)
    return(

<div className="outerClg">
    <div className="innerClg">
        <div className="options">
<button
onClick={
    ()=>setForm(prev=>!prev)
}
>Register</button>
        </div>
        <div className="clgBody">
{form && <Form/>}
        </div>
    </div>
</div>


    )
}