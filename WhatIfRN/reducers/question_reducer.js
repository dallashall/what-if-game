const _state = {};

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_QUESTIONS":
      return Object.assign({}, state, action.questions);
    case "RESTART_GAME":
      return _state;
    default:
      return state;
  }
}