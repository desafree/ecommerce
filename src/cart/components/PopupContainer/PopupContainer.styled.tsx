import { styled } from "@mui/material";

export const PopupContainerStyled = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "200px",
  marginTop: "100px",
  background: "#ffffff",
  borderRadius: "8px",
  padding: "30px",
  width: "377px",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    margin: 0,
    width: "350px",
  },
}));
