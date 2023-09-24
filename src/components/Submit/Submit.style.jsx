import styled from 'styled-components';

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const SubmitBtn = styled.button`
  width: 150px;

  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00000099;
  }
`;
