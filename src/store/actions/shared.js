import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { getInitialData } from '../../utils/api';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion } from '../../utils/api';

const AUTHED_ID = 'tylermcginnis';
export const ADD_QUESTION = 'ADD_QUESTION';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading())
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