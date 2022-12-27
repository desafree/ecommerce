import { ButtonTypes } from "../types/types/ButtonTypes";

export const defineStyleForButton = (variant: ButtonTypes) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "15px 30px",
    background:
      variant === "orange"
        ? "#D87D4A"
        : variant === "black"
        ? "#FFF"
        : "transparent",
    borderRadius: 0,
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "17.76px",
    letterSpacing: "1px",
    border: `1px solid ${
      variant === "orange"
        ? "#D87D4A"
        : variant === "black"
        ? "#000"
        : "transparent"
    }`,
    color:
      variant === "orange"
        ? "#FFF"
        : variant === "black"
        ? "#000"
        : "rgba(0, 0, 0, 0.5)",
    "&:hover": {
      background:
        variant === "orange"
          ? "#FBAF85"
          : variant === "black"
          ? "#000"
          : "transparent",
      color:
        variant === "orange"
          ? "#FFF"
          : variant === "black"
          ? "#FFF"
          : "#D87D4A",
      border: `1px solid ${
        variant === "orange"
          ? "#FBAF85"
          : variant === "black"
          ? "#000"
          : "transparent"
      }`,
    },
  };
};
