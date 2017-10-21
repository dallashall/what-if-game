const _state = "Home";

export default (state = _state, action) => {
  // debugger
  switch (action.type) {
    case "RECEIVE_SCREEN":
      return action.screen;
    case "RESTART_GAME":
      return _state;
    default:
      return state;
  }
};
