import styled from "styled-components";
import React from "react";

export const Thumbnail3Styled = styled.div`
  display: flex;
  gap: 30px;
  div {
    flex-basis: 50%;
    border-radius: 8px;

    &.img-container {
      background-image: url("/assets/home/desktop/image-earphones-yx1.jpg");
      background-size: cover;
      background-position: center;
    }

    &.text {
      background: #f1f1f1;
      padding: 101px 95px;

      h3 {
        margin-bottom: 32px;
      }
    }
  }
`;
