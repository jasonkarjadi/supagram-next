"use client";

import { Dispatch, FC, SetStateAction, useEffect } from "react";
import useStorage from "../hooks/useStorage";

interface MyProgressBarProps {
  fileState: [File, Dispatch<SetStateAction<File | null>>];
}

const MyProgressBar: FC<MyProgressBarProps> = ({ fileState }) => {
  const [file, setFile] = fileState;
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) setFile(null);
  }, [file]);

  return <div className="progress-bar" style={{ width: `${progress}%` }} />;
};

export default MyProgressBar;
