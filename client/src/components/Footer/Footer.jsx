import React from "react";
import { Container, Logo, Content } from "./styles-footer";

import logo_gray from '../../assets/logo_gray.svg'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Content>
          <Logo>
            <div className="logo">
             <img src={logo_gray} alt="Food Explorer logo" />
             <span>Food Explorer</span>
            </div>
          </Logo>
          <p>
             © 2023 - Todos os direitos reservados.
          </p>
        </Content>
      </Container>
    </footer>
  );
}
