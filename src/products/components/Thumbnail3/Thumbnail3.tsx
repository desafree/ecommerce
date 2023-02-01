import React from "react";
import { Thumbnail3Styled } from "./Thumbnail3.styled";
import {
  Typography,
  Link,
  Stack,
  ImageContainer,
  useTranslate,
} from "../../../_shared";
import { Animated } from "../../../_shared/animation/Animated";

export const Thumbnail3 = () => {
  const translate = useTranslate();

  return (
    <Animated Component={Thumbnail3Styled} animationRef="comeFromLeftOnView">
      <ImageContainer
        size="cover"
        url="/assets/home/desktop/image-earphones-yx1.jpg"
        position="center"
      />
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        style={{
          background: "#f1f1f1",
        }}
      >
        <Typography variant="h3">
          {translate("product-previews.yx1")}
        </Typography>
        <Link variant="secondary" to="/earphones/yx1-earphones">
          {translate("productAction.see")}
        </Link>
      </Stack>
    </Animated>
  );
};
