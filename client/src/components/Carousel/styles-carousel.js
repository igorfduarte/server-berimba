import styled from "styled-components";

export const Content = styled.div`
  //display: flex;
  //flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 18px 26px;
`;

export const CarouselTitle = styled.div`
  margin-bottom: 23px;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
`;

export const CarouselStyle = styled.div`
  display: flex;
  overflow-x: hidden;
  white-space: nowrap;
  width: 880px; // 4 cards each 220px (200px width + 10px margin on each side)
  align-items: center;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
  }
`;

export const ArrowButton = styled.button`
  font-size: 24px;
  position: absolute;
  padding: 10px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border:none;                     //1px solid #ccc;
  border-radius: 8px;
  padding: 24px;
  margin: 10px;
  min-width: 304px;
  width: 304px;
  height: 462px;

  scroll-snap-align: start;
`;

export const CardImage = styled.div`
  position: relative;
  margin-bottom: 40px;
  img {
    width: 176px;
    height: 176px;
    border-radius: 50%;
  }

  .favButton {
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    top: 2px;
    right: 2px;
  }

  /* .heart-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  } */

  svg {
    width: 24px;
    height: 22px;
    background-color: none;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 160%;
  }

  span {
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;

export const PurchaseCard = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  

  .counter {
    display: flex;
    gap: 8px;
  }

  button {
    //margin: 5px;
    max-width: 246px;
    height: 56px;
    border-radius: 8px;
    padding: 12px 24px;
    white-space: nowrap;
    
  }

  p {
    font-weight: 700;
    line-height: 160%;
    text-align: center;
  }

  .counter span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 20px;
    line-height: 160%;
    align-items: center;
    
  }
`;
