import { v4 as uuidv4 } from 'uuid';

export const questions = [
  {
    title: 'country',
    type: { text: true },
    questionText: 'Укажите вашу страну?',
    inputPlaceholder: 'Введите вашу страну',
  },
  {
    title: 'html',
    type: { anotherVariant: true, answerOptions: true },

    questionText: 'Что такое HTML, и для чего он используется? ',
    answerOptions: [
      {
        id: uuidv4(),
        answerText: 'HTML - это язык программирования для создания веб-сайтов.',
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это язык, который используется для создания веб-серверов.',
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это язык разметки, который используется для создания структуры и содержания веб-страниц.',
        AnswerCorrect: true,
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это текстовый редактор, который помогает создавать веб-графику.',
      },
    ],
  },
  {
    title: 'html',
    type: { anotherVariant: true, answerOptions: true },

    questionText: 'Что такое HTML, и для чего он используется? ',
    answerOptions: [
      {
        id: uuidv4(),
        answerText: 'HTML - это язык программирования для создания веб-сайтов.',
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это язык, который используется для создания веб-серверов.',
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это язык разметки, который используется для создания структуры и содержания веб-страниц.',
        AnswerCorrect: true,
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это текстовый редактор, который помогает создавать веб-графику.',
      },
    ],
  },
];
