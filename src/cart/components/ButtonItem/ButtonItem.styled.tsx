import styled from "styled-components";

export const ButtonItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
  margin-left: auto;
  & > button {
    background: #f1f1f1;
    border: none;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: #c3c3c3;
      border: none;
    }
  }
`;
