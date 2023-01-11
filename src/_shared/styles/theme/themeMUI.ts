import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    transparent: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    smallBold: React.CSSProperties;
    goBack: React.CSSProperties;
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
    transparent: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    smallBold?: React.CSSProperties;
    goBack?: React.CSSProperties;
    primary?: React.CSSProperties;
    secondary?: React.CSSProperties;
    transparent?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    smallBold: true;
    goBack: true;
    primary: true;
    secondary: true;
    transparent: true;
  }
}

export let theme = createTheme();

theme = createTheme(theme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "24px 18px;",
          },
          "& fieldset": {
            borderRadius: "8px",
          },
          "& .MuiInputBase-input:focus + fieldset": {
            border: `2px solid orange`,
            color: "orange",
          },
          "& label": {
            "&.Mui-focused": {
              color: "orange",
            },
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: "rgba(0, 0, 0, 0.5)",
            minWidth: "0",
            padding: "0",
          },
        },
        {
          props: { variant: "primary" },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "13px",
            padding: "15px 30px",
            background: "#D87D4A",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: "13px",
            lineHeight: "17.76px",
            letterSpacing: "1px",
            border: "1px solid #D87D4A",
            color: "#FFF",
            "&:hover": {
              background: "#FBAF85",
              color: "#FFF",
              border: "1px solid #FBAF85",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "13px",
            padding: "15px 30px",
            background: "#FFF",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: "13px",
            lineHeight: "17.76px",
            letterSpacing: "1px",
            border: "1px solid #000",
            color: "#000",
            "&:hover": {
              background: "#000",
              color: "#FFF",
              border: "1px solid #000",
            },
          },
        },
        {
          props: { variant: "transparent" },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "13px",
            padding: "15px 30px",
            background: "transparent",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: "13px",
            lineHeight: "17.76px",
            letterSpacing: "1px",
            border: "none",
            color: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              background: "transparent",
              color: "#D87D4A",
            },
          },
        },
      ],
    },
  },
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        lineHeight: "46px",
        textAlign: "center",
      },
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
    goBack: {
      display: "inline-block",
      fontFamily: "Manrope",
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "25px",
      letterSpacing: "0px",
      textAlign: "left",
      color: "rgba(0, 0, 0, 0.5) !important",
      textDecoration: "none !important",
      marginBottom: "30px",
    },
    primary: {
      fontFamily: "Manrope",
      padding: "15px 30px",
      background: "#D87D4A",
      borderRadius: 0,
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "17.76px",
      letterSpacing: "1px",
      color: "#FFF !important",
      textTransform: "uppercase",
      textDecoration: "none !important",
    },
    secondary: {
      fontFamily: "Manrope",
      padding: "15px 30px",
      background: "#FFF",
      borderRadius: 0,
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "17.76px",
      letterSpacing: "1px",
      color: "#000 !important",
      textDecoration: "none !important",
      border: "1px solid #000",
      textTransform: "uppercase",
    },
    transparent: {
      fontFamily: "Manrope",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "13px",
      padding: "15px 30px",
      background: "transparent",
      borderRadius: 0,
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "17.76px",
      letterSpacing: "1px",
      border: "none",
      color: "rgba(0, 0, 0, 0.5) !important",
      textDecoration: "none !important",
      textTransform: "uppercase",
    },
  },
});
