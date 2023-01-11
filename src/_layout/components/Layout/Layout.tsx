import React, { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { NavbarDesktop } from "../NavbarDesktop";
import { useScrollToTop } from "../../../_shared";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  useScrollToTop();

  return (
    <>
      <NavbarDesktop />
      {children}
      <Footer />
    </>
  );
};
