import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: #f2f0f0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 50px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;

  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

// export const SurveyWrapper = styled.div`
//   display: flex;
//   gap: 20px;

//   ${props =>
//     props.currentQuestion === 5 &&
//     `
//     justify-content: center;
//     align-items: center;
//   `}
//   ${props =>
//     props.currentQuestion === 7
//       ? `
//       justify-content: center;
//   `
//       : null}
//         ${props =>
//     props.currentQuestion === 8
//       ? `
//       justify-content: center;
//   `
//       : null}
// `;

// export const BtnNo = styled(StyledButton)`
//   background-color: ${props => (props.btnActionNo ? '#985401' : '#ff8a00')};
// `;

// export const CustomInput = styled(Input)`
//   width: 310px;

//   @media screen and (max-width: 400px) {
//     width: calc(100% - 22px);
//   }
// `;

// export const CheckboxBlock = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 10px;
//   font-size: 16px;
//   color: #333;

//   cursor: pointer;
// `;

// export const CheckBtn = styled.input`
//   width: 16px;
//   height: 16px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   margin-right: 8px;
// `;

// export const LabelSelect = styled.label`
//   font-size: 20px;
// `;

// export const SelectOption = styled.select`
//   padding: 5px;
//   border-radius: 10px;
//   font-size: 16px;
//   margin-left: 10px;

//   & option {
//     color: #333;
//     font-size: 16px;
//     background-color: #f0f0f0;
//   }
// `;

// export const BoxBtn = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// `;

// export const StyledTextArea = styled.textarea`
//   display: block;
//   resize: none;
//   width: calc(100% - 22px);
//   min-height: 60px;
//   padding-left: 15px;
//   padding-top: 12px;
//   border: 1px solid rgba(33, 33, 33, 0.2);
//   border-radius: 10px;
// `;

// export const StyledTextAreaTwo = styled(StyledTextArea)`
//   width: calc(100% - 20px);
// `;
