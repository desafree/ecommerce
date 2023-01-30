import React, { forwardRef } from "react";
import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { Section } from "../../../_layout";

interface Props {
  title: string;
  text: string;
  imgUrl: string;
}

export const HalfSectionImage = forwardRef<HTMLElement, Props>(
  ({ title, text, imgUrl }, ref) => {
    return (
      <Section ref={ref}>
        <Grid container alignItems="center" justifyContent="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" style={{ marginBottom: "16px" }}>
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <img
              src={imgUrl}
              alt=""
              style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
            />
          </Grid>
        </Grid>
      </Section>
    );
  }
);
