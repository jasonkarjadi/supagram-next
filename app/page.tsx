"use client";

import { FC, useState } from "react";
import MyImageGrid from "./ImageGrid";
import MyModal from "./Modal";
import MyTitle from "./Title";
import MyUploadForm from "./UploadForm";

const RootPage: FC = () => {
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <>
      <MyTitle />
      <MyUploadForm />
      <MyImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <MyModal selectedImgState={[selectedImg, setSelectedImg]} />
      )}
    </>
  );
};

export default RootPage;
