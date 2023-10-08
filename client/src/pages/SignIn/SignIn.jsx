import { Container, Form, Logo } from "./styles-signin";

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button'

export default function SignIn() {
  return (
    <Container>

      <Logo>
        <div className="logo">
          <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
          </svg>
          <h1>food explorer</h1>
        </div>
      </Logo>

      <Form>
        <h2>Faça login</h2>

        <div className="inputs">
          <p>Email</p>
          <Input
           placeholder="Exemplo: exemplo@exemplo.com.br"
           type="text" 
          />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input 
           placeholder="no mínimo 6 caracteres"
           type="password" 
          />
        </div>

        <Button title="Entrar" />

        <a href="#">
          Criar uma conta
        </a>

      </Form>
    </Container>
  )
}