import React, { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { useScrollToTop } from "../../../_shared";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
