import React, { FC } from "react";
import { TotalRow } from "../TotalRow";
import { useTranslate, Stack } from "../../../_shared";

interface Props {
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

export const Totals: FC<Props> = ({ total, shipping, vat, grandTotal }) => {
  const translate = useTranslate();

  return (
    <Stack direction="column" spacing={1}>
      <TotalRow
        title={translate("checkout.summary.total")}
        value={total}
      ></TotalRow>
      <TotalRow
        title={translate("checkout.summary.shipping")}
        value={shipping}
      ></TotalRow>
      <TotalRow
        title={translate("checkout.summary.vat")}
        value={vat}
      ></TotalRow>
      <TotalRow
        title={translate("checkout.summary.grand-total")}
        value={grandTotal}
      ></TotalRow>
    </Stack>
  );
};
