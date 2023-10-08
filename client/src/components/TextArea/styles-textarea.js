import styled from "styled-components";

export const Container = styled.textarea`
 width: 100%;
 height: 172px;
 padding: 14px;
 display: flex;
 flex-direction: column;

 resize: none;

 border-radius: 5px;
 border: none;
 background-color: ${({ theme }) => theme.BACKGROUND_800};
`;