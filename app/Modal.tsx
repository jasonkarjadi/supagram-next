import { motion } from "framer-motion";
import { Dispatch, FC, MouseEvent, SetStateAction } from "react";

interface MyModalProps {
  selectedImgState: [string, Dispatch<SetStateAction<string>>];
}

const MyModal: FC<MyModalProps> = ({ selectedImgState }) => {
  const [selectedImg, setSelectedImg] = selectedImgState;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("backdrop")) {
      setSelectedImg("");
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-1rem" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default MyModal;
