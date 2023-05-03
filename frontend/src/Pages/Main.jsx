import React from 'react';
import Nav from '../Components/Nav';
import AboutMe from '../Components/AboutMe';
import Recent from '../Components/Recent';
import PostCard from '../Components/PostCard';

function Main(props) {
    return (
        <div className='bg-gradient-to-br from-blue-400 via-purple-500 to-blue-900 '>
        
        <div className=' fixed w-full'>
           <Nav />
        </div>
        <div className=' bg-white bg-opacity-90'>
        <div className='pt-24 mx-5 flex flex-row'>
            <div className='  md:w-3/4'>
                <PostCard className=" grid" />
                <PostCard />
                <PostCard />
            </div>
            <div className=' hidden md:block  w-1/4'>
                <AboutMe 
                img={"http://clipart-library.com/image_gallery/n1111348.jpg"}
                text = {"Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need."}
                />
                <Recent />
            </div>
        </div>
        </div>
        </div>
    );
}

export default Main;