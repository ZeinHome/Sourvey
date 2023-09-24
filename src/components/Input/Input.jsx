import { InputWrapper, CustomInput } from './Input.style';

function Input({ handleInputChange, valueInput }) {
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

export default Input;
