
import { useContext, useEffect, useState } from 'react';

import { toast } from "react-toastify";
import PlacementFrom from './PlacementForm';
import Mycontext from '../../Context';
export default function Highlight() {

const [plData,setPlData] = useState([]);
const [selectedImg,setSelectedImg] = useState(null);

const {showpl,setShowpl,recPl,setRcpl,aadmin} = useContext(Mycontext);

useEffect(()=>{

fetch("https://chatbot-backend-0k0q.onrender.com/getHighlight",{
credentials:"include",
method:"POST",
headers:{
"Content-Type":"application/json"
}

})
.then((res)=>res.json())
.then((data)=>{

if(data.message==="Error during fetch"){
toast(data.message,{
position:"top-center",
autoClose:1000,
theme:"dark"
});
}
else{
setPlData(data.message);
}

})
.catch((err)=>{
console.log(err);
});

},[recPl]);


function handleDelete(id){

fetch("https://chatbot-backend-0k0q.onrender.com/highlightDelete",{
credentials:"include",
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
id:id
})
})
.then((res)=>res.json())
.then((data)=>{

setRcpl(prev=>!prev);

toast(data.message,{
position:"top-center",
autoClose:1000,
theme:"dark"
});

})
.catch((err)=>{

toast(err.message,{
position:"top-center",
autoClose:1000,
theme:"dark"
});

});
}



return(

<div className="outerHighlight">

<h1 className="highlightTitle">College Memories</h1>

<div className="plButton">

{aadmin &&

<button
onClick={()=>setShowpl(prev=>!prev)}
className="btn btn-primary"
>
Add Image
</button>

}

</div>

{showpl && <PlacementFrom/>}

<div className="innerHighlight">

{plData?.map((data)=>{

return(

<div className="plDiv" key={data._id}>

<img
src={data.image}
alt=""
onClick={()=>setSelectedImg(data.image)}
/>

{aadmin &&

<button
onClick={()=>handleDelete(data._id)}
className="deleteBtn"
>
Delete
</button>

}

</div>

);

})}

</div>


{/* Image Modal */}

{selectedImg &&

<div className="imgModal" onClick={()=>setSelectedImg(null)}>

<img src={selectedImg} alt="preview"/>

</div>

}

</div>

);

}