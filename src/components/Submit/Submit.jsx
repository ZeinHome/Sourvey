import ButtonBack from '../ButtonBack';
import { SubmitWrapper, SubmitBtn } from './Submit.style';

function Submit({
  nextCurrentQuestion,
  backCurrentQuestion,
  currentQuestion,
  valueInput,
  answerObject,
}) {
  return (
    <SubmitWrapper>
      {currentQuestion < 1 ? null : (
        <ButtonBack backCurrentQuestion={backCurrentQuestion} />
      )}
      <SubmitBtn
        onClick={() => nextCurrentQuestion()}
        disabled={!valueInput && !answerObject}
      >
        Next
      </SubmitBtn>
    </SubmitWrapper>
  );
}

export default Submit;
