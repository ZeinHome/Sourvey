/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Base64 } from 'js-base64';
import { StyleSheetManager } from 'styled-components';
import axios from 'axios';
import { Container } from '../../Box';
// import Modal from '../Modal';
// import AccomplishedSurvey from '../AccomplishedSurvey';
// import Registration from '../Registration';
import { questions } from '../../helpers/questions';
import { Overlay } from './SurveyComponent.style';

console.log(questions);
// Wrapper
// Title,
// SurveyWrapper,
// BtnWrapper,
// StyledButton,
// Input,
// CheckboxBlock,
// CheckBtn,
// Submit,
// SubmitBtn,
// CustomInput,
// SelectOption,
// LabelSelect,
// BoxBtn,
// StyledTextArea,
// StyledTextAreaTwo,
// BtnNo,

const SurveyComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [surveyJson, setSurveyJson] = useState({});
  const [answerObject, setAnswerObject] = useState('');

  const nextCurrentQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
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
      <Container></Container>
    </Overlay>
    // </StyleSheetManager>
  );
};

export default SurveyComponent;
