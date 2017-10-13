export default (state, action) => {
  switch (action.type) {
    case "RECEIVE_ALL":
      return Object.assign({}, state, action.all);
    default:
      return { code: null };
  }
}