import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-family: "Manrope";
    color: black;
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
  }
  input {
    padding: 24px 18px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
  }
`;
