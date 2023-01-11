import styled from "styled-components";

export const CartPopupStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
