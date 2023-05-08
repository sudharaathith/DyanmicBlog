import {
  Button,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";

function ImageUploadDialog(props) {
    const[url, setUrl] = useState(null);
    const[show, setShow] = useState(false);
  
  return (
    <div>
      <Button className="p-3 pr-1 rounded-none rounded-l-xl z-5" onClick={()=>{setShow(!show);}}>img</Button>
      <div hidden={!show} className=" absolute m-10 p-3 rounded-xl shadow-xl bg-white bg-opacity-90">
        <Tabs>
          <TabsHeader>
            <Tab key={"Url"} value="Url">
              Url
            </Tab>
            <Tab key={"Upload"} value="Upload">
              Upload
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel key="Url" value="Url" className="flex flex-col">
              <Input label="URL" className=" w-60" onChange={(e)=>{setUrl(e.target.value)}}/>
              <Button className="mt-3" onClick={()=>{
                props.setSelectedImage(url);
                props.setUrlmode(true);
              }}>Save</Button>
            </TabPanel>
            <TabPanel key="Upload" value="Upload" className="flex flex-col">
              <input
                type="file"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  props.setSelectedImage(event.target.files[0]);
                  props.setUrlmode(false);
                }}
                className=" file color-red"
              />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default ImageUploadDialog;
