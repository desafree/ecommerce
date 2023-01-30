import { styled } from "@mui/material";

export const CartPopupStyled = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.3)",
  zIndex: 99999,

  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
