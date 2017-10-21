const _state = {};

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_TEAM_AND_USER":
      return Object.assign({}, state, action.user);
    case "RESTART_GAME":
      return _state;
    default:
      return state;
  }
}