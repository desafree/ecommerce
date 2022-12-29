import React, { FC } from "react";
import { Typography } from "../Typography";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "../Box";
import { HalfSectionListStyled } from "./HalfSectionList.styled";

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
    <HalfSectionListStyled>
      <div>
        <Box mb={3}>
          <Typography variant="h3">{descriptionTitle}</Typography>
        </Box>

        <Typography variant="body1">{description}</Typography>
      </div>
      <div>
        <Box mb={3}>
          <Typography variant="h3">{listTitle}</Typography>
        </Box>
        <List>
          {list.map((item) => {
            return (
              <ListItem disableGutters disablePadding key={item.item}>
                <Typography variant="subtitle1">
                  {String(item.quantity) + "x"}
                </Typography>
                <Box ml={3}>
                  <Typography variant="body1">{item.item}</Typography>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </div>
    </HalfSectionListStyled>
  );
};
