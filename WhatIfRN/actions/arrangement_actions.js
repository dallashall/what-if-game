import {
  postToApi
} from '../utils/api_util';

export const setOrdinal = (ordinal) => dispatch => {
  return postToApi('api/ordinal', ordinal)
    .then(
      action => dispatch(action),
      errors => console.log(errors)
    );
};