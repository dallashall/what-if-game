const _state = {};

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_QUESTIONS":
      return Object.assign({}, state, action.questions);
    default:
      return state;
  }
}