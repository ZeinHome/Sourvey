import { InputWrapper, CustomInput } from './AnswerOptionsInput.style';

function AnswerOptionsInput({ handleInputChange, valueInput }) {
  return (
    <InputWrapper>
      <CustomInput
        value={valueInput}
        onChange={e => handleInputChange(e)}
        type="text"
        placeholder="Введите ваш ответ"
      />
    </InputWrapper>
  );
}

export default AnswerOptionsInput;
