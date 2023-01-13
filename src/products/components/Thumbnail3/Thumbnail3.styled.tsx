import { styled } from "@mui/material";
import React from "react";

export const Thumbnail3Styled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "30px",
  div: {
    flexBasis: "50%",
    borderRadius: "8px",
    padding: "100px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));
