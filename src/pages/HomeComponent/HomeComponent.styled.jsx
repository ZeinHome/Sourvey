import styled, { keyframes } from 'styled-components';
import akralesImage from '../../images/akrales.jpg';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background-image: url(${akralesImage});
  background-size: cover;
  background-position: center;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  height: 100vh;
  padding: 0 20px;
  border-left: 1px solid hsla(0, 0%, 100%, 0.16);
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const StartPageLine = styled.div`
  width: 38px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;

  animation: 1s ${fadeInAnimation} ease-out;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;

  animation: 1s ${fadeInAnimation} ease-out;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 22px;
  border-radius: 5px;
  color: #000;
  background-image: linear-gradient(to right, #ff9a9e, #fad0c4);
  cursor: pointer;
  animation: 1s ${fadeInAnimation} ease-out;
  transition: background-image 0.5s;

  &:hover {
    background-image: linear-gradient(to right, #a18cd1, #fbc2eb);
  }
`;
