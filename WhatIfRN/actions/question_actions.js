import {
  postToApi
} from '../utils/api_util';

export const createQuestion = (question) => dispatch => {
  return postToApi('api/questions', {question})
    .then(
      action => dispatch(action),
      errors => console.log(errors)
    );
};