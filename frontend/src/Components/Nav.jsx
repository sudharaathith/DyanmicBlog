import React from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Input,
  } from "@material-tailwind/react";
import Search from './Search';


function Nav(props) {
    
   
    return (
      <>
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 flex flex-row items-center justify-between
       top-0">
          <div className="flex flex-row items-center justify-between text-blue-gray-900 ">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Dynamic Blog
            </Typography>
            </div><div className='w-96'>
            < Search className=' ' />
            </div>
            <div>
             <Button className='bg-white hover:bg-blue-gray-300 ml-5 p-4 flex items-center justify-center'>
             <AiOutlineAppstoreAdd className=' text-xl  text-black' />
             </Button>
            </div>
        </Navbar>
        </>
    );
}

export default Nav;