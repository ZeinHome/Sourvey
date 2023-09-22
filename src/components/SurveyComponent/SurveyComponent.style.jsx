import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: #f5f5f5;
`;

// export const Wrapper = styled.div`
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

// `;

// export const Title = styled.h2`
//   text-align: center;

//   font-size: 36px;
//   font-weight: 700;
//   letter-spacing: 1px;

//   @media screen and (max-width: 480px) {
//     font-size: 28px;
//   }
// `;

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

// export const BtnWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;

//   ${props =>
//     props.currentQuestion === 6
//       ? `
//     width: calc(100% - 22px);
//   `
//       : null}
//   ${props =>
//     props.currentQuestion === 7
//       ? `
//       flex-direction: row;
//   `
//       : null}
//         ${props =>
//     props.currentQuestion === 8
//       ? `
//       flex-direction: row;
//   `
//       : null}
// `;

// export const StyledButton = styled.button`
//   width: 300px;

//   background-color: #ff8a00;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s ease;

//   background-color: ${props =>
//     props.selected || props.btnActionYes ? '#985401' : '#ff8a00'};

//   &:hover {
//     background-color: #985401;
//   }

//   @media screen and (min-width: 481px) and (max-width: 800px) {
//     max-width: 200px;
//   }
//   @media screen and (max-width: 480px) {
//     width: 217px;

//     ${props =>
//       props.currentQuestion === 5 ||
//       props.currentQuestion === 7 ||
//       props.currentQuestion === 8
//         ? `
//         width: 150px;
//   `
//         : null}
//   }
// `;

// export const BtnNo = styled(StyledButton)`
//   background-color: ${props => (props.btnActionNo ? '#985401' : '#ff8a00')};
// `;

// export const Input = styled.input`
//   width: 278px;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin-top: 8px;

//   @media screen and (max-width: 768px) {
//     width: 198px;
//   }
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

// export const Submit = styled.div`
//   display: flex;
//   justify-content: right;

//   margin-top: 20px;
// `;

// export const SubmitBtn = styled.button`
//   background-color: #000;
//   color: #fff;
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #00000099;
//   }
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
