import styled from "styled-components";

export const CategoryPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  background: #f1f1f1;
  position: relative;

  h6 {
    padding-top: 116px;
  }

  .img-container {
    top: -100px;
    width: 250px;
    position: absolute;
    img {
      width: 100%;
    }
  }
`;
