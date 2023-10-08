import { Container, Form, Logo } from './styles-signin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import axios from 'axios';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // funçao que será chamada quando o usuario apertar o botao de enviar
  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      email,
      password,
    }
    const url_da_api = 'http://localhost:4000'

    try {
      const response = await axios.post(`${url_da_api}/user/login`, requestBody);

      //se a resposta do servidor conter um "user", entao o email/senha estao corretos
      if (response.data.user) {

        navigate('/home');
      } else {

        alert('Email ou senha inválidos!');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <Container>
      <Logo>
        <div className="logo">
          <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C" />
          </svg>
          <h1>food explorer</h1>
        </div>
      </Logo>

      <Form onSubmit={handleSubmit}>
        <h2>Faça login</h2>

        <div className="inputs">
          <p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input placeholder="no mínimo 6 caracteres" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button title="Entrar" type="submit" />

        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  );
}
