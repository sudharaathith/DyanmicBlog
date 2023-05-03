import { Typography } from "@material-tailwind/react";
import React from "react";

function AboutMe(props) {
  return (
    <div className=" bg-white m-3 p-5 rounded-md shadow-md">
      <Typography variant="h4">About Me</Typography>
      <div className="m-3">
        <img src={props.img} alt="About me"></img>
      </div>
      <Typography variant="small">{props.text}</Typography>
    </div>
  );
}

export default AboutMe;
