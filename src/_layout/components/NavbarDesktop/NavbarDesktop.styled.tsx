import { styled } from "@mui/material";

export const NavbarDesktopStyled = styled("nav")(({ theme }) => ({
  background: "black",
  ".desktop, .mobile": {
    paddingTop: "36px",
    paddingBottom: "36px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    button: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
    },
  },
  ".mobile": {
    display: "none",
  },

  [theme.breakpoints.down("md")]: {
    ".mobile": {
      display: "flex",
    },
    ".desktop": {
      display: "none",
    },
  },
}));
