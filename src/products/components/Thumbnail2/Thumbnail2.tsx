import React from "react";
import { Thumbnail2Styled } from "./Thumbnail2.styled";
import { Typography, Link, useTranslate } from "../../../_shared";

export const Thumbnail2 = () => {
  const translate = useTranslate();

  return (
    <Thumbnail2Styled>
      <Typography variant="h3" style={{ marginBottom: "32px" }}>
        {translate("product-previews.zx7")}
      </Typography>
      <Link variant="secondary" to="/speakers/zx7-speaker">{translate("productAction.see")}</Link>
    </Thumbnail2Styled>
  );
};
