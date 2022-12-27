import React from "react";
import { useParams } from "react-router-dom";
import { Category as CategoryType } from "../../types";
import { Container, useTranslate, HalfSectionImage } from "../../../_shared";
import {
  CategoryHeader,
  HalfSectionProduct,
  Categories,
} from "../../components";
import { selectProductsByCategory } from "../../slice";
import { useSelector } from "react-redux";

type CategoryParams = {
  category: CategoryType;
};

export const Category = () => {
  const { category } = useParams<CategoryParams>();
  const translation = useTranslate();
  const products = useSelector((state) =>
    selectProductsByCategory(state, category)
  );

  return (
    <>
      <CategoryHeader category={category!} />
      <Container maxWidth={"lg"}>
        {products.map((product, index) => {
          return (
            <HalfSectionProduct
              direction={index % 2 === 0 ? "right" : "left"}
              product={product.slug}
            ></HalfSectionProduct>
          );
        })}
        <Categories></Categories>
        <HalfSectionImage
          title={translation("info.title")}
          text={translation("info.description")}
          imgUrl={"/assets/shared/desktop/image-best-gear.jpg"}
        ></HalfSectionImage>
      </Container>
    </>
  );
};
