import React from "react";
import { SummaryStyled } from "./Summary.styled";
import { Button, Typography, useTranslate } from "../../../_shared";
import { ItemsSummary } from "../ItemsSummary";
import { Totals } from "../Totals";

export const Summary = () => {
  const translate = useTranslate();

  return (
    <SummaryStyled>
      <Typography variant="h6">
        {translate("checkout.summary.title")}
      </Typography>
      <ItemsSummary />
      <Totals total={5396} />
      <Button type="submit">{translate("checkout.summary.continue")}</Button>
    </SummaryStyled>
  );
};
