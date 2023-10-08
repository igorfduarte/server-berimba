import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 100%;
  
  display: flex;
  flex-direction: row;
  
  //margin: 141px 108px;
  padding: 141px 108px;
  
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: left;
 margin-left: auto;
 padding: 64px;
 border-radius: 16px;

 max-width: 476px;
 width: 100%;
 height: 540px;

 background-color: ${({ theme }) => theme.COLORS.BLUE_200};

 > h2 {
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  margin-bottom: 32px;
  /* color: ${({ theme }) => theme.COLORS.WHITE} */
 }

 > .inputs p {
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}

 > a {
  font-size: 14px;
  
  margin-top: 32px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE}
 }

 > .inputs {
  margin-bottom: 32px;
  margin-top: 32px;
 }
 `;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  /* margin-bottom: 40px; */
  padding-right: 50px;
  margin-right: 50px;
  

  h1 {
    font-size: clamp( 30px, 30px + 1.5vw, 42.48px);
    white-space: nowrap;
    font-weight: 700;
  }

  .logo {
    display: flex;
    gap: 19px;
  }

  svg {
    height: 50px;
    width: 50px;
  }
`;