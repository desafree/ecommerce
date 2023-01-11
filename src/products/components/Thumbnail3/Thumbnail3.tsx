import React from "react";
import { Thumbnail3Styled } from "./Thumbnail3.styled";
import { Typography, Link } from "../../../_shared";

export const Thumbnail3 = () => {
  return (
    <Thumbnail3Styled>
      <div className="img-container"></div>
      <div className="text">
        <Typography variant="h3">YX1 EARPHONES</Typography>
        <Link variant="secondary" to="/earphones/yx1-earphones">
          SEE PRODUCT
        </Link>
      </div>
    </Thumbnail3Styled>
  );
};
