import styled from "styled-components";
import React from "react";

export const ItemPreviewSummaryStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /*  TODO: fix after rebase*/
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: auto;
  }

  img {
    width: 64px;
  }
`;
