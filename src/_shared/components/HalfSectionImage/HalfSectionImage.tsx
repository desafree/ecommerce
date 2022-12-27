import React, { FC } from "react";
import { Grid } from "../Grid/Grid";
import { Typography } from "../Typography";
import { Box } from "../Box";
import { Section } from "../../../_layout";

interface Props {
  title: string;
  text: string;
  imgUrl: string;
}

export const HalfSectionImage: FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <Section>
      <Grid container={true} alignItems={"center"}>
        <Grid item={true} xs={12} md={6}>
          <Box mr={5}>
            <Box mb={3}>
              <Typography variant={"h3"}>{title}</Typography>
            </Box>{" "}
            <Typography variant={"body1"}>{text}</Typography>
          </Box>
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <div className="container">
            <img src={imgUrl} alt="" />
          </div>
        </Grid>
      </Grid>
    </Section>
  );
};
