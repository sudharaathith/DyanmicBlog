import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';

function TextFied(props) {
    const[text,setText]= useState("");
    return (
        
            <div className='flex justify-center items-center z-20 overflow-hidden w-full' onClick={()=>{props.setSelect(props.id)}}>
                <Typography
            variant="h6"
            className="w-full"
            >
                {props.edit?(<textarea className='w-full p-3' value={text} onChange={(e)=>{setText(e.target.value)}} />):<div className='w-full p-3' >{text}</div>}
            </Typography>
            </div>
            
    );
}

export default TextFied;