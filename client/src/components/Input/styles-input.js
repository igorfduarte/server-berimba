import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > input {
    height: 48px;
    width: 100%;
    border: none;

    padding: 16px 14px;
    border-radius: 5px;
    

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 14px;
  }
`;