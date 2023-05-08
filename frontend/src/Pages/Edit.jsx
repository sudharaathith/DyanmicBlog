import React, { useEffect, useState } from 'react';
import Head from '../Components/Head';
import Nav from '../Components/Nav';

function Edit(props) {
    
    let [select, setSelect] = useState(-2);
    let [Json, setJson] = useState({
        Head:{
            title:"Heading",
            Url:null,
            Urlmode:false,
        }
    });




    return (
            
        <div className=' h-screen flex flex-row' >
            <div className='h-full w-full'>
                
                <Head id={-1} data={Json} setData ={setJson} className='' setSelect={setSelect} edit={select===-1}/>
            <div className='z-[1] fixed  w-screen h-screen' onClick={()=>{setSelect(-2)}}></div>
                <hr></hr>
            </div>
        </div>
    );
}

export default Edit;