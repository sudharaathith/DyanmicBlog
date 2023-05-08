import React, { useState } from 'react';
import Head from '../Components/Head';
import Nav from '../Components/Nav';

function Edit(props) {
    let [head, setHead] = useState("head");
    let [select, setSelect] = useState(-2);
    return (
            
        <div className=' h-screen flex flex-row' >
            <div className='h-full w-full bg-white bg-opacity-80'>
                
                <Head id={-1} className='' setSelect={setSelect} head={head} setHead={setHead} edit={select===-1}/>
            <div className='z-[1] fixed  w-screen h-screen' onClick={()=>{setSelect(-2)}}></div>
                <hr></hr>
            </div>
        </div>
    );
}

export default Edit;