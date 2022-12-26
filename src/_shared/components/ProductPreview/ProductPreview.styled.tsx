import styled from "styled-components";

export const ProductPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;

  h6 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  button {
    align-self: stretch;
  }

  .img-container {
    width: 200px;

    img {
      width: 100%;
    }
  }
`;
