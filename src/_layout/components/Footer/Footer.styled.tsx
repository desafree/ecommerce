import { styled } from "@mui/material";

export const FooterStyled = styled("footer")(({ theme }) => ({
  background: "#101010",
  padding: "75px 0px",
  [theme.breakpoints.down("md")]: {
    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
