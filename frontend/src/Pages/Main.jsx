import React from 'react';
import Nav from '../Components/Nav';
import AboutMe from '../Components/AboutMe';

function Main(props) {
    return (
        <div>
        <div className=' fixed w-full'>
           <Nav />
        </div>
        <div className='pt-24 mx-5 flex flex-row'>
            <div className=' bg-black w-3/4'>
                hi
            </div>
            <div className=' bg-blue-gray-600 w-1/4'>
                <AboutMe 
                img={"http://clipart-library.com/image_gallery/n1111348.jpg"}
                text = {"Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need."}
                />
            </div>
        </div>
        </div>
    );
}

export default Main;