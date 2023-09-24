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
        AnswerCorrect: false,
      },
      {
        id: uuidv4(),
        answerText:
          'HTML - это язык, который используется для создания веб-серверов.',
        AnswerCorrect: false,
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
        AnswerCorrect: false,
      },
    ],
  },
  {
    title: 'html1',
    type: { anotherVariant: true, answerOptions: true },

    questionText: 'Что такое HTML, и для чего он используется? ',
    answerOptions: [
      {
        id: uuidv4(),
        answerText:
          'Внедрил новые семантические элементы и поддерживает мультимедийные возможности, включая аудио и видео, без плагинов.',
        AnswerCorrect: true,
      },
      {
        id: uuidv4(),
        answerText:
          'HTML5 поддерживает только текстовое содержание, а HTML4 позволяет вставлять видео и аудио.',
        AnswerCorrect: false,
      },
      {
        id: uuidv4(),
        answerText:
          'HTML5 предоставляет новый способ создания таблиц на веб-страницах, а HTML4 использует устаревший тег <table>.',
        AnswerCorrect: false,
      },
      {
        id: uuidv4(),
        answerText:
          'HTML4 требует использования атрибутов align и valign для выравнивания элементов, в то время как HTML5 использует CSS для этой цели.',
        AnswerCorrect: false,
      },
    ],
  },
];
