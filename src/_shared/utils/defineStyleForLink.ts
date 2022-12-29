import { LinkTypes } from "../types";

export const defineStyleForLink = (variant: LinkTypes) => {
  return {
    display: variant === "goback" ? "inline-block" : "initial",
    fontFamily: "Manrope",
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "25px",
    letterSpacing: "0px",
    textAlign: "left",
    color: variant === "goback" ? "rgba(0, 0, 0, 0.5)" : "initial",
    textDecoration: "none",
    marginBottom: variant === "goback" ? "30px" : "0",
  };
};
