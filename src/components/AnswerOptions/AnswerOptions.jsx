import { BtnWrapper, Button } from './AnswerOptions.style';
import AnswerOptionsInput from '../AnswerOptionsInput';

function AnswerOptions({
  handleAnswerBtnClick,
  handleInputChange,
  activeQuestion,
  valueInput,
}) {
  return (
    <>
      <BtnWrapper>
        {activeQuestion.answerOptions.map(({ id, answerText }) => (
          <Button key={id} onClick={() => handleAnswerBtnClick(answerText)}>
            {answerText}
          </Button>
        ))}
      </BtnWrapper>
      {activeQuestion.type.anotherVariant && (
        <AnswerOptionsInput
          handleInputChange={handleInputChange}
          valueInput={valueInput}
        />
      )}
    </>
  );
}

export default AnswerOptions;
