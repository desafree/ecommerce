import React from "react";
import { Header } from "../../components";
import { Container } from "../../../_shared/components";
import { Categories } from "../../components";
import { ProductsThumbnail } from "../../components";
import { HalfSectionImage } from "../../../_shared/components";
import { useTranslate } from "../../../_shared/i18n";
import { Animated } from "../../../_shared/animation/Animated";

const StaggeredProva = () => {
  return (
    <Animated animationRef="fadeInStaggered" component="ul" StaggeredContainer>
      <Animated
        animationRef="fadeIn"
        component="li"
        StaggeredItem
        style={{ color: "black" }}
      >
        prova
      </Animated>
      <Animated
        animationRef="fadeIn"
        component="li"
        StaggeredItem
        style={{ color: "black" }}
      >
        prova
      </Animated>
      <Animated
        animationRef="fadeIn"
        component="li"
        StaggeredItem
        style={{ color: "black" }}
      >
        prova
      </Animated>
      <Animated
        animationRef="fadeIn"
        component="li"
        StaggeredItem
        style={{ color: "black" }}
      >
        prova
      </Animated>
    </Animated>
  );
};

export const Home = () => {
  const translate = useTranslate();

  return (
    <>
      {/*      <StaggeredProva />*/}
      <Header />
      <Container maxWidth="lg">
        <Categories />
        <ProductsThumbnail />

        <HalfSectionImage
          title={translate("info.title")}
          text={translate("info.description")}
          imgUrl="/assets/shared/desktop/image-best-gear.jpg"
        ></HalfSectionImage>
      </Container>
    </>
  );
};
