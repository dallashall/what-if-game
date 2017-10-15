const _state = {
  questions: {}
}

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_QUESTIONS":
      return Object.assign({}, state, { questions: action.questions });
    default:
      return state;
  }
}