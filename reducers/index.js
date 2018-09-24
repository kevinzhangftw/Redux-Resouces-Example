import { combineReducers } from 'redux';
import { resourceReducer } from 'redux-resource';

export default combineReducers({
  quizzes: resourceReducer('quizzes'),
});
