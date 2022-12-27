import React, { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { NavbarDesktop } from "../NavbarDesktop";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarDesktop />
      {children}
      <Footer />
    </>
  );
};
