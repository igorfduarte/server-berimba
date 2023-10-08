import styled from 'styled-components'

export const Container = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;

 width: 100%;
 height: 48px;
 padding: 12px 33px;
 gap: 8px;
 border: 0;
 border-radius: 5px;

 font-weight: 500;
 font-size: 14px;

 color: ${({ theme }) => theme.COLORS.WHITE};
 background: ${({ theme }) => theme.COLORS.RED};
`;



/* width: 100%;
 height: 48px;
 padding: 12px 32px;
 border: 0;
 border-radius: 16px;

 font-weight: 500;
 font-size: 14px;
 font-family: 'Poppins', sans-serif;


 color: ${({ theme }) => theme.COLORS.WHITE};
 background-color: ${({ theme }) => theme.COLORS.RED};

 &:disabled {
  opacity: 0.5; 
 } */