import styled from "styled-components";
import React from "react";

export const HeaderStyled = styled.header`
  background: black;
  padding-top: 128px;
  padding-bottom: 165px;

  @media screen and (max-width: 1000px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
