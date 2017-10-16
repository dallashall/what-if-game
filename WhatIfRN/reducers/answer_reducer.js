const _state = {};

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_ANSWERS":
      return Object.assign({}, state, action.answers);
    default:
      return state;
  }
}