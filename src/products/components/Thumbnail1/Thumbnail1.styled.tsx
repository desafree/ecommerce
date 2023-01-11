import styled from "styled-components";
import { Button, Typography } from "../../../_shared/components";
import React from "react";

export const Thumbnail1Styled = styled.div`
  background: #d87d4a;
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 133px 95px;
  overflow: hidden;

  button {
    align-self: flex-start;
  }

  img {
    max-width: 400px;
    margin-bottom: -200px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 100px 0;

    img {
      margin-bottom: 0;
    }

    div {
      align-items: center;
    }

    button {
      align-self: center;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 100px 50px;
  }
`;
