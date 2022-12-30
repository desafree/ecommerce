import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    smallBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    smallBold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    smallBold: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      lineHeight: "58px",
      letterSpacing: "2px",
      textAlign: "left",
      color: "#000000",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "44px",
      letterSpacing: "1.43px",
      textAlign: "left",
      color: "#000000",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "36px",
      letterSpacing: "1.14px",
      textAlign: "left",
      color: "#000000",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "38.25px",
      letterSpacing: "2px",
      textAlign: "left",
      color: "#000000",
      textTransform: "uppercase",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32.78px",
      letterSpacing: "1.71px",
      textAlign: "left",
      color: "#000000",
      textTransform: "uppercase",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "24.59px",
      letterSpacing: "1.29px",
      textAlign: "left",
      color: "#000000",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "25px",
      textAlign: "left",
      color: "#000000",
    },
    overline: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19.12px",
      textAlign: "left",
      letterSpacing: "10px",
      color: "#D87D4A",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: "25px",
      textAlign: "left",
      letterSpacing: "0.93px",
      color: "#D87D4A",
      textTransform: "uppercase",
    },
    smallBold: {
      fontFamily: "Manrope",
      color: "black",
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: "18px",
      letterSpacing: "1px",
      textAlign: "center",
    },
  },
});
