import React from "react";
import { GoBackStyled } from "./GoBack.styled";
import { useGoBack } from "../../hooks";
import { useTranslate } from "../../../_shared";
import { Typography } from "../../../_shared";

export const GoBack = () => {
  const handleClick = useGoBack();
  const translate = useTranslate();
  return (
    <GoBackStyled onClick={handleClick}>
      <Typography variant="smallBold">
        {translate("productAction.back")}
      </Typography>
    </GoBackStyled>
  );
};
