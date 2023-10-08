import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  width: 837px;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  /* border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BLUE_300}; */

  svg {
    vertical-align: middle;
  }

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > input {
    max-width: 133px;
    width: 118px;
    height: 28px;
    border-radius: 8px;
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
