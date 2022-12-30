import { Link as LinkMUI } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { defineStyleForLink } from "../../utils/defineStyleForLink";
import { LinkTypes } from "../../types";

interface Props {
  children: ReactNode;
  to: string;
  variant?: LinkTypes;
}

export const Link: FC<Props> = ({ children, to, variant = "default" }) => {
  const style = defineStyleForLink(variant);

  return (
    <LinkMUI component={RouterLink} to={to} sx={style}>
      {children}
    </LinkMUI>
  );
};
