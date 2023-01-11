import React, { FC } from "react";
import { Typography, Stack, useTranslate } from "../../../_shared";

interface Props {
  total: number;
}
export const OrderTotalRecap: FC<Props> = ({ total }) => {
  const translate = useTranslate();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      spacing={1}
      style={{ background: "black", padding: "41px 33px", height: "100%" }}
    >
      <Typography
        variant="subtitle1"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {translate("checkout.detail.total")}
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        {"$" + total}
      </Typography>
    </Stack>
  );
};
