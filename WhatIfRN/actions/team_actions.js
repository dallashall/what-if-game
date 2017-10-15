import {
  postToApi,
  getToApi
} from '../utils/api_util';

export const receiveTeam = all => ({
  type: "RECEIVE_ALL",
  all,
});

export const createTeam = () => dispatch => {
  return postToApi('api/teams')
    .then(
      all => dispatch(receiveTeam(all)),
      errors => console.log(errors)
    );
};

export const joinGame = code => dispatch => {
  return getToApi(`api/teams/${code}`)
    .then(
      all => dispatch(receiveTeam(all)),
      errors => console.log(errors)
    );
    // TODO: Add actual error handling
}
