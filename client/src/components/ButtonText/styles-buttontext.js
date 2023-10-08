import styled from "styled-components";

export const Container = styled.button`
 display: flex;
 align-items: center;
 text-align: end;
 //margin-left: 15px;
 

 font-size: 24px;
 font-family: 'Popins', sans-serif;

 border: none;
 gap: 8px;

 background: none;
 color: ${({ theme }) => theme.COLORS.WHITE};
 
`;