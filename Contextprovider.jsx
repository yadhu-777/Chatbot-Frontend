import { useState } from "react";
import Mycontext from "./Context";

export default function MycontextProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState(false);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [newchat, setNewchat] = useState(false);
  const [close, setClose] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [authreturn, setAuthreturn] = useState(false);
  const [img, setImg] = useState(null);
  const [nulll, setNull] = useState(" ");
  const [tokenss, setTokennss] = useState(true);
  const [optch, setOpch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [del, setDel] = useState(false);
  const [select, setSelect] = useState("college");
  const [select2, setSelect2] = useState("res");
  const [alert2, setAlert2] = useState(false);
  const [data, setData] = useState(" ");
  const [admin, setAdmin] = useState(true);
  const [showpl, setShowpl] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [recPl, setRcpl] = useState(false);
  const [aadmin, setAadmin] = useState(false);
  const [student, setStudent] = useState(false);
  const [back, setBack] = useState([]);
  const [showCourse, SetShowCourse] = useState(false);
  const [complain, setComplain] = useState(false);
  const [courseDetails, setCourseDetails] = useState();
  const [classDetails, setClassDetails] = useState();
    const [classDetails2, setClassDetails2] = useState();
  const [select6, setSelect6] = useState(false);
  const[showClassForm,setShowClassForm] = useState(false);
   const[showann,setShowann] = useState(false);
  const [panoramaUrl, setPanoramaUrl] = useState("");
  const [Convo, setConvo] = useState([
    {
      User: " ",
      Chatbot: " ",
    },
  ]);
  const [id, setId] = useState("");
  return (
    <Mycontext.Provider
      value={{
        showann,setShowann,
        panoramaUrl, setPanoramaUrl,
        classDetails2, setClassDetails2,
        showClassForm,setShowClassForm,
        classDetails,
        setClassDetails,
        select6,
        setSelect6,
        select2,
        setSelect2,
        click3,
        setClick3,
        showCourse,
        SetShowCourse,
        courseDetails,
        setCourseDetails,
        alert2,
        setAlert2,
        complain,
        setComplain,
        back,
        setBack,
        student,
        setStudent,
        aadmin,
        setAadmin,
        showOptions2,
        setShowOptions2,
        click2,
        setClick2,
        recPl,
        setRcpl,
        showpl,
        setShowpl,
        del,
        setDel,
        teacher,
        setTeacher,
        admin,
        setAdmin,
        form,
        setForm,
        authreturn,
        setAuthreturn,
        value,
        setValue,
        Convo,
        setConvo,
        nulll,
        setNull,
        newchat,
        setNewchat,
        id,
        setId,
        Delete,
        setDelete,
        alert,
        setAlert,
        loader,
        setLoader,
        close,
        setClose,
        img,
        setImg,
        tokenss,
        setTokennss,
        optch,
        setOpch,
        menu,
        setMenu,
        select,
        setSelect,
        data,
        setData,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
}
