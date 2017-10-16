import {
  postToApi,
  getToApi
} from '../utils/api_util';

export const createTeam = () => dispatch => {
  return postToApi('api/teams')
    .then(
      action => dispatch(action),
      errors => console.log(errors)
    );
};

export const joinGame = code => dispatch => {
  return getToApi(`api/teams/${code}`)
    .then(
      action => dispatch(action),
      errors => console.log(errors)
    );
    // TODO: Add actual error handling
}

export const startGame = code => dispatch => {
  return postToApi(`api/teams/${code}`);
}
