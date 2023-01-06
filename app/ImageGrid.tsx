"use client";

import { Dispatch, FC, SetStateAction } from "react";
import useRealtime from "../hooks/useRealtime";

type Row = { id: string; created_at: Date; url: string };

interface MyImageGridProps {
  setSelectedImg: Dispatch<SetStateAction<string>>;
}

const MyImageGrid: FC<MyImageGridProps> = ({ setSelectedImg }) => {
  const { rows } = useRealtime("public:images");

  return (
    <div className="img-grid">
      {(rows as Row[]).map(({ id, url }) => (
        <div className="img-wrap" key={id} onClick={() => setSelectedImg(url)}>
          <img src={url} alt="uploaded pic" />
        </div>
      ))}
    </div>
  );
};

export default MyImageGrid;
