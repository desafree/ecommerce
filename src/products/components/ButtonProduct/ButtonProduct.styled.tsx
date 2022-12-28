import styled from "styled-components";
import React from "react";

export const ButtonProductStyled = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 47px;
  div {
    display: flex;
    background: #f1f1f1;
    button {
      border: none;
      padding: 20px;
      cursor: pointer;
      font-family: "Manrope";
      font-size: 13px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 1px;
      text-align: center;
      color: rgba(0, 0, 0, 0.25);
    }

    p {
      font-family: "Manrope";
      padding: 20px;
      color: black;
      font-size: 13px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 1px;
      text-align: center;
    }
  }
`;
