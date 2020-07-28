import { initialState, mainReducer } from './mainReducer';
import * as a from './actions';

describe('Main reducer', () => {
  const reducer = mainReducer.bind(null, initialState);

  it('ANSWER_QUESTION', () => {
    const action = a.answerQuestion(2, 1);
    const actual = reducer(action);
    const expected = {
      ...initialState,
      answers: [undefined, undefined, 1],
    }

    expect(actual).toEqual(expected);
  });

  it('SHOW_NEXT_QUESTION', () => {
    const action = a.showNextQuestion(3);
    const actual = reducer(action);
    const expected = {
      ...initialState,
      lockedQuestions: [undefined, undefined, undefined, true],
    };

    expect(actual).toEqual(expected);
  });

  it('FINISH_TEST', () => {
    const action = a.finishTest();

    expect(reducer(action)).toEqual({
      ...initialState,
      generalScore: 0,
      lockedQuestions: initialState.questions.map(() => true),
    });

    const state = initialState;
    state.answers = [1, 1, 1];


    expect(mainReducer(state, action)).toEqual({
      ...state,
      generalScore: 3 / (state.questions.length * 3) * 100,
      lockedQuestions: initialState.questions.map(() => true),
    });

  });

  it('RESULT_IMAGE_LOADED', () => {
    const imageURL = 'url';
    const action = a.resultImageLoaded(imageURL);
    const actual = reducer(action);
    const expected = {
      ...initialState,
      resultImage: imageURL,
    };


    expect(actual).toEqual(expected);
  });

  it('DEFAULT', () => {
    const unrealAction = {type: 'test type'};
    const actual = reducer(unrealAction);

    expect(actual).toEqual(initialState);
  });
});