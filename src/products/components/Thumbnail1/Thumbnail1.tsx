import React from "react";
import { Thumbnail1Styled } from "./Thumbnail1.styled";
import { Typography, Link, Stack, useTranslate } from "../../../_shared";

export const Thumbnail1 = () => {
  const translate = useTranslate();

  return (
    <Thumbnail1Styled>
      <img
        src="/assets/home/desktop/image-speaker-zx9.png"
        alt=""
        style={{ width: "100%" }}
      />

      <Stack spacing={3} direction="column">
        <Typography variant="h2" style={{ color: "white" }}>
          {translate("product-previews.zx9.title")}
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "24px",
            marginBottom: "40px",
            color: "rgba(255, 255, 255, 0.75)",
          }}
        >
          {translate("product-previews.zx9.description")}
        </Typography>
        <Link
          variant="secondary"
          to="/speakers/zx9-speaker"
          dataTestId="zx9-speaker-go-to"
        >
          {translate("productAction.see")}
        </Link>
      </Stack>
    </Thumbnail1Styled>
  );
};
