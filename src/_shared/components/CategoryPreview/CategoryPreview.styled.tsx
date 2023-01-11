import styled from "styled-components";

export const CategoryPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  background: #f1f1f1;
  position: relative;

  .img-container {
    top: -100px;
    width: 250px;
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
