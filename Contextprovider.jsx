import { useState } from "react"
import Mycontext from "./Context"

export default function MycontextProvider({children}) {
    const[loader,setLoader] = useState(false);

const [value,setValue] = useState("");
const[alert,setAlert] = useState(false);
const [newchat,setNewchat] = useState(false);
const[close,setClose] = useState(false);
const [Delete,setDelete] = useState(false);
const [authreturn,setAuthreturn] = useState(false);
const [img,setImg] = useState(null);
const [nulll,setNull] = useState(" ");
const[tokenss,setTokennss] = useState(true);
const[optch,setOpch] = useState(false);
const [Convo,setConvo] = useState([{
    User: " ",
    Chatbot:" "
   }]);
    const[id,setId] = useState("");
    return(
<Mycontext.Provider value={{authreturn,setAuthreturn,value,setValue,Convo,setConvo,nulll,setNull,newchat,setNewchat,id,setId,Delete,setDelete,alert,setAlert,loader,setLoader,close,setClose,img,setImg,tokenss,setTokennss,optch,setOpch}}>
{children}
</Mycontext.Provider>
    )
};