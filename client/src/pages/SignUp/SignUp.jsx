import { Container, Form, Logo } from "./styles-signup";
import {useState} from 'react'
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button'

export default function SignUp() {

   const [name,setName] = useState("")
  const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")


  // // funçao que será chamada quando o usuario apertar o botao de enviar
  // const handleSubmit = async () =>{
  //   try {
  //     const response = await axios.post('http://localhost:4000/endpoint', {
  //       name: 'Seu Nome',
  //       email: 'seu.email@example.com',
  //       password: 'suaSenha123'
  //     });
  //     console.log('Data posted successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error posting data:', error);
  //   }

  // }


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

      <Form
      >
        <h2>Crie sua Conta</h2>

        <div className="inputs">
          <p>Seu nome</p>
          <Input
           placeholder="Exemplo: Maria da silva"
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="inputs">
          <p>Email</p>
          <Input
           placeholder="Exemplo: exemplo@exemplo.com.br"
           type="text" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input 
           placeholder="no mínimo 6 caracteres"
           type="password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" 
          type="submit"
        />

        <a href="#">
          Já tenho uma conta
        </a>

      </Form>
    </Container>
  )
}