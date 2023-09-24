import { BtnWrapper, Button } from './AnswerOptions.style';
import AnswerOptionsInput from '../AnswerOptionsInput';

function AnswerOptions({
  handleAnswerBtnClick,
  handleInputChange,
  setOtherButton,
  activeQuestion,
  valueInput,
  answerObject,
  otherButton,
}) {
  return (
    <>
      <BtnWrapper>
        {activeQuestion.answerOptions.map(
          ({ id, answerText, AnswerCorrect }) => (
            <Button
              key={id}
              onClick={() => handleAnswerBtnClick(answerText, AnswerCorrect)}
              selected={answerObject === answerText}
            >
              {answerText}
            </Button>
          )
        )}
      </BtnWrapper>
      {activeQuestion.type.anotherVariant && (
        <AnswerOptionsInput
          handleInputChange={handleInputChange}
          setOtherButton={setOtherButton}
          valueInput={valueInput}
          otherButton={otherButton}
        />
      )}
    </>
  );
}

export default AnswerOptions;
