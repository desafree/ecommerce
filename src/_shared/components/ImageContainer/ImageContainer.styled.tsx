import { styled } from "@mui/material";

interface Props {
  url: string;
  size: "cover" | "contain";
  position: "center" | "left" | "right" | "bottom";
  minHeight?: string;

}

export const ImageContainerStyled = styled("div")<Props>`
  background-image: url(${(props) => props.url});
  background-size: ${(props) => props.size};
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
  min-height: ${(props) => props.minHeight};
`;
