import { Typography } from '@material-tailwind/react';
import React from 'react';

function PostCard(props) {
    return (
        <div className=' bg-white my-3 p-5 rounded-md shadow-md'>
            <Typography
            variant="h2"
            >
                hi
            </Typography>
            <Typography
            variant="h6"
            className="flex"
            >
                <div >summa</div>,<div className='ml-1'>dhaan</div>
            </Typography>
            <div className='w-full'>
                <img 
                src={"https://i.ytimg.com/vi/UkdJXszIRPQ/maxresdefault.jpg"}
                alt={"hi"}
                />
            </div>
            <Typography
            variant="small"
            className="my-6"
            >
               github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 53:11:  
            </Typography>
        </div>
    );
}

export default PostCard;