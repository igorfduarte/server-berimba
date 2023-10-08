import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 77px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
`;

export const Logo = styled.div`
 .logo {
  display: flex;
  gap: 11px;

  align-items: center;
  white-space: nowrap;
 }

 span {
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  font-weight: 700;
  flex-wrap: nowrap;
 }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1212px;
  padding: 0 40px;
  margin: auto;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

 > p {
  font-size: 14px;
  text-align: right;
 }
`;