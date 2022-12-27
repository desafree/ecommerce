import React, { FC, ReactNode } from "react";
import { Box as BoxMUI } from "@mui/material";

interface Props {
  m?: 0 | 1 | 2 | 3 | 4 | 5;
  mt?: 0 | 1 | 2 | 3 | 4 | 5;
  mb?: 0 | 1 | 2 | 3 | 4 | 5;
  ml?: 0 | 1 | 2 | 3 | 4 | 5;
  mr?: 0 | 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
}

export const Box: FC<Props> = ({
  m = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  children,
}) => {
  return (
    <BoxMUI m={m} mt={mt} mb={mb} ml={ml} mr={mr}>
      {children}
    </BoxMUI>
  );
};
