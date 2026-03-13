
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';
import PlacementFrom from './PlacementForm';
export default function Highlight(){

const[image,setImage] = useState("");
  const[showpl,setShowpl] = useState(false);
 

useEffect(()=>{
    
  const cld = new Cloudinary({ cloud: { cloudName: 'dke8pn6li' } });
  
  // Use this sample image or upload your own via the Media Library
  const immg = cld
        .image('collegeImg2_a0d60t')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

 setImage(immg.toURL()); 
},[])


    return(
<div className="outerHighlight">
     <div className="plButton">
  <button onClick={()=>{
setShowpl(prev=>!prev)
  }} className='btn btn-primary'  >add image</button>
</div>
{showpl && <PlacementFrom/>}
    <div className="innerHighlight">


      <img src={image} alt="" />
    </div>
</div>

    )
}