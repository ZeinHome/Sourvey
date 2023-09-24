import { SubmitWrapper, SubmitBtn } from './Submit.style';

function Submit({ nextCurrentQuestion, valueInput, answerObject }) {
  return (
    <SubmitWrapper>
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
