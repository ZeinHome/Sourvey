/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Base64 } from 'js-base64';
// import { StyleSheetManager } from 'styled-components';
// import axios from 'axios';

import { Container } from '../../Box';
import AnswerOptions from '../AnswerOptions';
import Input from '../Input';
import Submit from '../Submit';
import ParticlesComponent from '../ParticlesComponent';
// import Modal from '../Modal';
// import AccomplishedSurvey from '../AccomplishedSurvey';
// import Registration from '../Registration';
import { questions } from '../../helpers/questions';
import { Overlay, Wrapper, Title } from './SurveyComponent.style';

// SurveyWrapper,

// CheckboxBlock,
// CheckBtn,

// SelectOption,
// LabelSelect,
// BoxBtn,
// StyledTextArea,
// StyledTextAreaTwo,
// BtnNo,

const SurveyComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [valueInput, setValueInput] = useState('');
  const [surveyJson, setSurveyJson] = useState({});
  const [answerObject, setAnswerObject] = useState('');
  const [otherButton, setOtherButton] = useState(false);

  const activeQuestion = questions[currentQuestion];

  const nextCurrentQuestion = () => {
    setCurrentQuestion(prev => prev + 1);

    if (valueInput) {
      setSurveyJson(prev => ({
        ...prev,
        [questions[currentQuestion].title]: valueInput,
      }));

      setValueInput('');
    }

    setAnswerObject('');
    setOtherButton(false);
  };

  const backCurrentQuestion = () => {
    setCurrentQuestion(prev => prev - 1);

    setAnswerObject('');
    setOtherButton(false);
    setValueInput('');
  };

  const handleAnswerBtnClick = (answerText, AnswerCorrect) => {
    setAnswerObject(answerText);

    setSurveyJson(prev => ({
      ...prev,
      [questions[currentQuestion].title]: { answerText, AnswerCorrect },
    }));
  };

  const handleInputChange = e => {
    setValueInput(e.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onCompleteSurvey = () => {
    console.log(surveyJson);
  };

  useEffect(() => {
    if (currentQuestion === questions.length) {
      onCompleteSurvey();
    }
  }, [currentQuestion, onCompleteSurvey]);

  return (
    // <StyleSheetManager
    //   shouldForwardProp={prop =>
    //     ![
    //       'currentQuestion',
    //       'optionQuestion',
    //       'firstPath',
    //       'btnActionYes',
    //       'btnActionNo',
    //       'currentPath',
    //       'selectedOption',
    //     ].includes(prop)
    //   }
    // >

    <Overlay>
      <Container>
        {currentQuestion < questions.length ? (
          <Wrapper>
            {`Шаг ${currentQuestion + 1} из ${questions.length}`}

            <Title>{activeQuestion.questionText}</Title>

            {activeQuestion.type.answerOptions && (
              <AnswerOptions
                handleAnswerBtnClick={handleAnswerBtnClick}
                handleInputChange={handleInputChange}
                setOtherButton={setOtherButton}
                activeQuestion={activeQuestion}
                valueInput={valueInput}
                answerObject={answerObject}
                otherButton={otherButton}
              />
            )}

            {activeQuestion.type.text && (
              <Input
                handleInputChange={handleInputChange}
                valueInput={valueInput}
              />
            )}

            <Submit
              nextCurrentQuestion={nextCurrentQuestion}
              backCurrentQuestion={backCurrentQuestion}
              currentQuestion={currentQuestion}
              valueInput={valueInput}
              answerObject={answerObject}
            />
          </Wrapper>
        ) : (
          <button
            type="button"
            onClick={() => {
              setCurrentQuestion(0);
              setSurveyJson('');
              setTimeout(() => {
                console.clear();
              }, 1000);
            }}
            style={{ zIndex: 2 }}
          >
            Reset
          </button>
        )}
      </Container>
      <ParticlesComponent />
    </Overlay>

    // </StyleSheetManager>
  );
};

export default SurveyComponent;
