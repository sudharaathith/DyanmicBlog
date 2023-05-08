import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import ImageUploadDialog from './ImageUploadDialog';


function Head(props) {
    const [selectedImage, setSelectedImage] = useState(null);

    function handleChange(event) {
        props.setHead(event.target.value);
        event.target.style.width = `${event.target.scrollWidth}px`;
      }

    return (
        <div  className=' bg-opacity-0 h-3/4 flex justify-center items-center z-20 ' onClick={()=>{props.setSelect(props.id)}} >
            {props.edit?<ImageUploadDialog setSelectedImage={setSelectedImage} className="z-50 end-0 "  />:null}
            {selectedImage && (
          <img 
            className=' absolute w-full h-full z-[-1]'
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />)}
            
            <Typography variant="h1" className="z-20 black" >
                {props.edit?<input type="text" value={props.head} onChange={handleChange} className=' bg-gray-300 bg-opacity-30 text-center border-2  resize-y'></input>:props.head}
            </Typography>
        </div>
    );
}

export default Head;