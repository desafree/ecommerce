import { styled } from "@mui/material";

export const HalfSectionListStyled = styled("section")(({ theme }) => ({
  display: "flex",
  gap: "125px",
  marginBottom: "160px",
  ["div:first-child"]: {
    flexBasis: "70%",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
    ["div:first-child"]: {
      flexBasis: "100%",
    },
  },
}));
