import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomInput = styled.input`
  width: 300px;

  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;

  /* @media screen and (max-width: 768px) {
    width: 198px;
  } */
`;

export const Button = styled.button`
  width: 320px;
  height: 40px;

  background-color: #ff8a00;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #985401;
  }
`;
