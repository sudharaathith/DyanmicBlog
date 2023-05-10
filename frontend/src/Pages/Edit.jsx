import React, { useEffect, useState, useLayoutEffect } from 'react';
import Head from '../Components/Head';
import Nav from '../Components/Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TextFied from '../Components/TextFied';
import { Button } from '@material-tailwind/react';
import {BsBodyText} from 'react-icons/bs';


function Edit(props) {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
  
    useLayoutEffect(() => {
      window.scrollTo(scrollX, scrollY);
    });
    const arg = useParams();
    let [select, setSelect] = useState(-2);
    let [Json, setJson] = useState(null);
    
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/blogs/${arg.id}/`).then((response)=>{
            setJson(response.data.data);
            console.log(response.data.data);
        })
    },[])
    
    const save = ()=>{
        axios.put(`http://127.0.0.1:8000/blogs/${arg.id}/`,{data:Json}).then((response)=>{
            console.log(response.data);
        })
    }
    let [body, setBody] = useState([<TextFied key={0} id={0} data={Json} setData ={setJson} save={save} className='' setSelect={setSelect} select={select}/>]);

    const addText = ()=>{
        const len = body.length;
        setBody(body.push( <TextFied id={len+1} data={Json} setData ={setJson} save={save} className='' setSelect={setSelect} edit={select===(len+1)}/>))
    }




    return (
            
        <div className='bg-gradient-to-br from-blue-400 via-purple-500 to-blue-900 '>
            <div className='bg-white bg-opacity-90 h-full'>
        <div className=' mx-3 rounded-xl shadow-xl h-full flex flex-row' >
            {Json &&<div className='h-full w-full'>
                
                <Head id={-1} data={Json} setData ={setJson} save={save} className=' rounded-t-xl' setSelect={setSelect} edit={select===-1}/>
                {body}
            <div className='z-[1] fixed  w-screen h-screen' onClick={()=>{setSelect(-2)}}></div>
            </div>}
            </div>
            <div className=' fixed bottom-3  w-screen flex flex-col'>
                <div className='bg-white shadow-2xl  rounded-xl p-3 bg-opacity-70 mx-auto'>
                <Button className=' p-3 m-0 ' onClick={addText}><BsBodyText /></Button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Edit;