import React from "react";
import { Thumbnail3Styled } from "./Thumbnail3.styled";
import { Typography, Button } from "../../../_shared";

export const Thumbnail3 = () => {
  return (
    <Thumbnail3Styled>
      <div className="img-container"></div>
      <div className="text">
        <Typography variant="h3">YX1 EARPHONES</Typography>
        <Button variant="black">SEE PRODUCT</Button>
      </div>
    </Thumbnail3Styled>
  );
};
