import React from "react";
import { Container } from "../../../_shared";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductsBySlug } from "../../slice";
import { ProductDetail } from "../../components";
import { HalfSectionList } from "../../../_shared";

export const Detail = () => {
  const { id: productSlug } = useParams<string>();
  const product = useSelector((state) =>
    selectProductsBySlug(state, productSlug)
  );

  return (
    <>
      <Container maxWidth={"lg"}>
        <ProductDetail productData={product} />
        <HalfSectionList
          title1={"features"}
          title2={"in the box"}
          text1={product.features}
          list={product.includes}
        />
      </Container>
    </>
  );
};
