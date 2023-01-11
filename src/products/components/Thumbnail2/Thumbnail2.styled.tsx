import { styled } from "@mui/material";
import React from "react";

export const Thumbnail2Styled = styled("div")(({ theme }) => ({
  backgroundImage: 'url("/assets/home/desktop/image-speaker-zx7.jpg")',
  backgroundSize: "cover",
  padding: "101px 95px",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    backgroundPosition: "center",
  },
}));
