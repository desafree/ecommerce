import styled from "styled-components";
import React from "react";

export const ProductsSuggestionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 160px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
