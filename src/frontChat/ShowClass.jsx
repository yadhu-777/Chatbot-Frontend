import ClearIcon from "@mui/icons-material/Clear";
 import Mycontext from "../../Context";
import { useContext, useEffect } from "react";

export default function ShowClass(){
      const { setSelect6 ,classDetails,classDetails2,panoramaUrl} = useContext(Mycontext);
     useEffect(() => {
    if (panoramaUrl && window.pannellum) {
      const viewer = window.pannellum.viewer("panorama", {
        type: "equirectangular",
        panorama: panoramaUrl,
        autoLoad: true,
        autoRotate: -2,
      });

      return () => viewer.destroy(); 
    }
  }, [panoramaUrl]);

      

    return(
        <div className="showOuterClass">
            <div className="showInnerClass">
               <div onClick={()=>setSelect6(prev=>!prev)} className="cross" >
      <ClearIcon style={{zIndex:"999"}}  className="clear" ></ClearIcon  >

        </div>
      
         <div
          id="panorama"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px"
          }}
        ></div>

   
            </div>
        </div>
    )
}