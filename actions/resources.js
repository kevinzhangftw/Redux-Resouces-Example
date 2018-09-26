import { actionTypes } from 'redux-resource';
import xhr from 'xhr';
import createActionCreators from 'redux-resource-action-creators';

const readActionCreatorsFor = (type, key) => createActionCreators('read', {
  resourceType: type,
  requestKey: key,
});

const requestResources = (type, key) => ({
  type: actionTypes.READ_RESOURCES_PENDING,
  resourceType: type,
  requestKey: key,
});

const fetchResources = (resourceType, resourceKey, queryString) => (dispatch) => {
  dispatch(requestResources(resourceType, resourceKey));
  const req = xhr.get(
    queryString,
    { json: true },
    (err, res, body) => {
      if (req.aborted) {
        dispatch(readActionCreatorsFor(resourceType, resourceKey).idle({
          requestProperties: {
            statusCode: null,
          },
        }));
      } else if (err || res.statusCode >= 400) {
        dispatch(readActionCreatorsFor(resourceType, resourceKey).failed({
          requestProperties: {
            statusCode: res.statusCode,
          },
        }));
      } else {
        // if each resource doesn come with id
        const resultsWithId = body.results.map((each, index) => ({ ...each, ...{ id: index } }));
        dispatch(readActionCreatorsFor(resourceType, resourceKey).succeeded({
          resources: resultsWithId,
          requestProperties: {
            statusCode: res.statusCode,
          },
        }));
      }
    },
  );
};

export default fetchResources;
