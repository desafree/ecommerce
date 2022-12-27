import React from "react";
import { HeaderStyled } from "./Header.styled";
import { Typography } from "../../../_shared/components";
import { useTranslate, Button, Container } from "../../../_shared";

export const Header = () => {
  const translate = useTranslate();

  return (
    <HeaderStyled>
      <Container maxWidth={"lg"}>
        <Typography variant={"subtitle1"}>
          {translate("header.subtitle")}
        </Typography>
        <Typography variant={"h1"}>{translate("header.title")}</Typography>
        <Typography variant={"body1"}>
          {translate("header.description")}
        </Typography>
        <Button variant={"orange"}>{translate("header.button")}</Button>
      </Container>
    </HeaderStyled>
  );
};
