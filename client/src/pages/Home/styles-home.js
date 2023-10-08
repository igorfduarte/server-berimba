import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 350px;

  overflow: auto;
  overflow: overlay;
`;

export const Content = styled.div``;

export const Banner = styled.div`
  text-align: center;
  justify-content: space-between;
  font-family: "Popins", sans-serif;

  margin-bottom: 62px;

  .banner {
    /* background: (
      180deg,
      ${({ theme }) => theme.COLORS.BLUE_400} %,
      ${({ theme }) => theme.COLORS.BLUE_500} 100%
    ); */
    background-color: ${({ theme }) => theme.COLORS.BLUE_400};
    width: 1120px;
    border-radius: 8px;
    position: relative;
    -webkit-box-shadow: 0px 0px 10px 5px #193746;
    box-shadow: 0px 0px 10px 5px #193746;
  }

  title {
    padding: 10px;
  }

  img {
    width: 100%;
    margin-bottom: -27px;
  }

  h1 {
    line-height: 140%;
    font-size: 40px;
    font-weight: 500;

    margin-bottom: 8px;
  }

  span {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  @media only screen and (min-width: 1060px) {
    position: relative;
    margin-top: 164px;

    .banner {
      display: flex;
      justify-content: end;
    }

    .title {
      width: 540px;
      height: 260px;

      padding: 87px 46px 0 0;

      text-align: right;
    }

    img {
      width: 656px;
      position: absolute;
      bottom: 13px;
      z-index: 1;
      left: -50px;
    }
  }
`;

export const CarouselTitle = styled.h2`
  margin: 20px 0;
`;
