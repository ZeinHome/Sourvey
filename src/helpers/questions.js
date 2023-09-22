import { v4 as uuidv4 } from 'uuid';

export const questions = [
  {
    title: 'Question 1',
    type: 'text',
    questionText: 'Укажите вашу страну?',
    inputPlaceholder: 'Введите вашу страну',
  },
  {
    title: 'Question 2',
    questionText: 'Привет',
    answerOptions: [
      {
        id: uuidv4(),
        answerText: 'Прівіт',
      },
      {
        id: uuidv4(),
        answerText: 'Hi',
      },
      {
        id: uuidv4(),
        answerText: 'What?',
      },
    ],
  },
];
