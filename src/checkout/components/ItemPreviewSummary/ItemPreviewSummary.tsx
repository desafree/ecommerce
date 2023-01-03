import React, { FC } from "react";
import { ItemPreviewSummaryStyled } from "./ItemPreviewSummary.styled";
import { Box, Typography } from "../../../_shared";

/*TODO after rebase*/
interface Props {
  data: { name: string; price: number; image: string; qty: number; id: number };
}

export const ItemPreviewSummary: FC<Props> = ({ data }) => {
  return (
    <ItemPreviewSummaryStyled>
      <img src={data.image} alt="" />
      <Box>
        <Typography variant="smallBold">{data.name}</Typography>
        <Typography variant="smallBold">{String(data.price)}</Typography>
      </Box>
      <Typography variant="body1">{"x" + data.qty}</Typography>
    </ItemPreviewSummaryStyled>
  );
};
