import { styled } from "@mui/material";
import React from "react";

interface Props {
  imageList: [string, string, string];
}

export const ProductImagesStyled = styled("section")<Props>(
  ({ imageList, theme }) => ({
    marginBottom: "160px",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    height: "600px",
    gridGap: "30px",

    [".container1"]: {
      gridArea: "1 / 1 / 3 / 3",
      backgroundImage: `url(${imageList[0]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    [".container2"]: {
      gridArea: "3 / 1 / 5 / 3",
      backgroundImage: `url(${imageList[1]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    [".container3"]: {
      gridArea: "1 / 3 / 5 / 6",
      backgroundImage: `url(${imageList[2]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(7, 1fr)",
      gridColumnGap: "0px",
      gridRowGap: "0px",
      gridGap: "20px",
      [".container1"]: {
        gridArea: "1 / 1 / 4 / 2",
      },
      [".container2"]: {
        gridArea: "4 / 1 / 6 / 2",
      },
      [".container3"]: {
        gridArea: "6 / 1 / 8 / 2",
      },
    },
  })
);
