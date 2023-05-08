import {
  ButtonGroup,
  Button,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Input,
  useSelect,
} from "@material-tailwind/react";
import React, { useState } from "react";

function ImageUploadDialog(props) {
  
  return (
    <div>
      <Button className="p-3 pr-1 rounded-none rounded-l-xl">img</Button>
      <div className=" absolute m-10 p-3 rounded-xl shadow-xl">
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
              <Input label="URL" className=" w-60" />
              <Button className="mt-3">Save</Button>
            </TabPanel>
            <TabPanel key="Upload" value="Upload" className="flex flex-col">
              <input
                type="file"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
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
