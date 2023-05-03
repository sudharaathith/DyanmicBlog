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
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
   
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Pages
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Account
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Blocks
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Docs
          </a>
        </Typography>
      </ul>
    );
   
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
             <Button className='bg-white hover:bg-blue-gray-300 flex items-center justify-center'>
             <AiOutlineAppstoreAdd className=' text-xl  text-black' />
             </Button>
            </div>
        </Navbar>
        </>
    );
}

export default Nav;