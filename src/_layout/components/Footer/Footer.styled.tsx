import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: #101010;
  padding: 75px 0px;

  @media screen and (max-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
