import React from "react";
import { Container, Banner, CarouselTitle } from "./styles-home";
import Carousel from "../../components/Carousel/Carousel";
import background from "../../assets/Mask-group.png";

export default function Home() {
  return (
    <Container>
      <Banner>
        <img src={background} alt="imagem de macarrons" />

        <div className="banner">
          <div className="title">
            <h1>Sabores inigualáveis</h1>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </div>
      </Banner>
      <CarouselTitle>Refeições</CarouselTitle>
      <Carousel />
      <CarouselTitle>Sobremesas</CarouselTitle>
      <Carousel />
      <CarouselTitle>Bebidas</CarouselTitle>
      <Carousel />
    </Container>
  );
}
