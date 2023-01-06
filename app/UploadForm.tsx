"use client";

import { ChangeEvent, FC, useState } from "react";
import MyProgressBar from "./ProgressBar";

const MyUploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"]; // combine fileState with errorState?

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png of jpeg)");
    }
  };

  return (
    <form>
      <label htmlFor="up-img">
        <input type="file" name="up-img" id="up-img" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && (
          <div className="error">Please select an image file (png of jpeg)</div>
        )}
        {file && (
          <>
            <div>{file.name}</div>
            <MyProgressBar fileState={[file, setFile]} />
          </>
        )}
      </div>
    </form>
  );
};

export default MyUploadForm;
