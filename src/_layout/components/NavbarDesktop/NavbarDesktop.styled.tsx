import styled from "styled-components";

export const NavbarDesktopStyled = styled.nav`
  background: black;

  & > div {
    padding-top: 36px;
    padding-bottom: 36px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
