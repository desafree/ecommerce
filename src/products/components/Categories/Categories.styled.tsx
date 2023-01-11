import { styled } from "@mui/material";

export const CategoriesStyled = styled("section")(({ theme }) => ({
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  padding: "200px 0 168px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "150px",
    padding: "150px 0 100px",
  },
}));
