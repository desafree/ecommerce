import React from "react";
import { Thumbnail2Styled } from "./Thumbnail2.styled";
import { Typography, Link, useTranslate } from "../../../_shared";
import { Animated } from "../../../_shared/animation/Animated";

export const Thumbnail2 = () => {
  const translate = useTranslate();

  return (
    <Animated Component={Thumbnail2Styled} animationRef="comeFromRightOnView">
      <Typography variant="h3">{translate("product-previews.zx7")}</Typography>
      <Link variant="secondary" to="/speakers/zx7-speaker">
        {translate("productAction.see")}
      </Link>
    </Animated>
  );
};
