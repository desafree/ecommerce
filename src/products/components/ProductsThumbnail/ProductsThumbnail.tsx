import React from "react";
import { Section } from "../../../_layout";
import { Thumbnail1 } from "../Thumbnail1";
import { Thumbnail2 } from "../Thumbnail2";
import { Thumbnail3 } from "../Thumbnail3";
import { Stack } from "../../../_shared";

export const ProductsThumbnail = () => {
  return (
    <Section>
      <Stack direction="column" spacing="48px">
        <Thumbnail1 />
        <Thumbnail2 />
        <Thumbnail3 />
      </Stack>
    </Section>
  );
};
