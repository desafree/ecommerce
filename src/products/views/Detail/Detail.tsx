import React from "react";
import { Container } from "../../../_shared";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductsBySlug } from "../../slice";
import { ProductDetail } from "../../components";

export const Detail = () => {
  const { id: productSlug } = useParams<string>();
  const product = useSelector((state) =>
    selectProductsBySlug(state, productSlug)
  );

  return (
    <>
      <Container maxWidth={"lg"}>
        <ProductDetail productData={product}></ProductDetail>
      </Container>
    </>
  );
};
