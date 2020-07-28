import { actions } from './actions';

export const initialState = {
  generalScore: 0,
  answers: [],
  lockedQuestions: [],
  questions: [
    {
      text: 'Переживаєте за успіх в роботі?',
      variants: [
        {
          text: 'Сильно',
          value: 1,
        },
        {
          text: 'Не дуже',
          value: 3,
        },
        {
          text: 'Не переживаю',
          value: 2,
        },
      ],
    },
    {
      text: 'Прагнете швидко досягти результату?',
      variants: [
        {
          text: 'Поступово',
          value: 2,
        },
        {
          text: 'Якомога швидше',
          value: 3,
        },
        {
          text: 'Дуже',
          value: 1,
        },
      ],
    },
    {
      text: 'Легко попадаєте в тупик при проблемах в роботі?',
      variants: [
        {
          text: 'Неодмінно',
          value: 1,
        },
        {
          text: 'Зрідка',
          value: 2,
        },
        {
          text: 'Поступово',
          value: 3,
        },
      ],
    },
    {
      text: 'Чи потрібен чіткий алгоритм для вирішення задач?',
      variants: [
        {
          text: 'Так',
          value: 1,
        },
        {
          text: 'В окремих випадках',
          value: 2,
        },
        {
          text: 'Не потрібен',
          value: 3,
        },
      ],
    },
    {
      text: 'Чи можете вирішити проблеми, з якими раніше не стикались?',
      variants: [
        {
          text: 'Так',
          value: 3,
        },
        {
          text: 'В окремих випадках',
          value: 2,
        },
        {
          text: 'Ні',
          value: 1,
        },
      ],
    },
    {
      text: 'Чи обираєте нові методи своєї роботи?',
      variants: [
        {
          text: 'Так',
          value: 3,
        },
        {
          text: 'Вибірково',
          value: 2,
        },
        {
          text: 'Вистачає досвіду',
          value: 1,
        },
      ],
    },
  ],
  resultImage: null
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type)   {
    case actions.ANSWER_QUESTION: {
      const {question, answer} = action.payload;
      let answers = [...state.answers];
      answers[question] = answer;
      return {
        ...state,
        answers,
      };
    }

    case actions.SHOW_NEXT_QUESTION: {
      let lockedQuestions = [...state.lockedQuestions]
      lockedQuestions[action.payload.index] = true;
      return {
        ...state,
        lockedQuestions,
      };
    }

    case actions.FINISH_TEST: {
      let {generalScore, questions, answers} = state;
      generalScore = answers.reduce(((previousValue, currentValue) => previousValue + currentValue / (questions.length * 3) * 100), 0);
      return {
        ...state,
        generalScore,
        lockedQuestions: state.questions.map(() => true),
      };
    }

    case actions.RESULT_IMAGE_LOADED: {
      const {imageURL} = action.payload;
      return {
        ...state,
        resultImage: imageURL
      };
    }

    default: {
      return state;
    }
  }
};