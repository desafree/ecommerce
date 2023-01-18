import React, { FC } from "react";
import { Grid, Typography, Link, useTranslate } from "../../../_shared";
import { useSelectProductBySlug } from "../../hooks";

interface Props {
  product: string;
  direction: "right" | "left";
}

export const HalfSectionProduct: FC<Props> = ({ product, direction }) => {
  const productData = useSelectProductBySlug(product)!;

  const translate = useTranslate();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction={direction === "right" ? "row" : "row-reverse"}
      spacing={4}
      style={{ marginBottom: "160px" }}
    >
      <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        <img
          src={productData.image.desktop}
          alt={productData.name}
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {productData.new && (
          <Typography variant="overline">
            {translate("productAction.new")}
          </Typography>
        )}
        <Typography
          variant="h2"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          {productData.name}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "30px" }}>
          {productData.description}
        </Typography>
        <Link
          variant="primary"
          to={`/${productData.category}/${productData.slug}`}
          dataTestId={`${productData.slug}-go-to`}
        >
          {translate("productAction.see")}
        </Link>{" "}
      </Grid>
    </Grid>
  );
};
