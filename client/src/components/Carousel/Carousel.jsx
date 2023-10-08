import React, { useState, useRef } from "react";



import rabanello from "../../assets/Maskgroup.png";


import { Button } from "../Button/Button";
import { ButtonText } from "../ButtonText/ButtonText";

import { AiOutlineHeart } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";

import {
  Content,
  Card,
  CardImage,
  CardInfo,
  PurchaseCard,
  CarouselStyle,
  ArrowButton,
} from "./styles-carousel";

export default function Carousel() {
  const [count, setCount] = useState(0);
  const carouselRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Salada Ravanallo",
      description: "Description 1",
      price: 10,
    },
    {
      id: 2,
      name: "Spaguetti Gambe  ",
      description: "Description 2",
      price: 20,
    },
    { id: 3, name: "Product 3", description: "Description 3", price: 30 },
    { id: 4, name: "Product 4", description: "Description 3", price: 30 },
    { id: 5, name: "Product 5", description: "Description 3", price: 30 },
    { id: 6, name: "Product 6", description: "Description 3", price: 30 },
    { id: 7, name: "Product 7", description: "Description 3", price: 30 },
    // Add more products as needed
  ];

  const scrollAmount = 300; // Scroll amount in pixels

  const cardWidth = 220;
  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const newScrollPosition =
        scrollPosition + (direction === "left" ? -cardWidth : cardWidth);
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Content>
      <CarouselStyle ref={carouselRef}>
        <ArrowButton onClick={() => handleScroll("left")}>←</ArrowButton>
        {products.map((product, index) => (
          <Card key={index}>
            <CardImage>
              <img src={rabanello} alt={product.name} />
              {/* <div className="heart-icon">
                  <img src={heart} alt="coração" />
                </div> */}
              <button className="favButton">
                <AiOutlineHeart />
              </button>
            </CardImage>
            <CardInfo>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>R${product.price}</span>
              <PurchaseCard>
                <div className="counter">
                  <ButtonText
                    icon={FiMinus}
                    onClick={() => setCount(count - 1)}
                  />
                  <span>{count}</span>
                  <ButtonText
                    icon={FiPlus}
                    onClick={() => setCount(count + 1)}
                  />
                </div>
                <Button title="incluir" />
              </PurchaseCard>
            </CardInfo>
          </Card>
        ))}
        <ArrowButton onClick={() => handleScroll("right")}>→</ArrowButton>
      </CarouselStyle>
    </Content>
  );
}












