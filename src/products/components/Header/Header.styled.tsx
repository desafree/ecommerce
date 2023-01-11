import { styled } from "@mui/material";
import React from "react";

export const HeaderStyled = styled("header")(({ theme }) => ({
  background: "black",
  paddingTop: "128px",
  paddingBottom: "165px",
  [theme.breakpoints.down("lg")]: {
    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
