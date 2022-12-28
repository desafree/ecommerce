import React, { FC } from "react";
import { Typography } from "../Typography";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "../Box";
import { HalfSectionListStyled } from "./HalfSectionList.styled";

interface Props {
  title1: string;
  text1: string;
  title2: string;
  list: { quantity: number; item: string }[];
}

export const HalfSectionList: FC<Props> = ({ title1, text1, title2, list }) => {
  return (
    <HalfSectionListStyled>
      <div>
        <Box mb={3}>
          <Typography variant="h3">{title1}</Typography>
        </Box>

        <Typography variant={"body1"}>{text1}</Typography>
      </div>
      <div>
        <Box mb={3}>
          <Typography variant="h3">{title2}</Typography>
        </Box>
        <List>
          {list.map((item) => {
            return (
              <ListItem disableGutters={true} disablePadding={true}>
                <Typography variant={"subtitle1"}>
                  {String(item.quantity) + "x"}
                </Typography>
                <Box ml={3}>
                  <Typography variant={"body1"}>{item.item}</Typography>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </div>
    </HalfSectionListStyled>
  );
};
