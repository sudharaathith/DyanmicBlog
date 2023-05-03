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
                <AboutMe />
            </div>
        </div>
        </div>
    );
}

export default Main;