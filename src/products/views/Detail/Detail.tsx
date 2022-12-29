import React from "react";
import { Container, useTranslate } from "../../../_shared";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components";
import { HalfSectionList } from "../../../_shared";
import { useSelectProductBySlug } from "../../hooks";

export const Detail = () => {
  const { id: productSlug } = useParams<string>();
  const product = useSelectProductBySlug(productSlug!);
  const translate = useTranslate();

  return (
    <>
      <Container maxWidth="lg">
        <ProductDetail productData={product!} />
        <HalfSectionList
          title1={translate("detail.features")}
          title2={translate("detail.contain")}
          text1={product!.features}
          list={product!.includes}
        />
      </Container>
    </>
  );
};
