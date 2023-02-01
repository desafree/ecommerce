import React from "react";
import { FooterAboutStyled } from "./FooterAbout.styled";
import { useTranslate, Typography } from "../../../_shared";
import { ReactComponent as Facebook } from "./icon-facebook.svg";
import { ReactComponent as Twitter } from "./icon-twitter.svg";
import { ReactComponent as Instagram } from "./icon-instagram.svg";
import { Animated } from "../../../_shared/animation/Animated";

export const FooterAbout = () => {
  const translate = useTranslate();

  return (
    <Animated animationRef="fadeInOnView" Component={FooterAboutStyled}>
      <Typography variant="body1" style={{ color: "rgba(255,255,255,0.5)" }}>
        {translate("footer.text")}
      </Typography>
      <ul>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Facebook fill="white" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Twitter fill="white" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Instagram fill="white" className="icon" />
          </a>
        </li>
      </ul>
    </Animated>
  );
};
