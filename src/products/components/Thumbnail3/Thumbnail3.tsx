import React from "react";
import { Thumbnail3Styled } from "./Thumbnail3.styled";
import { Typography, Link, useTranslate } from "../../../_shared";

export const Thumbnail3 = () => {
  const translate = useTranslate();

  return (
    <Thumbnail3Styled>
      <div className="img-container"></div>
      <div className="text">
        <Typography variant="h3">
          {translate("product-previews.yx1")}
        </Typography>
        <Link variant="secondary" to="/earphones/yx1-earphones">
          {translate("productAction.see")}
        </Link>
      </div>
    </Thumbnail3Styled>
  );
};
