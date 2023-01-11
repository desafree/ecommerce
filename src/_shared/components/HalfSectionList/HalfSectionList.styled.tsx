import styled from "styled-components";

export const HalfSectionListStyled = styled.section`
  display: flex;
  gap: 125px;
  margin-bottom: 160px;
  div:first-child {
    flex-basis: 70%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    div:first-child {
      flex-basis: 100%;
    }
  }
`;
