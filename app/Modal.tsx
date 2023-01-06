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
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  );
};

export default MyModal;
