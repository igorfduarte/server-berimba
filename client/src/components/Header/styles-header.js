import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;

width: 100%;
height: 104px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

display: flex;
justify-content: space-between; // Mantém os elementos distribuídos uniformemente
align-items: center;
padding: 24px 123px;
`;

export const Logo = styled.div`
display: flex;
flex-direction: row; // Alinha os elementos horizontalmente
align-items: center;
gap: 10px;

.logo {
  display: flex;
  gap: 10px;
  height: 30px;
  width: 30px;
}

h1 {
    font-size: 24px;
    white-space: nowrap;
    font-weight: 700;
}
`;

export const SearchBar = styled.div`
// flex-grow foi removido para reduzir o tamanho da barra de pesquisa
// Defina a largura desejada aqui
min-width: 581px; 
border-radius: 5px;

align-self: center;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

input {
width: 100%;
height: 48px;
padding: 16px;
border-radius: 5px;
border: none;
background-color: transparent;
color: ${({ theme }) => theme.COLORS.GRAY_200};

/* color: ${({ theme }) => theme.COLORS.GRAY_200}; */
}

label {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 16px;
}
`;

export const CreateDishButton = styled.button`

background-color: ${({ theme }) => theme.COLORS.RED};
color: white;
padding: 12px 32px;
border: none;
border-radius: 5px;
cursor: pointer;
width: 216px;
`;

export const Logout = styled.div`
background-color: none;
border: none;
cursor: pointer;
/* Adicione estilos para o ícone de logout aqui */

svg {
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: none;
  font-size: 32px;
}
`;