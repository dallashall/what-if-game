const _state = {};

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_ANSWERS":
      return Object.assign({}, state, action.answers);
    case "RESTART_GAME":
      return _state;
    default:
      return state;
  }
}