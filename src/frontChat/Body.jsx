import React from "react";
import { useContext, useEffect, useRef, useState } from "react";


import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Allert from "./Alert";

import Loader from "./Loader";

import { v4 as uuidv4 } from "uuid";

import AuthPage from "./Auth";
import OptionsShow from "./OptionsShow";
import Mycontext from "../../Context";



export default function Body() {
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  function handleOnline() {
    setOffline(false);
    setOnline(true);
    setTimeout(() => {
      setOnline(false);
    }, 2000);
  }
  function handleOffline() {
    setOffline(true);
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  // const { data } = location.state || "";
  const [recId, setRecId] = useState(null);

  const {
    value,
    setShowOptions2,
    setValue,
    Convo,
    setConvo,
    close,
    setClose,
    alert,
    showOptions2,
    loader,
    setLoader,
    authreturn,
    img,
    setImg,
    id,
    setId,
    nulll,
    tokenss,
    setTokennss,
    optch,
    setOpch,
    data
 
  } = useContext(Mycontext);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [Convo, authreturn]);

  const chatEndRef = useRef(null);

  // useEffect(() => {
  //   const navEntry = performance.getEntriesByType("navigation")[0];
  //   if (navEntry?.type === "reload") {
  //     setRecId(null);
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    setConvo(null);

    setId(null);
    fetch("https://chatbot-backend-0k0q.onrender.com/fetchChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ThreadId: data,
        userId: img||  id ,
      }),
    })
      .then(async (res) => {
        if (res.status === 500) {
          console.log("internal Eror");
          return;
        }
        return res.json();
      })
      .then((data) =>
        setConvo(
          data &&
            data.recData?.thread[0].messages.map((dat) => ({
              User: dat.role == "User" ? dat.message : "",
              Chatbot: dat.role == "Chatbot" ? dat.message : "",
            })),
        ),
      )
      .catch((err) => console.log(err));
  }, [data]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    console.log(id);
    console.log(img)
    setLoader(true);
    // if (tokenss === true) {
    //   setLoader(false);
    //   toast("you are not signed up", {
    //     position: "top-center",
    //     autoClose: 1000,
    //     theme: "dark",
    //   });

    //   setTimeout(() => {
    //     navigate("/auth");
    //   }, 2000);
    //   return;
    // }
    setConvo((prev) =>
      prev
        ? [
            ...prev,
            {
              User: value,
            },
          ]
        : [
            {
              User: value,
            },
          ],
    );
    fetch("https://chatbot-backend-0k0q.onrender.com/config", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inp: value,
        threadID: data || recId,
        userId: img ||id  ,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecId(data.thrId);
        setConvo((prev) =>
          prev
            ? [
                ...prev,
                {
                  Chatbot: data.message,
                },
              ]
            : [
                {
                  Chatbot: data.message,
                },
              ],
        );
        setOpch((prev) => !prev);
        setValue(" ");
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }

  async function handleauth() {
    setClose(true);
  }
  useEffect(() => {
  const setHeight = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  };

  setHeight();
  window.addEventListener("resize", setHeight);

  return () => window.removeEventListener("resize", setHeight);
}, []);
function ShowOption(){
setShowOptions2(prev=>!prev);
}


  return (
    <div   className="outerBody">
           { showOptions2 && OptionsShow}
      {alert && <Allert />}
      {offline && <h2>You`re offline !</h2>}
      {online && <h2>Back online !</h2>}
      <div className="head">
 <h2 className="jarvis-title">Chat with Jarvis Jr 🤖</h2>

       
           <div onClick={ShowOption} className="menuu">
            <i class="fa-solid fa-bars"></i>
          </div>
      </div>

      <div  className="body">
        {close && <AuthPage />}
        {Convo != null &&
          Convo.map((val) => (
            <React.Fragment key={uuidv4()}>
              {val.User && <div className="User">{val.User}</div>}
              {val.Chatbot && (
                <div className="Chatbot">
                  {" "}
                  <ReactMarkdown>{val.Chatbot}</ReactMarkdown>
                </div>
              )}
            </React.Fragment>
          ))}
        {!data && !Convo && (
          <div key={uuidv4()} className="heading">
            <h2 id="heads">new chat</h2>
          </div>
        )}
        {loader && (
          <div className="loaders">
            <Loader />
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className={data || Convo ? "inputboxdown" : ""}>
        <input style={{padding:"1.3rem"}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Enter text"
        />
        <button
          style={{
            borderRadius: "15px",
            padding: "0.6rem",
            width: "6rem",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={handleClick}
        >
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}