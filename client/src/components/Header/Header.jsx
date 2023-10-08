import React from 'react';
// Importe o ícone de logout de sua escolha
import { MdOutlineLogout } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { Container, Logo, SearchBar, CreateDishButton, Logout } from './styles-header';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Logo>
        <div className="logo">
          <img src={logo} alt="Food Explorer logo" />
          <h1>Food Explorer</h1>
        </div>
      </Logo>
      <SearchBar>
        <label>
         <FiSearch size={24} />
         <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </label>
      </SearchBar>
      <CreateDishButton>Novo prato</CreateDishButton>
      <Logout>
        <MdOutlineLogout />
        
      </Logout>
    </Container>
  );
}
