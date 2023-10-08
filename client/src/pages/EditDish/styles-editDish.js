import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 300px;
  height: 100vh;
  min-height: 100%;

  overflow: auto;
  overflow: overlay;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1212px;
  height: 100vh;
  margin: auto;
  padding: 35px 40px;

  .buttondelete {
    display: flex;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    justify-content: center;
    height: 48px;
    margin-top: 175px;
    width: 200px;
    align-items: center;
    margin-left: 680px;
    

  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }

  header {
    margin-bottom: 32px;
    justify-content: center;

    > h1 {
      margin-top: 25px;
      font-size: 32px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 45px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 32px;

  button:first-child {
  }

  > div p {
    margin-bottom: 8px;
  }
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .dishImage {
    width: 100%;
    //padding: 16px 14px;

    > label {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      padding: 16px 14px;
      border-radius: 5px;
    }

    > p {
      margin-bottom: 16px;
    }
  }

  .dishName {
    width: 400px;
  }

  .dishCategory select {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border-radius: 5px;
    border: none;

    height: 48px;
    width: 364px;

    padding: 12px;

    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .ingredientsTag {
    width: 837px;
    

  
  
  }

  .textarea {
    width: 1120px;
    height: 48px;
  }

  .price {
    width: 251px;
    margin-top: 17px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  margin-left: 925px;

  height: 48px;
  padding: 12px 33px;
  gap: 8px;
  border: 0;
  border-radius: 5px;

  font-weight: 500;
  font-size: 14px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
