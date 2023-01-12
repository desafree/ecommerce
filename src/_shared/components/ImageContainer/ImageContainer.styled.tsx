import styled from "styled-components";

interface Props {
  url: string;
  size: "cover" | "contain";
  position: "center" | "left" | "right" | "bottom";
}

export const ImageContainerStyled = styled.div<Props>`
  background-image: url(${(props) => props.url});
  background-size: ${(props) => props.size};
  background-position: ${(props) => props.position};
`;
