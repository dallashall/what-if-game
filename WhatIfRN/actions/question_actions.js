import {
  postToApi
} from '../utils/api_util';

export const createQuestion = (question) => dispatch => {
  return postToApi('api/questions', {question});
};