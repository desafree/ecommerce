import React from "react";
import { FooterAboutStyled } from "./FooterAbout.styled";
import { useTranslate } from "../../../_shared";
import { ReactComponent as Facebook } from "./icon-facebook.svg";
import { ReactComponent as Twitter } from "./icon-twitter.svg";
import { ReactComponent as Instagram } from "./icon-instagram.svg";

export const FooterAbout = () => {
  const translation = useTranslate();

  return (
    <FooterAboutStyled>
      <p>{translation("footer.text")}</p>
      <ul>
        <li>
          <a href="/">
            <Facebook fill="white" className={"icon"} />
          </a>
        </li>
        <li>
          <a href="/">
            <Twitter fill="white" className={"icon"} />
          </a>
        </li>
        <li>
          <a href="/">
            <Instagram fill="white" className={"icon"} />
          </a>
        </li>
      </ul>
    </FooterAboutStyled>
  );
};
