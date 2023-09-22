import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1396px;
  height: 100vh;

  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 20px 15px;
    height: 100%;
    ${props =>
      props.currentQuestion === 0 ||
      props.currentQuestion === 1 ||
      props.currentQuestion === 3 ||
      props.currentQuestion === 4 ||
      (props.currentQuestion === 5 && !props.firstPath) ||
      props.currentQuestion === 6 ||
      props.currentQuestion === 7 ||
      props.currentQuestion === 8
        ? `
    height: 100vh;
  `
        : null}
  }
`;

export const CombinedContainer = styled.div`
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
