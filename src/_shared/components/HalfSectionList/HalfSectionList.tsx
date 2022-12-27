import React, { FC } from "react";
import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "../Box";

interface Props {
  title1: string;
  text1: string;
  title2: string;
  list: { quantity: number; item: string }[];
}

export const HalfSectionList: FC<Props> = ({ title1, text1, title2, list }) => {
  return (
    <Grid container={true} alignItems={"flex-start"} columnSpacing={"125px"}>
      <Grid item={true} xs={12} md={8}>
        <Box mb={3}>
          <Typography variant={"h3"}>{title1}</Typography>
        </Box>

        <Typography variant={"body1"}>{text1}</Typography>
      </Grid>
      <Grid item={true} xs={12} md={4}>
        <Box mb={3}>
          <Typography variant={"h3"}>{title2}</Typography>
        </Box>

        <List>
          {list.map((item) => {
            return (
              <ListItem disableGutters={true} disablePadding={true}>
                <Box mr={2}>
                  <Typography variant={"subtitle1"}>
                    {String(item.quantity) + "x"}
                  </Typography>
                </Box>{" "}
                <Typography variant={"body1"}>{item.item}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};
