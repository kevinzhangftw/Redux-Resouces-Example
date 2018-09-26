import { actionTypes } from 'redux-resource';
import xhr from 'xhr';
import createActionCreators from 'redux-resource-action-creators';
// import qs from 'querystring';

const readActionCreators = createActionCreators('read', {
  resourceType: 'quizzes',
  requestKey: 'fetchQuizzes',
});


const requestQuizzes = () => ({
  type: actionTypes.READ_RESOURCES_PENDING,
  resourceType: 'quizzes',
  requestKey: 'fetchQuizzes',
});

const fetchquizzes = (amount, difficulty, type) => (dispatch) => {
  dispatch(requestQuizzes());
  const queryString = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  const req = xhr.get(
    queryString,
    { json: true },
    (err, res, body) => {
      if (req.aborted) {
        dispatch(readActionCreators.idle());
      } else if (err || res.statusCode >= 400) {
        dispatch(readActionCreators.failed());
      } else {
        const resultsWithId = body.results.map((each, index) => ({ ...each, ...{ id: index } }));
        dispatch(readActionCreators.succeeded({
          resources: resultsWithId,
        }));
      }
    },
  );
};

export default fetchquizzes;
