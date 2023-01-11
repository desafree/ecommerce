import styled from "styled-components";
import React from "react";

interface Props {
  imageList: [string, string, string];
}

export const ProductImagesStyled = styled.section<Props>`
  margin-bottom: 160px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 600px;
  grid-gap: 30px;

  .container1 {
    grid-area: 1 / 1 / 3 / 3;
    background-image: ${(props) => `url(${props.imageList[0]})`};
    background-size: cover;
    background-position: center;
  }
  .container2 {
    grid-area: 3 / 1 / 5 / 3;
    background-image: ${(props) => `url(${props.imageList[1]})`};
    background-size: cover;
    background-position: center;
  }
  .container3 {
    grid-area: 1 / 3 / 5 / 6;
    background-image: ${(props) => `url(${props.imageList[2]})`};
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-gap: 20px;

    .container1 {
      grid-area: 1 / 1 / 4 / 2;
    }
    .container2 {
      grid-area: 4 / 1 / 6 / 2;
    }
    .container3 {
      grid-area: 6 / 1 / 8 / 2;
    }
  }
`;
