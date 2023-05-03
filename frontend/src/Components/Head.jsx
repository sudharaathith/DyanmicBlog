import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

function Head(props) {

    function handleChange(event) {
        props.setHead(event.target.value);
        event.target.style.width = `${event.target.scrollWidth}px`;
      }

    return (
        <div className='flex justify-center items-center ' >
            <Typography variant="h1" className="z-20" onClick={()=>{props.setSelect(props.id)}}>
                {props.edit?<input type="text" value={props.head} onChange={handleChange} className=' text-center border-2  resize-y'></input>:props.head}
            </Typography>
        </div>
    );
}

export default Head;