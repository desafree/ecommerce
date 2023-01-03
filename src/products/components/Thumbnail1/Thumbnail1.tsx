import React from "react";
import { Thumbnail1Styled } from "./Thumbnail1.styled";
import { Typography, Button } from "../../../_shared";

export const Thumbnail1 = () => {
  return (
    <Thumbnail1Styled>
      <div className="img-container">
        <img src="/assets/home/desktop/image-speaker-zx9.png" alt="" />
      </div>
      <div className="text">
        <Typography variant="h2">ZX9 SPEAKER</Typography>
        <Typography variant="body1">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Typography>
        <Button variant="secondary">see product</Button>
      </div>
    </Thumbnail1Styled>
  );
};
