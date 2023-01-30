import React, { FC } from "react";
import { Typography } from "../Typography";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { HalfSectionListStyled } from "./HalfSectionList.styled";
import { Stack } from "../Stack";
import { Animated } from "../../animation/Animated";

interface Props {
  descriptionTitle: string;
  description: string;
  listTitle: string;
  list: { quantity: number; item: string }[];
}

export const HalfSectionList: FC<Props> = ({
  descriptionTitle,
  description,
  listTitle,
  list,
}) => {
  return (
    <Animated component={HalfSectionListStyled} animationRef="fadeOnView">
      <Stack direction="column" spacing={3}>
        <Typography variant="h3">{descriptionTitle}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
      <Stack direction="column" spacing={3}>
        <Typography variant="h3">{listTitle}</Typography>
        <List>
          {list.map((item) => {
            return (
              <ListItem disableGutters disablePadding key={item.item}>
                <Typography variant="subtitle1">
                  {String(item.quantity) + "x"}
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "20px" }}>
                  {item.item}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Animated>
  );
};
