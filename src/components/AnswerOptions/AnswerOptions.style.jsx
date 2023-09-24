import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 20px;

  /* ${props =>
    props.currentQuestion === 6
      ? `
    width: calc(100% - 22px);
  `
      : null}
  ${props =>
    props.currentQuestion === 7
      ? `
      flex-direction: row;
  `
      : null}
        ${props =>
    props.currentQuestion === 8
      ? `
      flex-direction: row;
  `
      : null} */
`;

export const Button = styled.button`
  width: 350px;
  height: 55px;

  background-color: #ff8a00;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${props => (props.selected ? '#985401' : '#ff8a00')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #985401;
  }

  /* @media screen and (min-width: 481px) and (max-width: 800px) {
    max-width: 200px;
  }
  @media screen and (max-width: 480px) {
    width: 217px;

    ${props =>
    props.currentQuestion === 5 ||
    props.currentQuestion === 7 ||
    props.currentQuestion === 8
      ? `
        width: 150px;
  `
      : null} */
  /* } */
`;
