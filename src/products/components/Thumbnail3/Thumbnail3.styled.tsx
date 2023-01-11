import styled from "styled-components";
import React from "react";

export const Thumbnail3Styled = styled.div`
  display: flex;
  gap: 30px;
  div {
    flex-basis: 50%;
    border-radius: 8px;
    padding: 100px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
