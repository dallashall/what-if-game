const _state = {
  arrangement = [],
  ordinal = 0
}

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_ARRANGEMENT":
      return Object.assign({}, state, { arrangment: action.arrangment, ordinal: action.ordinal });
    case "RECEIVE_ORDINAL":
      return Object.assign({}, state, { ordinal: action.ordinal });
    default:
      return state;
  }
}