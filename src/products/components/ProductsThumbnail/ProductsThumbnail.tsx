import React from "react";
import { Thumbnail1 } from "../Thumbnail1";
import { Thumbnail2 } from "../Thumbnail2";
import { Thumbnail3 } from "../Thumbnail3";
import { Stack } from "../../../_shared";

export const ProductsThumbnail = () => {
  return (
    <Stack
      direction="column"
      spacing={5}
      style={{ marginBottom: "200px", overflow: "hidden" }}
    >
      <Thumbnail1 />
      <Thumbnail2 />
      <Thumbnail3 />
    </Stack>
  );
};
