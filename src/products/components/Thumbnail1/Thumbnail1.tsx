import React from "react";
import { Thumbnail1Styled } from "./Thumbnail1.styled";
import { Typography, Link, useTranslate } from "../../../_shared";

export const Thumbnail1 = () => {
  const translate = useTranslate();

  return (
    <Thumbnail1Styled>
      <div className="img-container">
        <img src="/assets/home/desktop/image-speaker-zx9.png" alt="" />
      </div>
      <div className="text">
        <Typography variant="h2">
          {translate("product-previews.zx9.title")}
        </Typography>
        <Typography variant="body1">
          {translate("product-previews.zx9.description")}
        </Typography>
        <Link variant="secondary" to="/speakers/zx9-speaker">
          {translate("productAction.see")}
        </Link>
      </div>
    </Thumbnail1Styled>
  );
};
