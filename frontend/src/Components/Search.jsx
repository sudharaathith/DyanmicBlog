import React from 'react';
import { Input } from '@material-tailwind/react';
import { AiOutlineSearch } from 'react-icons/ai';

function Search(props) {
    return (
        <div className='flex flex-row justify-center items-center shadow-md py-3 px-6 rounded-full w-full bg-gray-300 '>
            <AiOutlineSearch className='mr-3 text-black' />
           <input type='text' className=' w-full text-black border-none outline-none bg-gray-300' placeholder={props.placeholder} />
        </div>
    );
}

export default Search;