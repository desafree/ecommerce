import styled from "styled-components";
import React from "react";

export const FooterAboutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  p {
    max-width: 540px;
    font-family: "Manrope";
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  ul {
    display: flex;
    gap: 16px;
    align-self: flex-end;
    list-style: none;

    .icon {
      transition: all 0.5s;
    }

    .icon:hover {
      fill: #d87d4a;
    }
  }
`;
