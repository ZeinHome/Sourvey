import { InputWrapper, CustomInput } from './AnswerOptionsInput.style';
import { Button } from '../AnswerOptions/AnswerOptions.style';

function AnswerOptionsInput({
  handleInputChange,
  setOtherButton,
  valueInput,
  otherButton,
}) {
  return (
    <InputWrapper>
      {otherButton ? (
        <CustomInput
          value={valueInput}
          onChange={e => handleInputChange(e)}
          type="text"
          placeholder="Введите ваш ответ"
        />
      ) : (
        <Button onClick={() => setOtherButton(true)}>Другое</Button>
      )}
    </InputWrapper>
  );
}

export default AnswerOptionsInput;
