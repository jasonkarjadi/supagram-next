import { FC, ReactNode } from "react";
import { noto_serif } from "../constants";
import "./styles.scss";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={noto_serif.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
