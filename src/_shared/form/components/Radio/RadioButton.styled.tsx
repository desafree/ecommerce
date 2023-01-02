import styled from "styled-components";

export const RadioButtonStyled = styled.div`
  display: flex;
  gap: 16px;
  padding: 18px 16px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 50%;
  margin-left: auto;

  input[type="radio"] {
    accent-color: #d87d4a;
  }

  &:has(input:checked) {
    border: 1px solid #d87d4a;
  }
`;
