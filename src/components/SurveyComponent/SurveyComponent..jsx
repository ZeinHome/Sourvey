/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Base64 } from 'js-base64';
// import { StyleSheetManager } from 'styled-components';
// import axios from 'axios';
import { Container } from '../../Box';
import AnswerOptions from '../AnswerOptions';
import Input from '../Input';
import Submit from '../Submit';
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

  const activeQuestion = questions[currentQuestion];
  console.log(surveyJson);
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
  };

  const handleAnswerBtnClick = answerText => {
    setAnswerObject(answerText);

    setSurveyJson(prev => ({
      ...prev,
      [questions[currentQuestion].title]: answerText,
    }));
  };

  const handleInputChange = e => {
    setValueInput(e.target.value);
  };

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
        {currentQuestion < questions.length ? null : (
          <button
            type="button"
            onClick={() => {
              setCurrentQuestion(0);
              setSurveyJson('');
            }}
          >
            Reset
          </button>
        )}
        {currentQuestion < questions.length ? (
          <Wrapper>
            {`Шаг ${currentQuestion + 1} из ${questions.length}`}

            <Title>{activeQuestion.questionText}</Title>

            {activeQuestion.type.answerOptions && (
              <AnswerOptions
                handleAnswerBtnClick={handleAnswerBtnClick}
                handleInputChange={handleInputChange}
                activeQuestion={activeQuestion}
                valueInput={valueInput}
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
              valueInput={valueInput}
              answerObject={answerObject}
            />
          </Wrapper>
        ) : null}
      </Container>
    </Overlay>
    // </StyleSheetManager>
  );
};

export default SurveyComponent;
