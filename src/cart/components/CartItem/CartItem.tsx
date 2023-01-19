import React, { FC } from "react";
import { CartItemStyled } from "./CartItem.styled";
import { ItemType } from "../../types";
import { ButtonItem } from "../ButtonItem";
import { removeLastWord } from "../../utils/removeLastWord";
import { Box, Typography } from "../../../_shared";

interface Props {
  data: ItemType;
}

export const CartItem: FC<Props> = ({ data }) => {
  return (
    <CartItemStyled>
      <img src={data.image} alt={data.name} />
      <Box>
        <Typography variant="body1" dataTestId="cart-item-name">
          {removeLastWord(data.name, " ")}
        </Typography>
        <Typography variant="body1" dataTestId="cart-item-price">
          {"$ " + data.price}
        </Typography>
      </Box>
      <ButtonItem qty={data.qty} id={data.id} />
    </CartItemStyled>
  );
};
