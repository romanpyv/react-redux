export const actions = {
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  SHOW_NEXT_QUESTION: 'SHOW_NEXT_QUESTION',
  FINISH_TEST: 'FINISH_TEST',
  RESULT_IMAGE_LOADED: 'RESULT_IMAGE_LOADED',
}

export const answerQuestion = (question, answer) => ({
  type: actions.ANSWER_QUESTION,
  payload: {
    question,
    answer,
  },
});

export const showNextQuestion = (index) => ({
  type: actions.SHOW_NEXT_QUESTION,
  payload: {
    index,
  },
});

export const finishTest = () => ({
  type: actions.FINISH_TEST,
});

export const resultImageLoaded = (imageURL) => ({
  type: actions.RESULT_IMAGE_LOADED,
  payload: {
    imageURL,
  },
});