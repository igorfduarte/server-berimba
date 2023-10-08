import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  width: 100%;
  min-width: 350px;
  height: 100vh;
  align-items: flex-start; /* Alinha os elementos verticalmente ao topo */

  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px; /* Adicione uma margem à esquerda para separar a imagem do conteúdo */
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto; /* Impede que a imagem se estenda para ocupar todo o espaço disponível */
  margin-right: 100px; /* Adicione uma margem à direita para separar a imagem do conteúdo */
  margin-left: -25px;
  margin-top: 50px;

  img {
    height: 380px;
    width: 390px;
  }
`;

export const InfoContainer = styled.div`
  
  flex: 1; /* Permite que o conteúdo ocupe o espaço restante na linha */
  margin-top: 100px;
  font-family: "Poppins", sans-serif;

  h2 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 8px; /* Adicione um espaço entre o nome do prato e a descrição */
  }

  p {
    width: 687px;
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 24px;
  }

  .tags-container {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;

    span {
      display: flex;
      align-items: center;

      background-color:  ${({ theme }) => theme.COLORS.BLUE_300};;
      padding: 4px 8px;
      margin-right: 5px;
      border-radius: 4px;
      font-size: 14px;
      
      
      height: 32px;
      width: 85px;
    }
  }

  .counter-container {
    display: flex;
    align-items: center;
    //gap: 32px;

    button {
      background-color: transparent;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
      
      
    }

    span {
      font-size: 20px;
      margin: 0 10px;
      
    }
  }

  button {
    //background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
  }  
`;

export const PurshaseCard =styled.div`
display: flex;
gap: 32px;

`;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 100%;
//   min-width: 350px;
//   height: 100vh;
// `;
