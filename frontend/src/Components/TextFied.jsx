import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function TextFied(props) {
  const [value, setValue] = useState('Text');
  const [edit, setEdit] = useState(false);

  useEffect(()=>{
    setEdit(props.select === props.id);
    console.log(props.select === props.id)
  })
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

  return (
    <div
      className=" flex justify-center items-center z-20 overflow-hidden w-full bg-white"
      onClick={() => {
        props.setSelect(props.id);
        console.log("clicked")
      }}
    >
{ edit&&(<ReactQuill className="w-full z-0 " modules={{
    toolbar: toolbarOptions
  }}  value={value} onChange={setValue}  />)}
         {!edit &&( <ReactQuill readOnly className="w-full z-0" modules={{toolbar:false}} value={value}  />)}
    </div>
  );
}

export default TextFied;
