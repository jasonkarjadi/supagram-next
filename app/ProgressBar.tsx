"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};

export default MyProgressBar;
