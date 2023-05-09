import React, { useEffect, useState } from 'react';
import Head from '../Components/Head';
import Nav from '../Components/Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Edit(props) {
    
    const arg = useParams();
    let [select, setSelect] = useState(-2);
    let [Json, setJson] = useState({
        Head:{
            title:"Heading",
            Url:null,
            Urlmode:false,
        }
    });

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/blogs/${arg.id}/`).then((response)=>{
            setJson(response.data.data);
        })
    },[])

    const save = ()=>{
        axios.put(`http://127.0.0.1:8000/blogs/${arg.id}/`,{data:Json}).then((response)=>{
            console.log(response.data);
        })
    }




    return (
            
        <div className=' h-screen flex flex-row' >
            <div className='h-full w-full'>
                
                <Head id={-1} data={Json} setData ={setJson} save={save} className='' setSelect={setSelect} edit={select===-1}/>
            <div className='z-[1] fixed  w-screen h-screen' onClick={()=>{setSelect(-2)}}></div>
                <hr></hr>
            </div>
        </div>
    );
}

export default Edit;