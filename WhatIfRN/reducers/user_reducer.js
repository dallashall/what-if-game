const _state = {
  user: {}
}

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_TEAM_AND_USER":
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
}