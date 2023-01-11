import React from "react";
import { Thumbnail2Styled } from "./Thumbnail2.styled";
import { Typography, Link } from "../../../_shared";

export const Thumbnail2 = () => {
  return (
    <Thumbnail2Styled>
      <Typography variant="h3">zx7 speaker</Typography>
      <Link variant="secondary" to="/speakers/zx7-speaker">
        See product
      </Link>
    </Thumbnail2Styled>
  );
};
