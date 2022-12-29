import React from "react";
import { Container, useTranslate } from "../../../_shared";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components";
import { HalfSectionList } from "../../../_shared";
import { useSelectProductBySlug } from "../../hooks";
import { ProductImages } from "../../components";
import { ProductsSuggestion } from "../../components";
import { Categories } from "../../components";
import { HalfSectionImage } from "../../../_shared";

export const Detail = () => {
  const { id: productSlug } = useParams<string>();
  const product = useSelectProductBySlug(productSlug!);
  const translate = useTranslate();

  const galleryList: [string, string, string] = [
    product!.gallery.first.desktop,
    product!.gallery.second.desktop,
    product!.gallery.third.desktop,
  ];

  return (
    <>
      <Container maxWidth="lg">
        <ProductDetail productData={product!} />
        <HalfSectionList
          descriptionTitle={translate("detail.features")}
          listTitle={translate("detail.contain")}
          description={product!.features}
          list={product!.includes}
        />
        <ProductImages imageList={galleryList} />
        <ProductsSuggestion suggestions={product!.others} />
        <Categories></Categories>
        <HalfSectionImage
          title={translate("info.title")}
          text={translate("info.description")}
          imgUrl="/assets/shared/desktop/image-best-gear.jpg"
        ></HalfSectionImage>
      </Container>
    </>
  );
};
