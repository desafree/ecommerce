import { styled } from "@mui/material";

export const ImageContainerStyled = styled("figure")`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  --height: 0%;
  img {
    width: 100%;
    // position: absolute;
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: var(--height);
    bottom: 0;
    left: 0;
    background: #000000;
  }
`;
