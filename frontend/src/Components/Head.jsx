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
        let temp = props.data
        temp.Head.title = head;
        temp.Head.Url = selectedImage;
        props.setData(temp);
        if(props.data.Head.title !== "Heading"){props.save()};
        
    },[selectedImage,urlmode,head])
    return (
        <div style={{'backgroundImage':`url('${selectedImage}')`}} className=' bg-no-repeat bg-auto bg-center bg-opacity-0 h-[75vh] flex justify-center items-center z-20 overflow-hidden' onClick={()=>{props.setSelect(props.id)}} >
            {props.edit?<ImageUploadDialog setUrlmode={setUrlmode} setSelectedImage={setSelectedImage} className="z-50 end-0 "  />:null}
            {/* {selectedImage && (
          <img 
            className=' w-full h-full z-[-1]'
            alt="not found"
            width={"250px"}
            src={selectedImage}
          />)} */}
            
            <Typography variant="h1" className="z-20 bg-white p-3 rounded-sm bg-opacity-30" >
                {props.edit?<input type="text" value={head} onChange={handleChange} className=' bg-gray-300 bg-opacity-30 text-center border-2  resize-y'></input>:head}
            </Typography>
        </div>
    );
}

export default Head;