import fetchResources from './resources';

export const fetchQuizzes = () => dispatch => fetchResources('quizzes', 'fetchQuizzes', 'https://opentdb.com/api.php?amount=5&difficulty=hard&type=boolean')(dispatch);
