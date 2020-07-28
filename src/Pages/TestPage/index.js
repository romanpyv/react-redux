import React from 'react';
import SwipeableStepper from '../../Components/SwipeableStepper';
import Question from '../../Components/Question';
import curry from '../../utils/curry';
import { answerQuestion, finishTest, showNextQuestion } from '../../store/actions';
import { connect } from 'react-redux';

const TestPage = ({questions, answers, nextQuestion, lockedQuestions, answerQuestion, finishTest}) => {
  return (
    <>
      <h1>Оцінювання навичок програміста</h1>
      <SwipeableStepper
        finishLink="/chart"
        allowedSteps={ answers.length }
        initialStep={ lockedQuestions.length }
        onNext={ nextQuestion }
        onFinish={ finishTest }
      >
        { questions.map((item, index) => (
          <Question
            key={ item.text }
            index={ index }
            disabled={ lockedQuestions[index] }
            onAnswer={ curry(answerQuestion)(index) }
            answer={ answers[index] }
            { ...item }
          />
        )) }
      </SwipeableStepper>
    </>
  )
}
const mapStateToProps = (state) => ({
  questions: state.questions,
  answers: state.answers,
  lockedQuestions: state.lockedQuestions,
});
const mapDispatchToProps = (dispatch) => ({
  answerQuestion: (index, question) => dispatch(answerQuestion(index, +question.target.value)),
  nextQuestion: (index) => dispatch(showNextQuestion(index)),
  finishTest: () => dispatch(finishTest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);