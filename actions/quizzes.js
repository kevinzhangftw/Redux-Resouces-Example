import { actionTypes } from 'redux-resource';
import xhr from 'xhr';
// import qs from 'querystring';

const requestQuizzes = () => ({
  type: actionTypes.READ_RESOURCES_PENDING,
  resourceType: 'quizzes',
  requestKey: 'fetch',
});

const fetchquizzes = (amount, difficulty, type) => (dispatch) => {
  dispatch(requestQuizzes());
  const queryString = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  const req = xhr.get(
    queryString,
    { json: true },
    (err, res, body) => {
      if (req.aborted) {
        dispatch({
          type: actionTypes.READ_RESOURCES_IDLE,
          resourceType: 'quizzes',
          requestKey: 'fetch',
          requestProperties: {
            statusCode: null,
          },
        });
      } else if (err || res.statusCode >= 400) {
        dispatch({
          type: actionTypes.READ_RESOURCES_FAILED,
          resourceType: 'quizzes',
          requestKey: 'fetch',
          requestProperties: {
            statusCode: res.statusCode,
          },
        });
      } else {
        const resultsWithId = body.results.map((each, index) => ({ ...each, ...{ id: index } }));
        dispatch({
          type: actionTypes.READ_RESOURCES_SUCCEEDED,
          resourceType: 'quizzes',
          requestKey: 'fetch',
          resources: resultsWithId,
          requestProperties: {
            statusCode: res.statusCode,
          },
        });
      }
    },
  );
};

export default fetchquizzes;
