import { Typography } from "@material-tailwind/react";
import React from "react";

export function Card() {
  return (
    <div >
      <a href="/summa">
        <img
          className="h-10 shadow-lg my-3 w-full"
          src={" http://clipart-library.com/image_gallery/n1111348.jpg"}
          alt="About me"
        ></img>
      </a>
    </div>
  );
}

function Recent(props) {
  return (
    <div className=" bg-white m-3 p-5 rounded-md shadow-md">
      <Typography variant="h4">Recent Post</Typography>
      <div className="m-3 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Recent;
