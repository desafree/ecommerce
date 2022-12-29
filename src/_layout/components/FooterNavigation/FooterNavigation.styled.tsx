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
    li {
      a {
        font-family: "Manrope";
        font-size: 13px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 2px;
        text-align: left;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.5s;

        &:hover {
          color: #d87d4a;
        }
      }
    }
  }
`;
