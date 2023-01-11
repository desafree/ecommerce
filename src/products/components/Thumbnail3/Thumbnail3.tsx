import React from "react";
import { Thumbnail3Styled } from "./Thumbnail3.styled";
import {
  Typography,
  Button,
  Stack,
  ImageContainer,
  useTranslate,
} from "../../../_shared";

export const Thumbnail3 = () => {
  const translate = useTranslate();

  return (
    <Thumbnail3Styled>
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
        <Button variant="secondary">{translate("productAction.see")}</Button>
      </Stack>
    </Thumbnail3Styled>
  );
};
