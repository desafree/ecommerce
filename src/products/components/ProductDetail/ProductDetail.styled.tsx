import { styled } from "@mui/material";

export const ProductDetailStyled = styled("section")(({ theme }) => ({
  padding: "160px 0",
  [theme.breakpoints.down("md")]: {
    padding: "100px 0",
  },
}));
