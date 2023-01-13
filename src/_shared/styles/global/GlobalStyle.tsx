import { GlobalStyles as GlobalStylesMUI } from "@mui/material";

export const GlobalStyle = () => {
  return (
    <GlobalStylesMUI
      styles={{
        "*,*::after,*::before": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },

        body: {
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "25px",
          textAlign: "left",
          color: "#F2F2F2",
          backgroundColor: "#f8f8fb",
          minHeight: "100vh",
        },
      }}
    ></GlobalStylesMUI>
  );
};
