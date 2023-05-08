import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import ImageUploadDialog from './ImageUploadDialog';


function Head(props) {
    const [selectedImage, setSelectedImage] = useState(props.data.Head.Url);
    const [urlmode, setUrlmode] = useState(props.data.Head.Urlmode);
    const [head, setHead] = useState(props.data.Head.title);

    function handleChange(event) {
        setHead(event.target.value);
        event.target.style.width = `${event.target.scrollWidth}px`;
      }

    useEffect(()=>{
        
        
    },[selectedImage,urlmode,head])
    return (
        <div  className=' bg-opacity-0 h-3/4 flex justify-center items-center z-20 overflow-hidden' onClick={()=>{props.setSelect(props.id)}} >
            {props.edit?<ImageUploadDialog setUrlmode={setUrlmode} setSelectedImage={setSelectedImage} className="z-50 end-0 "  />:null}
            {selectedImage && (
          <img 
            className=' absolute w-full h-full z-[-1]'
            alt="not found"
            width={"250px"}
            src={urlmode?selectedImage:URL.createObjectURL(selectedImage)}
          />)}
            
            <Typography variant="h1" className="z-20 black" >
                {props.edit?<input type="text" value={head} onChange={handleChange} className=' bg-gray-300 bg-opacity-30 text-center border-2  resize-y'></input>:head}
            </Typography>
        </div>
    );
}

export default Head;