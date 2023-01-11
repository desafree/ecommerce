import styled from "styled-components";

export const CategoriesStyled = styled.section`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 200px 0 168px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 150px;
    padding: 150px 0 100px;
  }
`;
