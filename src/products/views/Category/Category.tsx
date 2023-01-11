import React from "react";
import { useParams } from "react-router-dom";
import { Category as CategoryType } from "../../types";
import {
  Container,
  useTranslate,
  HalfSectionImage,
  useScrollToTop,
} from "../../../_shared";
import {
  CategoryHeader,
  HalfSectionProduct,
  Categories,
} from "../../components";
import { useSelectProductByCategory } from "../../hooks";

type CategoryParams = {
  category: CategoryType;
};

export const Category = () => {
  useScrollToTop();
  const { category } = useParams<CategoryParams>();
  const translate = useTranslate();
  const products = useSelectProductByCategory(category!);

  return (
    <>
      <CategoryHeader category={category!} />
      <Container maxWidth="lg">
        {products.map((product, index) => {
          return (
            <HalfSectionProduct
              direction={index % 2 === 0 ? "right" : "left"}
              product={product.slug}
              key={product.id}
            ></HalfSectionProduct>
          );
        })}
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
