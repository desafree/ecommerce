import React, { FC } from "react";
import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { Box } from "@mui/material";

interface Props {
  title: string;
  text: string;
  imgUrl: string;
}

export const HalfSectionImage: FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <Grid container={true} alignItems={"center"} columnSpacing={"125px"}>
      <Grid item={true} xs={12} md={6}>
        <Box mb={3}>
          <Typography variant={"h3"}>{title}</Typography>
          <Typography variant={"body1"}>{text}</Typography>
        </Box>
      </Grid>
      <Grid item={true} xs={12} md={6}>
        <div className="container">
          <img src={imgUrl} alt="" />
        </div>
      </Grid>
    </Grid>
  );
};
