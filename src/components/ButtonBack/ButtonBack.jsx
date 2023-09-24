import { Button } from './ButtonBack.style';

function ButtonBack({ backCurrentQuestion }) {
  return (
    <Button type="button" onClick={() => backCurrentQuestion()}>
      Back
    </Button>
  );
}

export default ButtonBack;
