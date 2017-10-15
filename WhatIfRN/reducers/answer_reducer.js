const _state = {
  answers: {}
}

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_ANSWERS":
      return Object.assign({}, state, { answers: action.answers });
    default:
      return state;
  }
}