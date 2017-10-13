import {
  postToApi
} from '../utils/api_util';

const receiveTeam = all => ({
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
