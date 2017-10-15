import {
  postToApi
} from '../utils/api_util';

export const createAnswer = (answer) => dispatch => {
  return postToApi('api/answers', {answer})
    .then(
      action => dispatch(action),
      errors => console.log(errors)
    );
};