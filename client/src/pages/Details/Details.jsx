import React, { useState } from "react";
import {
  Container,
  Content,
  ImageContainer,
  InfoContainer,
  PurshaseCard
} from "./styles-details";

import { ButtonText } from "../../components/ButtonText/ButtonText";
import { Button } from "../../components/Button/Button";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";

import rabanello from "../../assets/Maskgroup.png";

export default function Details() {
  // Adicione o estado local para o contador
  const [contador, setContador] = useState(1); // Inicialize o contador com 1

  // Função para aumentar o contador
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  // Função para diminuir o contador
  const diminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  // Função para incluir o produto (você pode implementar essa parte de acordo com suas necessidades)
  const incluirProduto = () => {
    // Coloque aqui a lógica para incluir o produto com base no contador
    // Por exemplo, você pode enviar um pedido para o servidor aqui
    // ou atualizar o estado global da aplicação, dependendo da sua arquitetura
    console.log(`Incluir ${contador} pratos`);
  };

  return (
    <Container>
      <ButtonText title="voltar" icon={RiArrowLeftSLine} />
      <ImageContainer>
        <img src={rabanello} alt="Nome do Prato" />
      </ImageContainer>
      <InfoContainer>
        <h2>Nome do Prato</h2>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
          pão naan dá um toque especial.
        </p>
        <div className="tags-container">
          <span>alface</span>
          <span>cebola</span>
          <span>pão naan</span>
          <span>pepino</span>
          <span>rabanete</span>
          <span>tomate</span>
          {/* Adicione mais ingredientes conforme necessário */}
        </div>
        
        <PurshaseCard>
        {/* Adicione os botões de "mais" e "menos" com o contador */}
        <div className="counter-container">
          <ButtonText onClick={diminuirContador}
          icon={FiMinus}
          />
          <span>{contador}</span>
          <ButtonText onClick={aumentarContador}
          icon={FiPlus}
          />
          {/* Botão para incluir o produto */}
        </div>

        <Button
          title="incluir - R$ 25,00"
          onClick={incluirProduto}
          style={{ height: 48, width: 162, padding: "12px", whiteSpace: "nowrap"}}
        />
        </PurshaseCard>
      </InfoContainer>
    </Container>
  );
}

// import { Container } from './styles-details';
// import { Button } from '../../components/Button/Button';
// import { Header } from '../../components/Header';

// export function Details() {
//   return(
//     <Container>
//      <Header />

//      <Button title="Pedidos"/>
//     </Container>
//   )
// }
