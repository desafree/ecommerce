import { styled } from "@mui/material";

export const CategoryPreviewStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "350px",
  background: "#f1f1f1",
  position: "relative",

  [".img-container"]: {
    top: "-100px",
    width: "250px",
    position: "absolute",
  },

  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
}));
