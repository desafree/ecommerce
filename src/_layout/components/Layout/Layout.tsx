import React, { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { NavbarDesktop } from "../NavbarDesktop";
import { useScrollToTop,useWindowSize } from "../../../_shared";
import { NavBarMobile } from "../NavBarMobile";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  useScrollToTop();

  const { width } = useWindowSize();

  return (
    <>
      {width > 768 ? <NavbarDesktop /> : <NavBarMobile />}
      {children}
      <Footer />
    </>
  );
};
