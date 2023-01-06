"use client";

import { motion } from "framer-motion";
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
        <motion.div
          className="img-wrap"
          key={id}
          onClick={() => setSelectedImg(url)}
          whileHover={{ opacity: 1 }}
          layout
        >
          <motion.img
            src={url}
            alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MyImageGrid;
