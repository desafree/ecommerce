import { styled } from "@mui/material";

export const FooterNavigationStyled = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ["a:first-child"]: {
    marginRight: "auto",
  },

  ul: {
    display: "flex",
    listStyle: "none",
    gap: "34px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
    ["a:first-child"]: {
      marginRight: 0,
    },

    ul: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
