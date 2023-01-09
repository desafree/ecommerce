import React, { FC } from "react";
import { TotalRow } from "../TotalRow";
import { useTranslate, Stack } from "../../../_shared";
import {
  calculateVat,
  calculateShipping,
  calculateGrandTotal,
} from "../../utils";

interface Props {
  total: number;
}

export const Totals: FC<Props> = ({ total }) => {
  const translate = useTranslate();

  return (
    <Stack direction="column" spacing="8px">
      <TotalRow
        title={translate("checkout.summary.total")}
        value={total}
      ></TotalRow>
      <TotalRow
        title={translate("checkout.summary.shipping")}
        value={calculateShipping(total)}
      ></TotalRow>
      <TotalRow
        title={translate("checkout.summary.vat")}
        value={calculateVat(total)}
      ></TotalRow>
      <TotalRow
        title={translate("checkout.summary.grand-total")}
        value={calculateGrandTotal(total)}
      ></TotalRow>
    </Stack>
  );
};
