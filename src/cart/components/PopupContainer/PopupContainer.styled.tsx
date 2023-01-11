import styled from "styled-components";

export const PopupContainerStyled = styled.div`
  margin-left: auto;
  margin-right: 200px;
  margin-top: 100px;
  background: #ffffff;
  border-radius: 8px;
  padding: 30px;
  width: 377px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin: 0;
    width: 350px;
  }
`;
