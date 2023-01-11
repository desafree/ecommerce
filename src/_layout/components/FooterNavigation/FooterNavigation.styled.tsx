import styled from "styled-components";

export const FooterNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  a:first-child {
    margin-right: auto;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 34px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    a:first-child {
      margin-right: 0;
    }

    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`;
