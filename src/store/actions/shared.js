import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { getInitialData, saveQuestionAnswer } from '../../utils/api';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion } from '../../utils/api';

export const ADD_QUESTION = 'ADD_QUESTION';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(null));
      dispatch(hideLoading());
    });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

// Semi - implemented
export function submitAnswer(authedUser, qid, answer) {
  return { type: SUBMIT_ANSWER, authedUser, qid, answer };
}

export function handleSubmitAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    console.log(authedUser, qid, answer);
    return saveQuestionAnswer({ authedUser, qid, answer })
    .then(() => dispatch(submitAnswer(authedUser, qid, answer)))
    .then(() => { dispatch(hideLoading());})
  };
}
