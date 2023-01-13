import { styled } from "@mui/material";

export const OrderRecapContainerStyled = styled("div")(({ theme }) => ({
  padding: "48px",
  background: "#ffffff",
  borderRadius: "8px",
  maxWidth: "600px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    maxWidth: "300px",
    maxHeight: "90vh",
    overflowY: "scroll",

    img: {
      width: "50px",
    },
  },
}));
