import { styled } from "@mui/material";
import React from "react";

export const ProductsSuggestionStyled = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  marginBottom: "160px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
