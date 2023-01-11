import styled from "styled-components";
import React from "react";

export const FooterAboutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;

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

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    flex-direction: column;
    gap: 50px;
    ul {
      align-self: center;
    }
  }
`;
