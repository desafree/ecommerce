import React, { FC } from "react";
import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { Section } from "../../../_layout";
import { ImageContainerStyled } from "./ImageContainer.styled";
import { Animated } from "../../animation/Animated";

interface Props {
  title: string;
  text: string;
  imgUrl: string;
}

export const HalfSectionImage: FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <Section>
      <Grid container alignItems="center" justifyContent="center" spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" style={{ marginBottom: "16px" }}>
            {title}
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <Animated animationRef="imageReveal" Component={ImageContainerStyled}>
            <img src={imgUrl} alt="" />
          </Animated>
        </Grid>
      </Grid>
    </Section>
  );
};
