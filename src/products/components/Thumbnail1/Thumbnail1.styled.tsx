import { styled } from "@mui/material";
import React from "react";

export const Thumbnail1Styled = styled("div")(({ theme }) => ({
  background: "#d87d4a",
  display: "flex",
  gap: "100px",
  alignItems: "center",
  padding: "133px 95px",
  overflow: "hidden",

  a: {
    alignSelf: "flex-start",
  },

  img: {
    maxWidth: "400px",
    marginBottom: "-200px",
  },

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: "100px 0",

    img: {
      marginBottom: "0",
    },

    div: {
      alignItems: "center",
    },

    a: {
      alignSelf: "center",
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: "100px 50px",
  },
}));
