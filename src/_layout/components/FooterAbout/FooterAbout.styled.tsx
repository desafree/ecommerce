import { styled } from "@mui/material";
import React from "react";

export const FooterAboutStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
  marginTop: "36px",

  ul: {
    display: "flex",
    gap: "16px",
    alignSelf: "flexend",
    listStyle: "none",
  },

  ".icon": {
    transition: "all 0.5s",
    "&:hover": {
      fill: "#d87d4a",
    },
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
    flexDirection: "column",
    gap: "50px",
    ul: {
      alignSelf: "center",
    },
  },
}));
